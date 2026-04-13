import '../globals.css'
import { getTranslations } from '../translations'

export async function generateMetadata({ params }) {
  const t = getTranslations(params.lang)
  return { title: t.meta.title, description: t.meta.description }
}

export function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'ca' }, { lang: 'en' }]
}

export default function LangLayout({ children, params }) {
  return (
    <html lang={params.lang}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
