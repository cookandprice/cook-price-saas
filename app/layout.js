```js
export const metadata = {
  title: 'Cook Price SaaS',
  description: 'App de calcul de prix pour cuisiniers',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}