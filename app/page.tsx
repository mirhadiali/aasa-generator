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

    </main>
  );
}
