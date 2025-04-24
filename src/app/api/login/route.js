import { NextResponse } from 'next/server'

export async function POST(request) {
  const body = await request.json()

  const res = await fetch('https://lar-sao-francisco.onrender.com/api/v1/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    return NextResponse.json({ error: 'Login inválido' }, { status: 401 })
  }

  const data = await res.json()

  const response = NextResponse.json({ success: true })

  response.cookies.set('token', data.access_token, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    path: '/',
  })

  return response
}
