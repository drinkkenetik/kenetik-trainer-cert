/* global React */
const { useState: useState2, useEffect: useEffect2, useMemo: useMemo2 } = React;

// ---------- Dashboard ----------
function Dashboard({ user, lessons, progress, onOpen, onCertificate }) {
  const allComplete = progress.passedSections.length === lessons.length;

  return (
    <div className="container" style={{ padding: '48px 24px 80px' }}>
      {/* Hero header */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 40, marginBottom: 56, alignItems: 'end' }} className="dash-hero">
        <div>
          <div className="t-eyebrow" style={{ marginBottom: 16 }}>// Welcome back, {user.name.split(' ')[0]}</div>
          <h1 className="t-display t-h1" style={{ color: 'var(--ink)' }}>
            Your <span style={{ color: 'var(--accent)' }}>training</span><br/>module.
          </h1>
        </div>
        <div className="card" style={{ padding: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <span className="t-eyebrow">Overall progress</span>
            <span className="t-mono" style={{ color: 'var(--ink)', fontSize: 14 }}>{progress.passedSections.length} / {lessons.length}</span>
          </div>
          <div className="progress" style={{ height: 8, marginBottom: 16 }}>
            <span style={{ width: `${(progress.passedSections.length / lessons.length) * 100}%` }}></span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--ink-muted)' }}>
            <span>{user.business}</span>
            <span>{user.location}</span>
          </div>
          {allComplete && (
            <button onClick={onCertificate} className="btn btn-primary" style={{ width: '100%', marginTop: 20 }}>
              View Certificate ★
            </button>
          )}
        </div>
      </div>

      {/* Lesson list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {lessons.map((lesson, idx) => {
          const passed = progress.passedSections.includes(lesson.id);
          const unlocked = idx === 0 || progress.passedSections.includes(lessons[idx - 1].id);
          const score = progress.scores[lesson.id];
          return (
            <LessonRow
              key={lesson.id}
              lesson={lesson}
              idx={idx}
              passed={passed}
              unlocked={unlocked}
              score={score}
              onOpen={() => unlocked && onOpen(lesson.id)}
            />
          );
        })}
      </div>

      <style>{`
        @media (max-width: 800px) {
          .dash-hero { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </div>
  );
}

function LessonRow({ lesson, idx, passed, unlocked, score, onOpen }) {
  const num = String(idx + 1).padStart(2, '0');
  const status = passed ? 'passed' : unlocked ? 'active' : 'locked';

  return (
    <div
      onClick={onOpen}
      data-screen-label={`${num} ${lesson.title}`}
      className="card"
      style={{
        display: 'grid',
        gridTemplateColumns: '80px 1fr 200px 160px',
        alignItems: 'center',
        padding: '24px 28px',
        cursor: unlocked ? 'pointer' : 'not-allowed',
        opacity: unlocked ? 1 : 0.45,
        transition: 'border-color 0.15s, transform 0.15s',
        borderColor: passed ? 'rgba(91, 255, 159, 0.35)' : status === 'active' && idx > 0 && unlocked ? 'var(--accent)' : 'var(--line)',
      }}
      onMouseEnter={e => unlocked && (e.currentTarget.style.transform = 'translateX(4px)')}
      onMouseLeave={e => (e.currentTarget.style.transform = 'translateX(0)')}
      className-row="row"
    >
      <div className="t-display" style={{ fontSize: 36, color: passed ? 'var(--success)' : status === 'locked' ? 'var(--ink-muted)' : 'var(--accent)' }}>
        {num}
      </div>
      <div>
        <div className="t-eyebrow" style={{ marginBottom: 6, color: passed ? 'var(--success)' : 'var(--accent)' }}>{lesson.eyebrow}</div>
        <div className="t-h3" style={{ color: 'var(--ink)' }}>{lesson.title}</div>
        <div style={{ color: 'var(--ink-muted)', fontSize: 14, marginTop: 4 }}>{lesson.summary}</div>
      </div>
      <div className="t-mono" style={{ color: 'var(--ink-muted)', fontSize: 12 }}>
        {lesson.duration} · 4 questions
      </div>
      <div style={{ textAlign: 'right' }}>
        {passed ? (
          <span className="chip chip-success">✓ Passed · {score}%</span>
        ) : status === 'locked' ? (
          <span className="chip chip-locked">🔒 Locked</span>
        ) : (
          <span className="chip chip-active">→ Start</span>
        )}
      </div>
      <style>{`
        @media (max-width: 800px) {
          .card[data-screen-label] { grid-template-columns: 60px 1fr !important; }
          .card[data-screen-label] > :nth-child(3),
          .card[data-screen-label] > :nth-child(4) { grid-column: 2; text-align: left; }
        }
      `}</style>
    </div>
  );
}

window.Dashboard = Dashboard;
