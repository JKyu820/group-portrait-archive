import { expect, test } from '@playwright/test'

test('the 26-person baseline loads, remains clickable, and supports search', async ({ page, isMobile }) => {
  const errors: string[] = []
  page.on('pageerror', (error) => errors.push(error.message))
  await page.goto('/')

  const portraits = page.locator('.stage .portrait')
  await expect(portraits).toHaveCount(26)
  await expect(page.getByText('26 PORTRAITS', { exact: false })).toBeVisible()
  await expect.poll(() => portraits.locator('img').evaluateAll((images) =>
    images.filter((image) => image instanceof HTMLImageElement && image.complete && image.naturalWidth > 0).length,
  )).toBe(26)
  const assets = await portraits.locator('img').evaluateAll((images) =>
    images.map((image) => image.getAttribute('src')),
  )
  expect(new Set(assets).size).toBe(26)
  expect(await portraits.allTextContents()).toEqual(Array<string>(26).fill(''))

  const profile = page.locator('#member-profile')
  for (const portrait of await portraits.all()) {
    await portrait.scrollIntoViewIfNeeded()
    const aim = await portrait.locator('img').evaluate((image) => {
      const { left, top, width, height } = image.getBoundingClientRect()
      const x = left + width * 0.5
      const y = top + height * 0.41
      const hit = document.elementFromPoint(x, y)?.closest('.portrait')?.getAttribute('data-member-id')
      return { x, y, hit }
    })
    const memberId = await portrait.getAttribute('data-member-id')
    expect(aim.hit).toBe(memberId)
    if (isMobile) await page.touchscreen.tap(aim.x, aim.y)
    else await page.mouse.click(aim.x, aim.y)
    await expect(portrait).toHaveAttribute('aria-pressed', 'true')
    await expect(profile.locator('img')).toHaveAttribute('src', `/assets/members/${memberId}.svg`)
    await profile.getByRole('button', { name: '关闭个人名片' }).click()
    await expect(profile).toHaveCount(0)
  }

  const search = page.getByLabel('寻找人物')
  await search.fill('＃００６')
  await search.press('Enter')
  await expect(profile.getByRole('heading', { name: '青屿' })).toBeVisible()

  await search.fill('晨露')
  const result = page.locator('.search-results').getByRole('button', { name: /026 晨露/ })
  if (isMobile) await result.tap()
  else await result.click()
  await expect(profile.getByRole('heading', { name: '晨露' })).toBeVisible()
  const selected = page.getByRole('button', { name: '026 晨露', exact: true })
  await expect(selected).toHaveAttribute('aria-pressed', 'true')
  await expect(page.locator('.portrait-muted')).toHaveCount(25)
  if (isMobile) {
    await expect.poll(() => selected.evaluate((portrait) => {
      const { top, height } = portrait.getBoundingClientRect()
      const panelTop = document.querySelector('#member-profile')?.getBoundingClientRect().top ?? 0
      const faceY = top + height * 0.41
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
