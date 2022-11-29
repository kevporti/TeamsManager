export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head></head>
      <body>
        <nav>Nav</nav>
        {children}</body>
    </html>
  )
}
