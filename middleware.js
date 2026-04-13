import { NextResponse } from 'next/server'

const locales = ['es', 'ca', 'en']
const defaultLocale = 'es'

export function middleware(request) {
  const { pathname } = request.nextUrl

  const hasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (!hasLocale) {
    return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url))
  }
}

export const config = {
  matcher: ['/((?!_next|favicon\\.ico|.*\\..*).*)'],
}
