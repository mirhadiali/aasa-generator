'use client';

import React, { useState, useEffect } from 'react';
import styles from './AasaGenerator.module.css';

interface PathComponent {
  "/": string;
  exclude?: boolean;
  comment?: string;
}

interface AppConfig {
  id: string;
  bundleId: string;
  teamId: string;
  paths: string[];
  components: PathComponent[];
}

export default function AasaGenerator() {
  const [apps, setApps] = useState<AppConfig[]>([
    {
      id: Math.random().toString(36).substr(2, 9),
      bundleId: 'com.example.app',
      teamId: 'ABCDE12345',
      paths: ['*'],
      components: [
        { "/": "*", comment: "Allow all paths" }
      ]
    }
  ]);

  const [jsonOutput, setJsonOutput] = useState('');

  useEffect(() => {
    const generateJson = () => {
      const applinks = {
        details: apps.map(app => ({
          appIDs: [`${app.teamId}.${app.bundleId}`],
          components: app.components.map(comp => ({
            "/": comp["/"],
            ...(comp.exclude ? { exclude: true } : {}),
            ...(comp.comment ? { comment: comp.comment } : {})
          }))
        }))
      };

      setJsonOutput(JSON.stringify({ applinks }, null, 2));
    };

    generateJson();
  }, [apps]);

  const addApp = () => {
    setApps([...apps, {
      id: Math.random().toString(36).substr(2, 9),
      bundleId: '',
      teamId: '',
      paths: ['*'],
      components: [{ "/": "*", comment: "Allow all paths" }]
    }]);
  };

  const removeApp = (id: string) => {
    if (apps.length > 1) {
      setApps(apps.filter(app => app.id !== id));
    }
  };

  const updateApp = (id: string, field: keyof AppConfig, value: any) => {
    setApps(apps.map(app => app.id === id ? { ...app, [field]: value } : app));
  };

  const addComponent = (appId: string) => {
    setApps(apps.map(app => {
      if (app.id === appId) {
        return {
          ...app,
          components: [...app.components, { "/": "/", comment: "" }]
        };
      }
      return app;
    }));
  };

  const updateComponent = (appId: string, index: number, field: keyof PathComponent, value: any) => {
    setApps(apps.map(app => {
      if (app.id === appId) {
        const newComponents = [...app.components];
        newComponents[index] = { ...newComponents[index], [field]: value };
        return { ...app, components: newComponents };
      }
      return app;
    }));
  };

  const removeComponent = (appId: string, index: number) => {
    setApps(apps.map(app => {
      if (app.id === appId && app.components.length > 1) {
        const newComponents = app.components.filter((_, i) => i !== index);
        return { ...app, components: newComponents };
      }
      return app;
    }));
  };

  const downloadAasa = () => {
    const element = document.createElement("a");
    // Using application/octet-stream to prevent browsers from automatically adding .json extension
    const file = new Blob([jsonOutput], { type: 'application/octet-stream' });
    element.href = URL.createObjectURL(file);
    element.download = "apple-app-site-association";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(jsonOutput);
    alert('Copied to clipboard!');
  };

  return (
    <div className={styles.generatorGrid}>
      <div className={styles.formSection}>
        <div className={`${styles.section} glass`}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>App Configurations</h2>
            <button onClick={addApp} className="secondary-btn">+ Add App</button>
          </div>

          <p className={styles.description}>
            Enter your Apple Team ID and Bundle ID. Define the paths that should trigger your app to open.
          </p>

          {apps.map((app, appIdx) => (
            <div key={app.id} className={styles.appCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.badge}>App #{appIdx + 1}</span>
                {apps.length > 1 && (
                  <button onClick={() => removeApp(app.id)} className={styles.removeBtn}>✕</button>
                )}
              </div>

              <div className={styles.generatorGrid} style={{ gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>Team ID (e.g. ABCDE12345)</label>
                  <input
                    type="text"
                    value={app.teamId}
                    onChange={(e) => updateApp(app.id, 'teamId', e.target.value)}
                    placeholder="ABCDE12345"
                  />
                </div>
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>Bundle ID (e.g. com.company.app)</label>
                  <input
                    type="text"
                    value={app.bundleId}
                    onChange={(e) => updateApp(app.id, 'bundleId', e.target.value)}
                    placeholder="com.example.app"
                  />
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Path Components</label>
                {app.components.map((comp, compIdx) => (
                  <div key={compIdx} className={styles.pathRow}>
                    <div style={{ flex: 2 }}>
                      <label className={styles.fieldLabel} style={{ fontSize: '10px' }}>Path (e.g. /help/*)</label>
                      <input
                        type="text"
                        value={comp["/"]}
                        onChange={(e) => updateComponent(app.id, compIdx, '/', e.target.value)}
                        placeholder="/"
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <label className={styles.fieldLabel} style={{ fontSize: '10px' }}>Comment</label>
                      <input
                        type="text"
                        value={comp.comment}
                        onChange={(e) => updateComponent(app.id, compIdx, 'comment', e.target.value)}
                        placeholder="Optional"
                      />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '60px' }}>
                      <label className={styles.fieldLabel} style={{ fontSize: '10px' }}>Exclude</label>
                      <input
                        type="checkbox"
                        checked={comp.exclude || false}
                        onChange={(e) => updateComponent(app.id, compIdx, 'exclude', e.target.checked)}
                        style={{ width: '20px', height: '20px' }}
                      />
                    </div>
                    {app.components.length > 1 && (
                      <button onClick={() => removeComponent(app.id, compIdx)} className={styles.removeBtn}>✕</button>
                    )}
                  </div>
                ))}
                <button
                  onClick={() => addComponent(app.id)}
                  className="secondary-btn"
                  style={{ marginTop: '10px', fontSize: '13px' }}
                >
                  + Add Path
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.previewContainer}>
        <div className={`${styles.section} glass`}>
          <div className={styles.previewHeader}>
            <h3 className={styles.sectionTitle}>File Preview</h3>
            <button onClick={copyToClipboard} className="secondary-btn">Copy</button>
          </div>
          <div className={styles.codeBlock}>
            {jsonOutput}
          </div>
          <button onClick={downloadAasa} className={`primary-btn ${styles.downloadBtn}`} style={{ width: '100%' }}>
            Download AASA File
          </button>
          <p style={{ marginTop: '16px', fontSize: '12px', opacity: 0.6, textAlign: 'center' }}>
            Place this file at <code>.well-known/apple-app-site-association</code> on your server.
          </p>
        </div>
      </div>
    </div>
  );
}
