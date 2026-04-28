/* global React */
const { useState, useEffect, useMemo, useRef } = React;

// ---------- Storage ----------
const STORAGE_KEY = 'kenetik-cert-v1';
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) { return null; }
}
function saveState(state) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
}

// ---------- Logo ----------
function Logo({ height = 18 }) {
  return (
    <span className="logo" style={{ height }}>
      <svg viewBox="0 0 3586 484" xmlns="http://www.w3.org/2000/svg">
        <g>
          <polygon points="0 0 115 0 115 241 283.99 0 413.98 0 245.1 242.35 413.98 484 285.49 484 115 243 115 484 0 484 0 0"></polygon>
          <path d="M3585.86,29c-.31,3.17.44,6.95,0,10-4.88,34-57.93,34.84-61.89-.61-4.45-39.95,53.43-48,61.89-9.39ZM3550.62,8.27c-29.74,4.02-27.4,53.03,4.63,52.62,34-.43,32.86-57.69-4.63-52.62Z"></path>
          <polygon points="1214.45 0 1424.94 289 1424.94 1.5 1426.44 0 1540.94 0 1540.94 484 1430.44 484 1218.95 196 1218.95 484 1103.96 484 1103.96 0 1214.45 0"></polygon>
          <polygon points="3366.87 241 3366.87 0 3481.86 0 3481.86 484 3366.87 484 3366.87 243 3196.37 484 3067.88 484 3235.92 242.45 3066.88 0 3196.37 0 3366.87 241"></polygon>
          <polygon points="867.97 0 867.97 102 702.97 102 702.97 191 858.97 191 858.97 282.5 857.47 284 702.97 284 702.97 382 872.47 382 873.97 383.5 873.97 484 587.98 484 587.98 0 867.97 0"></polygon>
          <path d="M2055.92,0v102h-164.99v89h154.99v93h-154.99v98h169.99v102h-285.99c-.27-.73,1-1.2,1-1.5V0h279.99Z"></path>
          <polygon points="2573.9 0 2573.9 102.5 2572.4 104 2480.9 104 2480.9 484 2365.91 484 2365.91 104 2273.91 104 2273.91 0 2573.9 0"></polygon>
          <rect x="2780.89" width="115" height="484"></rect>
          <path d="M3559.36,16c9.79,1.37,13.46,13.42,6.48,18.48-1.84,1.34-5.32.82-5,3.02l9.02,14.48c-11.91,2.49-9.68-18.44-22-14.99v15h-5V16c5.18.51,11.49-.7,16.5,0ZM3547.86,32.01c21.71,3.4,21.73-14.41,0-11.01v11.01Z"></path>
        </g>
      </svg>
    </span>
  );
}

// ---------- Top Nav ----------
function TopNav({ user, progress, onLogout, onHome }) {
  const initial = user ? user.name.trim().charAt(0).toUpperCase() : '?';
  return (
    <nav className="topnav">
      <div className="topnav-inner">
        <button onClick={onHome} className="topnav-brand" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          <Logo height={16} />
          <span className="badge">CERTIFIED TRAINER PROGRAM</span>
        </button>
        {user && (
          <div className="topnav-user">
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span>{progress.completed}/10</span>
              <div style={{ width: 80 }} className="progress"><span style={{ width: `${progress.completed * 10}%` }}></span></div>
            </span>
            <div className="avatar" title={user.name}>{initial}</div>
            <button onClick={onLogout} className="btn btn-ghost" style={{ minHeight: 36, padding: '8px 14px', fontSize: 11 }}>Sign out</button>
          </div>
        )}
      </div>
    </nav>
  );
}

