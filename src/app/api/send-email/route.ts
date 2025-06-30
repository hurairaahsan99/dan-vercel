import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // const {
    //   name,
    //   activity,
    //   contact,
    //   job,
    //   first,
    //   last,
    //   email,
    //   mobile,
    //   city,
    //   farm,
    //   message,
    // } = body;

    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: true,
      },
    });

    const mailOptions = {
      from: `Dan Website - <${process.env.MAIL_FROM}>`,
      to: process.env.MAIL_TO,
      subject: body?.formTitle,
      text: Object.entries(body?.formValues || {})
        .map(([key, value]) => `${key}: ${value}`)
        .join('\n'),
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Error sending email', error },
      { status: 500 },
    );
  }
}
