
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    const { email, name, subject } = await request.json();

    if (!email || !name || !subject) {
        return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Validation
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
        console.error('Missing SMTP configuration');
        return NextResponse.json({ error: 'Server configuration error: Missing SMTP credentials' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: parseInt(process.env.SMTP_PORT || '587') === 465, // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    const mailOptions = {
        from: `"${name}" <${process.env.SMTP_USER}>`, // Sender address (often must match auth user)
        replyTo: email, // Valid email of the contact person
        to: process.env.CONTACT_EMAIL || 'julianpeloz@gmail.com',
        subject: `[Contacto Web] ${subject} - ${name}`,
        text: `Nombre: ${name}\nEmail: ${email}\nAsunto: ${subject}`,
        html: `
            <h3>Nuevo mensaje de contacto web</h3>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Asunto:</strong> ${subject}</p>
        `,
    };

    try {
        await transporter.verify(); // Verify connection configuration
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error: any) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: error.message || 'Error sending email' }, { status: 500 });
    }
}
