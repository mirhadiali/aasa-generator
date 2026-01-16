import Link from 'next/link';

export default function Footer() {
    return (
        <footer style={{
            marginTop: 'auto',
            textAlign: 'center',
            opacity: 0.6,
            fontSize: '0.9rem',
            padding: '40px 20px',
            borderTop: '1px solid var(--card-border)',
            width: '100%',
            maxWidth: '1000px',
            margin: '80px auto 0 auto'
        }}>
            <div style={{ marginBottom: '12px' }}>
                <p style={{ fontWeight: 600 }}>Contact & Support</p>
                <a href="mailto:hadi.kudcs@gmail.com" style={{ color: 'var(--primary)', textDecoration: 'none' }}>hadi.kudcs@gmail.com</a>
            </div>
            <div style={{ marginBottom: '16px' }}>
                <Link href="/mirhadiali" target="_blank" style={{ color: 'var(--foreground)', textDecoration: 'none', transition: 'opacity 0.2s' }}>
                    Connect on LinkedIn →
                </Link>
            </div>
            <p>&copy; {new Date().getFullYear()} Mir Muhammad Hadi Ali. All rights reserved.</p>
        </footer>
    );
}
