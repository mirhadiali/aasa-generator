import Link from 'next/link';

export default function Home() {
  return (
    <main className="app-container">
      <header style={{ marginBottom: '80px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '24px', fontWeight: 800 }}>
          Universal Link <span style={{ background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Mastery</span>
        </h1>
        <p style={{ fontSize: '1.5rem', opacity: 0.8, maxWidth: '700px', margin: '0 auto', lineHeight: 1.4 }}>
          The ultimate toolkit for iOS developers to manage and verify Apple App Site Association (AASA) files.
        </p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '80px' }}>
        <Link href="/lookup" className="glass" style={{ padding: '40px', textDecoration: 'none', color: 'inherit' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '12px' }}>AASA Lookup →</h2>
          <p style={{ opacity: 0.7, fontSize: '1.1rem' }}>Inspect any domain's AASA file and understand how they configure their Universal Links.</p>
        </Link>
        <Link href="/generator" className="glass" style={{ padding: '40px', textDecoration: 'none', color: 'inherit' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '12px' }}>AASA Generator →</h2>
          <p style={{ opacity: 0.7, fontSize: '1.1rem' }}>Build your own compliant association file with our dynamic form and real-time preview.</p>
        </Link>
      </div>

      <section className="glass" style={{ padding: '60px', marginBottom: '80px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Premium Development Services</h2>
        <p style={{ fontSize: '1.25rem', opacity: 0.7, marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px auto' }}>
          Expert assistance for complex Universal Link implementations.
        </p>

        <div style={{
          background: 'var(--accent-gradient)',
          padding: '40px',
          borderRadius: '24px',
          color: 'white',
          textAlign: 'left',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '40px',
          alignItems: 'center'
        }}>
          <div>
            <h3 style={{ fontSize: '2rem', marginBottom: '16px' }}>Full iOS Integration</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', opacity: 0.9 }}>
              I provide end-to-end Universal Link integration for iOS applications.
              From deep-link architecture and AASA configuration to AppDelegate/SceneDelegate implementation
              and robust error handling. Ensure your users have a seamless journey from web to app.
            </p>
            <ul style={{ marginTop: '24px', listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <li>✓ Deep Link Architecture</li>
              <li>✓ AASA Hosting Setup</li>
              <li>✓ Swift/SwiftUI Integration</li>
              <li>✓ Testing & Verification</li>
            </ul>
          </div>
          <div style={{ textAlign: 'center' }}>
            <a href="mailto:hadi.kudcs@gmail.com" className="glass" style={{
              padding: '20px 40px',
              borderRadius: '40px',
              color: 'white',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '1.2rem',
              display: 'inline-block',
              background: 'rgba(255,255,255,0.2)',
              border: '1px solid rgba(255,255,255,0.3)'
            }}>
              Hire Me →
            </a>
          </div>
        </div>
      </section>

      <section className="glass" style={{ padding: '60px', marginBottom: '80px' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '32px', textAlign: 'center' }}>How AASA Works</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
          <div>
            <h3 style={{ marginBottom: '16px', color: 'var(--primary)' }}>1. Association</h3>
            <p style={{ lineHeight: 1.6, opacity: 0.8 }}>
              The <code>apple-app-site-association</code> file creates a secure link between your website and your app. By hosting this file on your server, you prove ownership of the domain.
            </p>
          </div>
          <div>
            <h3 style={{ marginBottom: '16px', color: 'var(--primary)' }}>2. Verification</h3>
            <p style={{ lineHeight: 1.6, opacity: 0.8 }}>
              When a user installs your app, iOS downloads the AASA file from your domain. It verifies that the <code>appID</code> in the file matches the one defined in your app's Entitlements.
            </p>
          </div>
          <div>
            <h3 style={{ marginBottom: '16px', color: 'var(--primary)' }}>3. Routing</h3>
            <p style={{ lineHeight: 1.6, opacity: 0.8 }}>
              Universal Links use standard HTTPS URLs. When a user clicks a link, iOS checks the AASA rules. If the path matches, the app opens directly; otherwise, it opens in Safari.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '60px', padding: '30px', background: 'var(--input-bg)', borderRadius: '16px' }}>
          <h4 style={{ marginBottom: '12px' }}>Pro Tip: Deployment</h4>
          <p style={{ opacity: 0.7, fontSize: '0.95rem' }}>
            Always host your AASA file at <code>https://yourdomain.com/.well-known/apple-app-site-association</code>.
            The file must be served over HTTPS with <code>Content-Type: application/json</code> and must NOT have a file extension.
          </p>
        </div>
      </section>
      <section id="contact" style={{ textAlign: 'center', marginBottom: '80px' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '48px' }}>Let&apos;s Build Together</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <Link href="https://linkedin.com/in/mirhadiali" target="_blank" className="glass" style={{
            padding: '24px 48px',
            borderRadius: '20px',
            textDecoration: 'none',
            color: 'inherit',
            minWidth: '280px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px'
          }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
            <p style={{ fontSize: '1.25rem', fontWeight: 600 }}>LinkedIn</p>
          </Link>

          <Link href="https://github.com/mirhadiali" target="_blank" className="glass" style={{
            padding: '24px 48px',
            borderRadius: '20px',
            textDecoration: 'none',
            color: 'inherit',
            minWidth: '280px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px'
          }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
            </svg>
            <p style={{ fontSize: '1.25rem', fontWeight: 600 }}>GitHub</p>
          </Link>
        </div>
      </section>

      <footer style={{ textAlign: 'center', opacity: 0.5, fontSize: '0.9rem', paddingBottom: '40px' }}>
        <p>&copy; {new Date().getFullYear()} Mir Muhammad Hadi Ali. All rights reserved.</p>
      </footer>

    </main>
  );
}
