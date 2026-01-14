import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const domain = searchParams.get('domain');

    if (!domain) {
        return NextResponse.json({ error: 'Domain is required' }, { status: 400 });
    }

    // Clean domain (remove http/https if present)
    const cleanDomain = domain.replace(/^https?:\/\//, '').replace(/\/$/, '');

    const urls = [
        `https://${cleanDomain}/.well-known/apple-app-site-association`,
        `https://${cleanDomain}/apple-app-site-association`
    ];

    for (const url of urls) {
        try {
            const response = await fetch(url, {
                headers: {
                    'User-Agent': 'AASA-Lookup-Tool/1.0'
                },
                next: { revalidate: 3600 } // Cache for 1 hour
            });

            if (response.ok) {
                const data = await response.json();
                return NextResponse.json({ url, data });
            }
        } catch (error) {
            console.log(`Failed to fetch from ${url}:`, error);
        }
    }

    return NextResponse.json({
        error: 'AASA file not found or could not be fetched. Ensure the domain is correct and supports HTTPS.'
    }, { status: 404 });
}
