import AasaGenerator from "@/components/AasaGenerator";
import AasaLookup from "@/components/AasaLookup";

export default function Home() {
  return (
    <main className="app-container">
      <header style={{ marginBottom: '48px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '16px' }}>AASA Tool</h1>
        <p style={{ fontSize: '1.25rem', opacity: 0.7, maxWidth: '600px', margin: '0 auto' }}>
          Generate your own Apple App Site Association file or lookup existing ones from any domain.
        </p>
      </header>

      <section style={{ marginBottom: '64px' }}>
        <AasaLookup />
      </section>

      <div style={{ height: '40px' }}></div>
      <hr style={{ border: 'none', borderTop: '1px solid var(--card-border)', marginBottom: '80px', opacity: 0.5 }} />

      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '12px' }}>Generator</h2>
        <p style={{ opacity: 0.7, fontSize: '1.1rem' }}>Build a new association file for your app</p>
      </div>

      <AasaGenerator />

      <footer style={{ marginTop: '80px', textAlign: 'center', opacity: 0.5, fontSize: '0.9rem', paddingBottom: '40px' }}>
        <p>&copy; {new Date().getFullYear()} Apple Universal Link Support Tool</p>
        <p style={{ marginTop: '8px' }}>
          Built for iOS and macOS developers to streamline app association.
        </p>
      </footer>
    </main>
  );
}
