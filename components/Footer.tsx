import Link from 'next/link';

export default function Footer() {
    return (
        <footer style={{
            marginTop: 'auto',
            textAlign: 'center',
            padding: '40px 20px',
            width: '100%',
            maxWidth: '1000px',
            margin: '80px auto 0 auto'
        }}>
            <div className="glass" style={{
                padding: '32px',
                borderRadius: '24px',
                marginBottom: '40px',
                display: 'inline-block',
                minWidth: '300px'
            }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', fontWeight: 700 }}>Get in Touch</h3>
                <div style={{ marginBottom: '12px' }}>
                    <a href="mailto:hadi.kudcs@gmail.com" style={{
                        color: 'var(--primary)',
                        textDecoration: 'none',
                        fontSize: '1.1rem',
                        fontWeight: 500
                    }}>
                        hadi.kudcs@gmail.com
                    </a>
                </div>
                <div>
                    <Link href="/mirhadiali" target="_blank" style={{
                        color: 'var(--foreground)',
                        textDecoration: 'none',
                        fontWeight: 600,
                        opacity: 0.9,
                        display: 'inline-block',
                        marginTop: '8px',
                        borderBottom: '2px solid var(--primary)'
                    }}>
                        Connect on LinkedIn →
                    </Link>
                </div>
            </div>

            <p style={{ opacity: 0.5, fontSize: '0.85rem' }}>
                &copy; {new Date().getFullYear()} Mir Muhammad Hadi Ali. All rights reserved.
            </p>
        </footer>
    );
}
