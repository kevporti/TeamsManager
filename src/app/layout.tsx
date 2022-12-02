export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head></head>
      <body className='bg-cool-gray-900'>
        <nav>Nav</nav>
        {children}
      </body>
    </html>
  );
}
