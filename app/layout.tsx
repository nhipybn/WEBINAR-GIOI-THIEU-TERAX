import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Webinar Terax | Control Union Việt Nam',
  description: 'Giới thiệu Terax – số hóa truy xuất nguồn gốc và sẵn sàng cho EUDR cùng Control Union Việt Nam.',
  generator: 'Control Union Việt Nam',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#173d35',
  userScalable: true,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body>
    </html>
  )
}