// ---------- Login ----------
function Login({ onSubmit }) {
  const [form, setForm] = useState({ name: '', email: '', business: '', location: '' });
  const [touched, setTouched] = useState(false);

  const valid = form.name.trim() && /\S+@\S+\.\S+/.test(form.email) && form.business.trim() && form.location.trim();

  function submit(e) {
    e.preventDefault();
    setTouched(true);
    if (!valid) return;
    onSubmit({ ...form, startedAt: new Date().toISOString() });
  }

  return (
    <div style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
      {/* LEFT: hero */}
      <div style={{
        position: 'relative', overflow: 'hidden',
        background: 'radial-gradient(ellipse at 30% 20%, rgba(0,224,255,0.18), transparent 60%), var(--bg)',
        padding: '64px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
      }} className="login-hero">
        <div style={{ color: 'var(--ink)' }}>
          <Logo height={22} />
        </div>
        <div>
          <div className="t-eyebrow" style={{ marginBottom: 24 }}>Certified Trainer Program · 2026</div>
          <h1 className="t-display t-h1" style={{ color: 'var(--ink)' }}>
            Performance<br/>starts in<br/><span style={{ color: 'var(--accent)' }}>the mind.</span>
          </h1>
          <p style={{ marginTop: 32, fontSize: 18, color: 'var(--ink-dim)', maxWidth: 480, lineHeight: 1.5 }}>
            Master the science of D-BHB ketones and learn how to confidently introduce Kenetik to every type of client — from CrossFit athletes to executives in their 50s.
          </p>
          <div style={{ display: 'flex', gap: 32, marginTop: 40, flexWrap: 'wrap' }}>
            <Stat n="10" label="Lessons · ~2 min each" />
            <Stat n="40" label="Quiz questions" />
            <Stat n="75%" label="To certify" />
          </div>
        </div>
        <div className="t-mono" style={{ color: 'var(--ink-muted)', fontSize: 11 }}>
          KEN-CTP // V1.0 // INFORMED SPORT CERTIFIED
        </div>
      </div>

      {/* RIGHT: form */}
      <div style={{ background: 'var(--bg-elev)', padding: '64px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} className="login-form">
        <form onSubmit={submit} style={{ maxWidth: 440, margin: '0 auto', width: '100%' }}>
          <div className="t-eyebrow" style={{ marginBottom: 12 }}>// REGISTRATION</div>
          <h2 className="t-h2" style={{ color: 'var(--ink)', marginBottom: 8 }}>Begin your<br/>certification.</h2>
          <p style={{ color: 'var(--ink-dim)', marginBottom: 32 }}>Your progress and final certificate are tied to this profile.</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <Field label="Full Name" value={form.name} onChange={v => setForm({...form, name: v})} placeholder="Alex Rivera" error={touched && !form.name.trim()} />
            <Field label="Email" type="email" value={form.email} onChange={v => setForm({...form, email: v})} placeholder="alex@gymname.com" error={touched && !/\S+@\S+\.\S+/.test(form.email)} />
            <Field label="Gym / Business" value={form.business} onChange={v => setForm({...form, business: v})} placeholder="Iron Forge Athletics" error={touched && !form.business.trim()} />
            <Field label="Location" value={form.location} onChange={v => setForm({...form, location: v})} placeholder="Austin, TX" error={touched && !form.location.trim()} />
          </div>

          <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: 32 }}>
            Start Lesson 01 →
          </button>
          <p style={{ fontSize: 12, color: 'var(--ink-muted)', marginTop: 16, textAlign: 'center' }}>
            Progress saves automatically. Come back anytime.
          </p>
        </form>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .login-hero, .login-form { padding: 40px 24px !important; }
          div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

function Stat({ n, label }) {
  return (
    <div>
      <div className="t-display" style={{ fontSize: 40, color: 'var(--accent)', lineHeight: 1 }}>{n}</div>
      <div className="t-mono" style={{ color: 'var(--ink-muted)', marginTop: 6, fontSize: 11 }}>{label}</div>
    </div>
  );
}

function Field({ label, value, onChange, type = 'text', placeholder, error }) {
  return (
    <div className="field">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        style={error ? { borderColor: 'var(--error)' } : {}}
      />
    </div>
  );
}

window.LoginScreen = Login;
window.TopNav = TopNav;
window.Logo = Logo;
window.loadState = loadState;
window.saveState = saveState;
window.STORAGE_KEY = STORAGE_KEY;
