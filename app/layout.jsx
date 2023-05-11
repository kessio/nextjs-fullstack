import '@styles/globals.css';

export const metadata = {
  title: "Promptopia",
  description: "Discover, share the latest prompts"
}

const RootLayout = ({ children }) => {
  return (
    <html lang="eng">
      <body>
        <div className='main'>
          <div className='gradient' />
        </div>
        <main className='app'>
          {children}
        </main>
      </body>

    </html>
  )
}

export default RootLayout