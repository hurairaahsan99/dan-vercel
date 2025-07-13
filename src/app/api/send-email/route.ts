import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Function to determine the target email based on form title
function getTargetEmail(formTitle: any): string {
  // Handle both string and object formats
  let title = '';
  if (typeof formTitle === 'string') {
    title = formTitle.toLowerCase();
  } else if (formTitle && typeof formTitle === 'object' && formTitle.en) {
    title = formTitle.en.toLowerCase();
  } else {
    return process.env.DEFAULT_EMAIL || '';
  }

  // Franchise forms
  if (title.includes('franchise partnership') || title.includes('franchise partner')) {
    return process.env.FRANCHISE_EMAIL || process.env.DEFAULT_EMAIL || '';
  }

  // Supplier forms
  if (title.includes('supplier registration')) {
    return process.env.SUPPLIER_EMAIL || process.env.DEFAULT_EMAIL || '';
  }

  // Careers form
  if (title.includes('join dan team')) {
    return process.env.CAREERS_EMAIL || process.env.DEFAULT_EMAIL || '';
  }

  // Business Partner form
  if (title.includes('business partner')) {
    return process.env.BUSINESS_PARTNER_EMAIL || process.env.DEFAULT_EMAIL || '';
  }

  // Media Registration form
  if (title.includes('media registration form')) {
    return process.env.MEDIA_EMAIL || process.env.DEFAULT_EMAIL || '';
  }

  // Default email for Assist Form and other forms
  return process.env.DEFAULT_EMAIL || '';
}

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

    // Get the appropriate email address based on form title
    const targetEmail = getTargetEmail(body?.formTitle);

    const mailOptions = {
      from: `Dan Website - <${process.env.MAIL_FROM}>`,
      to: targetEmail,
      subject: typeof body?.formTitle === 'object' ? body?.formTitle?.en : body?.formTitle,
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
