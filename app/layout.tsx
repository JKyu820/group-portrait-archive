import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: '群像纪念册 · 日光留影',
  description: '在一张合照里，遇见 26 位虚构测试人物。群像纪念册排布原型。',
  icons: { icon: '/archive-mark.svg' },
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
