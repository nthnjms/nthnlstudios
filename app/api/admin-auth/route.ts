import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { password } = await req.json()
  const correct = process.env.ADMIN_PASSWORD

  if (!correct) {
    return NextResponse.json({ error: 'No password set' }, { status: 500 })
  }

  if (password === correct) {
    return NextResponse.json({ success: true })
  }

  return NextResponse.json({ error: 'Incorrect password' }, { status: 401 })
}