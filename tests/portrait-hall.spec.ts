import { expect, test } from '@playwright/test'
import type { Locator, Page } from '@playwright/test'

async function selectPortrait(page: Page, portrait: Locator, touch: boolean) {
  await portrait.scrollIntoViewIfNeeded()
  const aim = await portrait.locator('img').evaluate((image) => {
    const { left, top, width, height } = image.getBoundingClientRect()
    const x = left + width * 0.5
    const y = top + height * 0.4
    const hit = document.elementFromPoint(x, y)?.closest('.portrait')?.getAttribute('data-member-id')
    return { x, y, hit }
  })
  const memberId = await portrait.getAttribute('data-member-id')
  expect(aim.hit).toBe(memberId)
  if (touch) await page.touchscreen.tap(aim.x, aim.y)
  else await page.mouse.click(aim.x, aim.y)
  await expect(portrait).toHaveAttribute('aria-pressed', 'true')
}

test('the 28-person group hall loads, remains clickable, and supports search', async ({ page, isMobile }) => {
  const errors: string[] = []
  page.on('pageerror', (error) => errors.push(error.message))
  await page.goto('/')

  const portraits = page.locator('.stage .portrait')
  await expect(portraits).toHaveCount(28)
  await expect(page.getByText('28 PORTRAITS', { exact: false })).toBeVisible()
  await expect.poll(() => portraits.locator('img').evaluateAll((images) =>
    images.filter((image) => image instanceof HTMLImageElement && image.complete && image.naturalWidth > 0).length,
  )).toBe(28)
  const assets = await portraits.locator('img').evaluateAll((images) =>
    images.map((image) => image.getAttribute('src')),
  )
  expect(new Set(assets).size).toBe(28)
  expect(await portraits.allTextContents()).toEqual(Array<string>(28).fill(''))
  for (const asset of assets) {
    if (!asset?.endsWith('.svg')) continue
    const response = await page.request.get(asset)
    expect(response.ok()).toBe(true)
    expect(await response.text()).not.toMatch(/<text\b/)
  }

  const profile = page.locator('#member-profile')
  for (const portrait of await portraits.all()) {
    const memberId = await portrait.getAttribute('data-member-id')
    await selectPortrait(page, portrait, isMobile)
    await expect(profile.locator('.profile-avatar img')).toHaveAttribute('src', new RegExp(`${memberId}\\.(webp|svg)$`))
    await expect(profile.locator('#profile-name')).not.toHaveText('')
    await profile.getByRole('button', { name: '关闭个人名片' }).click()
    await expect(profile).toHaveCount(0)
  }

  const search = page.getByLabel('寻找人物')
  await search.fill('＃００６')
  await search.press('Enter')
  await expect(profile.getByRole('heading', { name: '星探越' })).toBeVisible()

  await search.fill('冒泡喜')
  const result = page.locator('.search-results').getByRole('button', { name: /028 冒泡喜/ })
  if (isMobile) await result.tap()
  else await result.click()
  await expect(profile.getByRole('heading', { name: '冒泡喜' })).toBeVisible()
  const selected = page.getByRole('button', { name: '028 冒泡喜', exact: true })
  await expect(selected).toHaveAttribute('aria-pressed', 'true')
  await expect(page.locator('.portrait-muted')).toHaveCount(27)
  if (isMobile) {
    await expect.poll(() => selected.evaluate((portrait) => {
      const { top, height } = portrait.getBoundingClientRect()
      const panelTop = document.querySelector('#member-profile')?.getBoundingClientRect().top ?? 0
      const faceY = top + height * 0.4
      return faceY >= 0 && faceY < panelTop
    })).toBe(true)
  }

  await page.getByRole('button', { name: '清空搜索' }).click()
  await expect(profile).toHaveCount(0)
  await expect(page.locator('.portrait-muted')).toHaveCount(0)
  await search.fill('不存在')
  await expect(page.getByText(/没有找到人物/)).toBeVisible()
  expect(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBe(0)
  expect(errors).toEqual([])
})

test('switches portraits without closing the current profile', async ({ page, isMobile }) => {
  await page.goto('/')
  const profile = page.locator('#member-profile')
  for (const id of ['001', '015', '002', '020']) {
    const portrait = page.locator(`[data-member-id="member-${id}"]`)
    await selectPortrait(page, portrait, isMobile)
    await expect(profile.locator('.profile-index')).toHaveText(`/ ${id}`)
  }
})

test('closing a profile opened by a legacy link clears the member on reload', async ({ page }) => {
  const portrait = page.locator('[data-member-id="member-014"]')
  await page.goto('/?from=test#014')
  await expect(portrait).toHaveAttribute('aria-pressed', 'true')
  await expect(page).toHaveURL(/\?from=test&member=014$/)

  const close = page.getByRole('button', { name: '关闭个人名片' })
  await close.click()
  await expect(page).toHaveURL(/\?from=test$/)
  await page.reload({ waitUntil: 'networkidle' })
  await expect(close).toHaveCount(0)

  const label = await portrait.getAttribute('aria-label')
  const nickname = label?.replace(/^014 /, '')
  expect(nickname).toBeTruthy()
  await page.goto(`/?member=${encodeURIComponent(nickname!)}#gallery`)
  await expect(portrait).toHaveAttribute('aria-pressed', 'true')
  await expect(page).toHaveURL(/\?member=014#gallery$/)
  await close.click()
  await expect(page).toHaveURL(/\/#gallery$/)
})
