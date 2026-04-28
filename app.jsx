/* global React, ReactDOM */
const { useState: useStateApp, useEffect: useEffectApp, useMemo: useMemoApp } = React;

// ---------- Theme presets (Tweaks) ----------
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "electric"
}/*EDITMODE-END*/;

const THEMES = {
  electric: {
    label: 'Electric',
    vars: {
      '--bg': '#0A0B0F', '--bg-elev': '#11131A', '--bg-card': '#161922',
      '--line': '#232734', '--line-strong': '#2E3344',
      '--ink': '#F5F7FA', '--ink-dim': '#A8AEBE', '--ink-muted': '#6B7185',
      '--accent': '#00E0FF', '--accent-deep': '#00B8D4',
      '--accent-soft': 'rgba(0, 224, 255, 0.12)',
    }
  },
  ignite: {
    label: 'Ignite',
    vars: {
      '--bg': '#0B0908', '--bg-elev': '#161210', '--bg-card': '#1D1815',
      '--line': '#2A211C', '--line-strong': '#3A2D26',
      '--ink': '#F8F4F0', '--ink-dim': '#B8A89D', '--ink-muted': '#7A6B61',
      '--accent': '#FF6B2C', '--accent-deep': '#E54E10',
      '--accent-soft': 'rgba(255, 107, 44, 0.12)',
    }
  },
  citrus: {
    label: 'Citrus',
    vars: {
      '--bg': '#0A0B07', '--bg-elev': '#13150E', '--bg-card': '#1A1D14',
      '--line': '#252A1D', '--line-strong': '#33392A',
      '--ink': '#F4F8E8', '--ink-dim': '#A6B095', '--ink-muted': '#6E7660',
      '--accent': '#D4FF3D', '--accent-deep': '#B0E51E',
      '--accent-soft': 'rgba(212, 255, 61, 0.12)',
    }
  },
  arctic: {
    label: 'Arctic',
    vars: {
      '--bg': '#FAFBFC', '--bg-elev': '#FFFFFF', '--bg-card': '#FFFFFF',
      '--line': '#E5E8EC', '--line-strong': '#CBD2DA',
      '--ink': '#0A0E14', '--ink-dim': '#3D4858', '--ink-muted': '#7A8694',
      '--accent': '#0066FF', '--accent-deep': '#0048B8',
      '--accent-soft': 'rgba(0, 102, 255, 0.10)',
    }
  }
};

function applyTheme(themeKey) {
  const theme = THEMES[themeKey] || THEMES.electric;
  Object.entries(theme.vars).forEach(([k, v]) => document.documentElement.style.setProperty(k, v));
}

// ---------- App ----------
function App() {
  const [state, setState] = useStateApp(() => {
    const loaded = window.loadState();
    return loaded || { user: null, scores: {}, currentLesson: null, view: 'login' };
  });
  const [tweaks, setTweaks] = window.useTweaks(TWEAK_DEFAULTS);

  useEffectApp(() => { applyTheme(tweaks.theme); }, [tweaks.theme]);
  useEffectApp(() => { window.saveState(state); }, [state]);

  const lessons = window.LESSONS;
  const passedSections = useMemoApp(() => {
    return Object.entries(state.scores).filter(([id, s]) => s >= 75).map(([id]) => Number(id));
  }, [state.scores]);

  const progress = { passedSections, completed: passedSections.length, scores: state.scores };

  function handleLogin(user) {
    setState(s => ({ ...s, user, view: 'dashboard' }));
  }
  function handleLogout() {
    if (confirm('Sign out and clear progress on this device?')) {
      localStorage.removeItem(window.STORAGE_KEY);
      setState({ user: null, scores: {}, currentLesson: null, view: 'login' });
    }
  }
  function openLesson(id) {
    setState(s => ({ ...s, currentLesson: id, view: 'lesson' }));
  }
  function completeLesson(id, score) {
    const newScores = { ...state.scores, [id]: Math.max(state.scores[id] || 0, score) };
    const allDone = lessons.every(l => (newScores[l.id] || 0) >= 75);
    setState(s => ({
      ...s,
      scores: newScores,
      currentLesson: null,
      view: allDone ? 'certificate' : 'dashboard'
    }));
  }
  function gotoDashboard() {
    setState(s => ({ ...s, currentLesson: null, view: 'dashboard' }));
  }
  function viewCertificate() {
    setState(s => ({ ...s, view: 'certificate' }));
  }

  // Render
  if (state.view === 'login' || !state.user) {
    return (
      <>
        <window.LoginScreen onSubmit={handleLogin} />
        <ThemeTweaks tweaks={tweaks} setTweaks={setTweaks} />
      </>
    );
  }

  const currentLesson = lessons.find(l => l.id === state.currentLesson);
  const currentIdx = currentLesson ? lessons.findIndex(l => l.id === currentLesson.id) : -1;

  return (
    <>
      <window.TopNav user={state.user} progress={progress} onLogout={handleLogout} onHome={gotoDashboard} />
      {state.view === 'dashboard' && (
        <window.Dashboard
          user={state.user}
          lessons={lessons}
          progress={progress}
          onOpen={openLesson}
          onCertificate={viewCertificate}
        />
      )}
      {state.view === 'lesson' && currentLesson && (
        <window.LessonView
          lesson={currentLesson}
          idx={currentIdx}
          total={lessons.length}
          onBack={gotoDashboard}
          onComplete={completeLesson}
        />
      )}
      {state.view === 'certificate' && (
        <window.Certificate
          user={state.user}
          scores={state.scores}
          lessons={lessons}
          onBack={gotoDashboard}
        />
      )}
      <ThemeTweaks tweaks={tweaks} setTweaks={setTweaks} />
    </>
  );
}

// ---------- Theme Tweaks Panel ----------
function ThemeTweaks({ tweaks, setTweaks }) {
  const TweaksPanel = window.TweaksPanel;
  const TweakSection = window.TweakSection;
  const TweakRadio = window.TweakRadio;
  if (!TweaksPanel) return null;
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Color Theme">
        <TweakRadio
          label="Palette"
          value={tweaks.theme}
          onChange={v => setTweaks('theme', v)}
          options={Object.entries(THEMES).map(([k, t]) => ({ value: k, label: t.label }))}
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, marginTop: 12 }}>
          {Object.entries(THEMES).map(([k, t]) => (
            <button
              key={k}
              onClick={() => setTweaks('theme', k)}
              style={{
                aspectRatio: '1', borderRadius: 8, cursor: 'pointer',
                background: t.vars['--bg'],
                border: `2px solid ${tweaks.theme === k ? t.vars['--accent'] : 'rgba(255,255,255,0.08)'}`,
                position: 'relative', overflow: 'hidden'
              }}
              title={t.label}
            >
              <div style={{ position: 'absolute', inset: '20% 30%', borderRadius: 4, background: t.vars['--accent'] }}/>
            </button>
          ))}
        </div>
      </TweakSection>
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
