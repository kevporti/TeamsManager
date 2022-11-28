export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head></head>
      <nav>Nav</nav>
      <body>{children}</body>
    </html>
  )
}
