import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, service, description, budget } = body

    if (!name || !email || !service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    await resend.emails.send({
      from: 'NTHNL Studios <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'hello@nthnlstudios.com',
      subject: `New Project Brief from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0f0f0f; color: #f5f5f0; padding: 40px; border: 1px solid rgba(184,149,42,0.3);">
          <h1 style="font-size: 28px; color: #b8952a; margin-bottom: 24px; letter-spacing: 0.1em;">
            NEW PROJECT BRIEF
          </h1>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid rgba(184,149,42,0.15);">
              <td style="padding: 12px 0; color: rgba(245,245,240,0.45); font-size: 12px; text-transform: uppercase; width: 140px;">Name</td>
              <td style="padding: 12px 0; font-size: 15px;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(184,149,42,0.15);">
              <td style="padding: 12px 0; color: rgba(245,245,240,0.45); font-size: 12px; text-transform: uppercase;">Email</td>
              <td style="padding: 12px 0; font-size: 15px; color: #b8952a;">${email}</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(184,149,42,0.15);">
              <td style="padding: 12px 0; color: rgba(245,245,240,0.45); font-size: 12px; text-transform: uppercase;">Service</td>
              <td style="padding: 12px 0; font-size: 15px;">${service}</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(184,149,42,0.15);">
              <td style="padding: 12px 0; color: rgba(245,245,240,0.45); font-size: 12px; text-transform: uppercase;">Budget</td>
              <td style="padding: 12px 0; font-size: 15px;">${budget || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: rgba(245,245,240,0.45); font-size: 12px; text-transform: uppercase; vertical-align: top;">Brief</td>
              <td style="padding: 12px 0; font-size: 15px; line-height: 1.7;">${description || 'No description provided'}</td>
            </tr>
          </table>
          <div style="margin-top: 40px; padding-top: 24px; border-top: 1px solid rgba(184,149,42,0.15); font-size: 11px; color: rgba(245,245,240,0.3);">
            NTHNL STUDIOS — hello@nthnlstudios.com
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    )
  }
}