import AasaGenerator from "@/components/AasaGenerator";

export const metadata = {
    title: "AASA Generator | Universal Link Tool",
    description: "Create your apple-app-site-association file for iOS.",
};

export default function GeneratorPage() {
    return (
        <main className="app-container">
            <header style={{ marginBottom: '48px', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '16px' }}>AASA Generator</h1>
                <p style={{ fontSize: '1.25rem', opacity: 0.7, maxWidth: '600px', margin: '0 auto' }}>
                    Build a compliant association file for your iOS apps.
                </p>
            </header>

            <AasaGenerator />
        </main>
    );
}
