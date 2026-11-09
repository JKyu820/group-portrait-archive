import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: '群像纪念册 · 日光留影',
  description: '在一张合照里，遇见第六组的 28 位伙伴。',
  icons: { icon: '/archive-mark.svg' },
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
