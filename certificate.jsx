/* global React */
const { useState: useStateC } = React;

// ---------- Certificate ----------
function Certificate({ user, scores, lessons, onBack }) {
  const avg = Math.round(
    Object.values(scores).reduce((a, b) => a + b, 0) / Object.values(scores).length
  );
  const certNum = useStateC(() => {
    const seed = user.email + user.startedAt;
    let h = 0;
    for (let i = 0; i < seed.length; i++) h = ((h << 5) - h) + seed.charCodeAt(i) | 0;
    const num = Math.abs(h).toString(36).toUpperCase().padStart(6, '0').slice(0, 6);
    return `KEN-CTP-2026-${num}`;
  })[0];
  const completedDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  function downloadPrint() { window.print(); }

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', padding: '40px 20px' }}>
      {/* Toolbar */}
      <div className="container no-print" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 32 }}>
        <button onClick={onBack} className="btn btn-ghost">← Back to dashboard</button>
        <button onClick={downloadPrint} className="btn btn-primary">Download / Print PDF ↓</button>
      </div>

      {/* Certificate sheet */}
      <div className="cert-sheet" style={{
        maxWidth: 1100, margin: '0 auto',
        background: '#0A0B0F',
        border: '1px solid var(--accent)',
        boxShadow: '0 0 80px rgba(0, 224, 255, 0.18), 0 0 0 1px rgba(0, 224, 255, 0.4)',
        position: 'relative', overflow: 'hidden',
        aspectRatio: '11 / 8.5',
        color: 'var(--ink)',
      }}>
        {/* Background grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          opacity: 0.4,
          pointerEvents: 'none',
        }}/>
        {/* Glow corners */}
        <div style={{
          position: 'absolute', top: -200, right: -200, width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(0, 224, 255, 0.25), transparent 70%)',
          pointerEvents: 'none',
        }}/>
        <div style={{
          position: 'absolute', bottom: -200, left: -200, width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(0, 224, 255, 0.15), transparent 70%)',
          pointerEvents: 'none',
        }}/>

        {/* Corner ticks */}
        {['tl', 'tr', 'bl', 'br'].map(p => (
          <div key={p} style={{
            position: 'absolute',
            [p[0] === 't' ? 'top' : 'bottom']: 24,
            [p[1] === 'l' ? 'left' : 'right']: 24,
            width: 28, height: 28,
            borderTop: p[0] === 't' ? '2px solid var(--accent)' : 'none',
            borderBottom: p[0] === 'b' ? '2px solid var(--accent)' : 'none',
            borderLeft: p[1] === 'l' ? '2px solid var(--accent)' : 'none',
            borderRight: p[1] === 'r' ? '2px solid var(--accent)' : 'none',
          }}/>
        ))}

        <div style={{ position: 'relative', padding: '64px 80px', height: '100%', display: 'flex', flexDirection: 'column' }}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32 }}>
            <div style={{ color: 'var(--ink)' }}>
              <Logo height={20} />
            </div>
            <div style={{ textAlign: 'right' }}>
              <div className="t-eyebrow" style={{ color: 'var(--accent)' }}>// CERTIFICATE</div>
              <div className="t-mono" style={{ fontSize: 11, color: 'var(--ink-muted)', marginTop: 4 }}>{certNum}</div>
            </div>
          </div>

          {/* Title block */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <div className="t-eyebrow" style={{ color: 'var(--ink-dim)', marginBottom: 16 }}>This certifies that</div>
            <div className="t-display" style={{
              fontSize: 'clamp(48px, 7vw, 84px)',
              color: 'var(--ink)',
              marginBottom: 8,
              lineHeight: 1
            }}>
              {user.name}
            </div>
            <div className="t-mono" style={{ color: 'var(--ink-muted)', fontSize: 13, marginBottom: 36 }}>
              {user.business} · {user.location}
            </div>

            <div style={{
              padding: '16px 28px',
              border: '1px solid var(--accent)',
              borderRadius: 4,
              background: 'rgba(0, 224, 255, 0.06)'
            }}>
              <div className="t-display" style={{ fontSize: 26, color: 'var(--accent)' }}>
                KENETIK CERTIFIED TRAINER
              </div>
            </div>

            <div style={{ marginTop: 32, color: 'var(--ink-dim)', maxWidth: 580, lineHeight: 1.6, fontSize: 14 }}>
              has successfully completed all 10 sections of the Kenetik Certified Trainer Program — demonstrating expert knowledge of D-BHB ketones, the Kenetik product family, and the science of metabolic brain fuel for client performance, recovery, and longevity.
            </div>
          </div>

          {/* Footer signatures */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, paddingTop: 24, borderTop: '1px solid var(--line)' }}>
            <CertField label="Final Score" value={`${avg}%`} accent />
            <CertField label="Sections Completed" value={`${Object.keys(scores).length} / 10`} />
            <CertField label="Date Completed" value={completedDate} />
            <CertField label="Credential ID" value={certNum} mono />
          </div>
        </div>
      </div>

      <style>{`
        @media print {
          @page { size: landscape; margin: 0; }
          body, html { background: #0A0B0F !important; }
          .cert-sheet { box-shadow: none !important; max-width: 100% !important; height: 100vh !important; aspect-ratio: auto !important; border: none !important; }
        }
      `}</style>
    </div>
  );
}

function CertField({ label, value, accent, mono }) {
  return (
    <div>
      <div className="t-mono" style={{ fontSize: 10, color: 'var(--ink-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 6 }}>{label}</div>
      <div style={{
        fontFamily: mono ? 'JetBrains Mono, monospace' : 'Archivo, sans-serif',
        fontWeight: mono ? 500 : 800,
        fontSize: mono ? 13 : 18,
        color: accent ? 'var(--accent)' : 'var(--ink)',
        textTransform: mono ? 'none' : 'uppercase',
      }}>{value}</div>
    </div>
  );
}

window.Certificate = Certificate;
