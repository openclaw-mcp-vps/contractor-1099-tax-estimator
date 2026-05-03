import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Contractor 1099 Tax Estimator — Estimate Quarterly Taxes',
  description: 'Track contractor income and automatically calculate quarterly tax estimates with payment reminders. Built for independent contractors and freelancers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a3e4cf20-459d-446e-a918-7fd2f2b2a818"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
