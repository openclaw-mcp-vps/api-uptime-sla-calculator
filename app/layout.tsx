import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Uptime SLA Calculator — Calculate SLA Credits from API Downtime',
  description: 'Monitor API endpoints and automatically calculate SLA credit amounts owed by service providers. Built for engineering teams using third-party APIs.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0182d588-c08a-4ada-9740-b463eddd6715"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
