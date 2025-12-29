import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { email, name } = await request.json();

    if (!email) {
        return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const DATACENTER = process.env.MAILCHIMP_DC; // e.g. us19

    if (!API_KEY || !AUDIENCE_ID || !DATACENTER) {
        return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

    const data = {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
            FNAME: name || '', // Optional first name
        },
        tags: ['pfw_newsletter']
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                Authorization: `apikey ${API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.status >= 400) {
            const errorData = await response.json();

            // Allow re-subscription if member exists (handle 'Member Exists' 400 error cleanly if needed, or Mailchimp returns 400 title "Member Exists")
            if (errorData.title === "Member Exists") {
                return NextResponse.json({ message: 'User already subscribed' }, { status: 200 });
            }

            console.error('Mailchimp Error:', errorData);
            return NextResponse.json({ error: errorData.detail || 'Error subscribing to newsletter' }, { status: response.status });
        }

        return NextResponse.json({ message: 'Successfully subscribed' }, { status: 200 });

    } catch (error) {
        console.error('API Route Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
