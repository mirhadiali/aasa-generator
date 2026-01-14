'use client';

import React, { useState } from 'react';
import styles from './AasaGenerator.module.css';

export default function AasaLookup() {
    const [domain, setDomain] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    const handleLookup = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!domain) return;

        setLoading(true);
        setError(null);
        setResult(null);

        try {
            const response = await fetch(`/api/lookup?domain=${encodeURIComponent(domain)}`);
            const data = await response.json();

            if (response.ok) {
                setResult(data);
            } else {
                setError(data.error || 'Failed to fetch AASA file');
            }
        } catch (err) {
            setError('An error occurred while fetching the AASA file.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={`${styles.section} glass`} style={{ marginTop: '24px' }}>
            <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>AASA Lookup</h2>
            </div>

            <p className={styles.description}>
                Enter a domain to view its <code>apple-app-site-association</code> file.
                This is useful for debugging other websites or seeing how they configure Universal Links.
            </p>

            <form onSubmit={handleLookup} style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
                <input
                    type="text"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    placeholder="e.g. youtube.com"
                    style={{ flex: 1 }}
                />
                <button
                    type="submit"
                    className="primary-btn"
                    disabled={loading}
                    style={{ minWidth: '120px' }}
                >
                    {loading ? 'Searching...' : 'Lookup'}
                </button>
            </form>

            {error && (
                <div style={{ padding: '16px', borderRadius: '12px', background: 'rgba(255, 59, 48, 0.1)', color: '#ff3b30', marginBottom: '20px' }}>
                    {error}
                </div>
            )}

            {result && (
                <div>
                    <div className={styles.previewHeader}>
                        <span className={styles.badge} style={{ textTransform: 'none' }}>
                            Found at: {result.url}
                        </span>
                        <button
                            onClick={() => navigator.clipboard.writeText(JSON.stringify(result.data, null, 2))}
                            className="secondary-btn"
                        >
                            Copy JSON
                        </button>
                    </div>
                    <div className={styles.codeBlock}>
                        {JSON.stringify(result.data, null, 2)}
                    </div>
                </div>
            )}
        </div>
    );
}
