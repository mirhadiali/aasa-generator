import AasaLookup from "@/components/AasaLookup";

export const metadata = {
    title: "AASA Lookup | Universal Link Tool",
    description: "Lookup apple-app-site-association files from any domain.",
};

export default function LookupPage() {
    return (
        <main className="app-container">
            <header style={{ marginBottom: '48px', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '16px' }}>AASA Lookup</h1>
                <p style={{ fontSize: '1.25rem', opacity: 0.7, maxWidth: '600px', margin: '0 auto' }}>
                    Explore existing Universal Link configurations from any website.
                </p>
            </header>

            <AasaLookup />
        </main>
    );
}
