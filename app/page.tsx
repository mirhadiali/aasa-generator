import AasaGenerator from "@/components/AasaGenerator";

export default function Home() {
  return (
    <main className="app-container">
      <header style={{ marginBottom: '48px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '16px' }}>AASA Generator</h1>
        <p style={{ fontSize: '1.25rem', opacity: 0.7, maxWidth: '600px', margin: '0 auto' }}>
          Create your Apple App Site Association file for Universal Links with ease.
          Apple-compliant JSON structure, ready for deployment.
        </p>
      </header>

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
