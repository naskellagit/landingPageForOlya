import './global.css'

export const metadata = {
  title: 'Fast and quality academic assignments',
  description: 'Help with academic assignments. Making your tasks easier! Guiding you step by step, starting with research and ending with writing articles. Save time, reduce stress and achieve excellent results. Let\'s solve your academic problems together — no more struggle, only success!'
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
