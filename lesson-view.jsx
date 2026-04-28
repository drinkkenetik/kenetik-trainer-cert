/* global React */
const { useState: useStateL, useEffect: useEffectL, useMemo: useMemoL, useRef: useRefL } = React;

// ---------- Lesson View ----------
function LessonView({ lesson, idx, total, onBack, onComplete, lastScore }) {
  const [phase, setPhase] = useStateL('reading'); // reading | quiz | result
  const [answers, setAnswers] = useStateL({});
  const [submitted, setSubmitted] = useStateL(false);
  const num = String(idx + 1).padStart(2, '0');
  const topRef = useRefL(null);

  useEffectL(() => {
    if (topRef.current) topRef.current.scrollIntoView({ behavior: 'instant', block: 'start' });
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [phase, lesson.id]);

  const score = useMemoL(() => {
    if (!submitted) return 0;
    const correct = lesson.quiz.filter((q, i) => answers[i] === q.answer).length;
    return Math.round((correct / lesson.quiz.length) * 100);
  }, [submitted, answers, lesson]);

  function submitQuiz() {
    if (Object.keys(answers).length < lesson.quiz.length) return;
    setSubmitted(true);
    setPhase('result');
  }

  function retry() {
    setAnswers({}); setSubmitted(false); setPhase('quiz');
  }

  return (
    <div ref={topRef} className="container-narrow" style={{ padding: '40px 24px 80px' }}>
      <button onClick={onBack} className="btn btn-ghost" style={{ marginBottom: 32, minHeight: 36, padding: '8px 14px', fontSize: 11 }}>
        ← All lessons
      </button>

      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 12 }}>
          <span className="t-display" style={{ fontSize: 28, color: 'var(--accent)' }}>{num}</span>
          <span className="t-eyebrow">{lesson.eyebrow}</span>
          <span className="t-mono" style={{ color: 'var(--ink-muted)', marginLeft: 'auto', fontSize: 12 }}>
            {phase === 'reading' ? lesson.duration : phase === 'quiz' ? '4 questions · 75% to pass' : `Score: ${score}%`}
          </span>
        </div>
        <h1 className="t-display t-h2" style={{ color: 'var(--ink)' }}>{lesson.title}</h1>
        {/* Phase progress */}
        <div style={{ display: 'flex', gap: 8, marginTop: 24 }}>
          <PhaseBar active={phase === 'reading'} done={phase !== 'reading'} label="Read" />
          <PhaseBar active={phase === 'quiz'} done={phase === 'result'} label="Quiz" />
          <PhaseBar active={phase === 'result'} done={false} label="Result" />
        </div>
      </div>

      {phase === 'reading' && <ReadingPhase lesson={lesson} onContinue={() => setPhase('quiz')} />}
      {phase === 'quiz' && (
        <QuizPhase
          lesson={lesson}
          answers={answers}
          setAnswers={setAnswers}
          onSubmit={submitQuiz}
          onBackToReading={() => setPhase('reading')}
        />
      )}
      {phase === 'result' && (
        <ResultPhase
          lesson={lesson}
          answers={answers}
          score={score}
          passed={score >= 75}
          onRetry={retry}
          onContinue={() => onComplete(lesson.id, score)}
          isLast={idx === total - 1}
        />
      )}
    </div>
  );
}

function PhaseBar({ active, done, label }) {
  return (
    <div style={{ flex: 1 }}>
      <div style={{
        height: 3,
        background: done || active ? 'var(--accent)' : 'var(--line)',
        marginBottom: 6,
      }}/>
      <div className="t-mono" style={{ fontSize: 10, color: active ? 'var(--accent)' : done ? 'var(--ink-dim)' : 'var(--ink-muted)' }}>
        {label}
      </div>
    </div>
  );
}

// ---------- Reading ----------
function ReadingPhase({ lesson, onContinue }) {
  return (
    <div className="fade-in">
      <div className="lesson-body">
        {lesson.body.map((block, i) => <ContentBlock key={i} block={block} />)}
      </div>
      <div className="divider" style={{ margin: '40px 0 28px' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span className="t-mono" style={{ color: 'var(--ink-muted)', fontSize: 12 }}>Ready to test what you learned?</span>
        <button onClick={onContinue} className="btn btn-primary btn-lg">Take quiz →</button>
      </div>
    </div>
  );
}

function ContentBlock({ block }) {
  switch (block.type) {
    case 'h2': return <h2>{block.text}</h2>;
    case 'p': return <p>{block.text}</p>;
    case 'list': return <ul>{block.items.map((it, i) => <li key={i}>{it}</li>)}</ul>;
    case 'callout':
      return (
        <div className="callout">
          <div className="callout-label">{block.label}</div>
          <div className="callout-text">{block.text}</div>
        </div>
      );
    case 'stat':
      return (
        <div style={{ display: 'flex', gap: 32, padding: '20px 0' }}>
          <div><div className="t-display" style={{ fontSize: 56, color: 'var(--accent)' }}>{block.value}</div><div className="t-mono" style={{ color: 'var(--ink-muted)', fontSize: 11 }}>{block.label}</div></div>
          <div><div className="t-display" style={{ fontSize: 56, color: 'var(--accent)' }}>{block.value2}</div><div className="t-mono" style={{ color: 'var(--ink-muted)', fontSize: 11 }}>{block.label2}</div></div>
        </div>
      );
    case 'products':
      return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12, margin: '20px 0' }}>
          {block.items.map((item, i) => (
            <div key={i} className="card" style={{ padding: 20 }}>
              <div className="t-display" style={{ fontSize: 22, color: 'var(--ink)' }}>{item.name}</div>
              <div className="t-mono" style={{ color: 'var(--accent)', fontSize: 11, marginTop: 4 }}>{item.spec}</div>
              <div style={{ marginTop: 12, color: 'var(--ink-dim)', fontSize: 14, lineHeight: 1.5 }}>{item.best}</div>
            </div>
          ))}
        </div>
      );
    case 'matchups':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, margin: '20px 0' }}>
          {block.items.map((item, i) => (
            <div key={i} className="card" style={{ padding: 20, borderLeft: '3px solid var(--accent)' }}>
              <div className="t-eyebrow" style={{ marginBottom: 8 }}>Client</div>
              <div className="t-h3" style={{ color: 'var(--ink)', marginBottom: 4 }}>{item.client}</div>
              <div style={{ color: 'var(--ink-dim)', fontSize: 14 }}>Goal: {item.goal}</div>
              <div className="divider" style={{ margin: '14px 0' }} />
              <div className="t-eyebrow" style={{ marginBottom: 6 }}>Recommendation</div>
              <div style={{ color: 'var(--ink)', fontSize: 15, fontWeight: 600 }}>{item.product}</div>
              <div style={{ color: 'var(--ink-muted)', fontSize: 13, marginTop: 4 }}>{item.note}</div>
            </div>
          ))}
        </div>
      );
    case 'compliance':
      return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, margin: '20px 0' }}>
          {block.items.map((item, i) => (
            <div key={i} style={{
              padding: '14px 16px',
              border: `1px solid ${item.ok ? 'rgba(91, 255, 159, 0.4)' : 'rgba(255, 84, 112, 0.4)'}`,
              borderRadius: 'var(--radius)',
              background: item.ok ? 'rgba(91, 255, 159, 0.04)' : 'rgba(255, 84, 112, 0.04)',
              display: 'flex', alignItems: 'flex-start', gap: 12,
              fontSize: 14, color: 'var(--ink)', lineHeight: 1.5
            }}>
              <span className="t-display" style={{ color: item.ok ? 'var(--success)' : 'var(--error)', fontSize: 16, flexShrink: 0 }}>
                {item.ok ? '✓ SAY' : '✕ DON\'T'}
              </span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      );
    default: return null;
  }
}

// ---------- Quiz ----------
function QuizPhase({ lesson, answers, setAnswers, onSubmit, onBackToReading }) {
  const allAnswered = Object.keys(answers).length === lesson.quiz.length;

  return (
    <div className="fade-in">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {lesson.quiz.map((q, qi) => (
          <div key={qi} className="card" style={{ padding: 28 }}>
            <div className="t-mono" style={{ color: 'var(--accent)', fontSize: 11, marginBottom: 8 }}>
              QUESTION {qi + 1} OF {lesson.quiz.length}
            </div>
            <div className="t-h3" style={{ color: 'var(--ink)', marginBottom: 20, fontFamily: 'Inter, sans-serif', textTransform: 'none', fontWeight: 600 }}>
              {q.q}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {q.options.map((opt, oi) => {
                const selected = answers[qi] === oi;
                return (
                  <button
                    key={oi}
                    onClick={() => setAnswers({ ...answers, [qi]: oi })}
                    style={{
                      textAlign: 'left',
                      padding: '14px 18px',
                      background: selected ? 'var(--accent-soft)' : 'var(--bg-elev)',
                      color: selected ? 'var(--ink)' : 'var(--ink-dim)',
                      border: `1px solid ${selected ? 'var(--accent)' : 'var(--line-strong)'}`,
                      borderRadius: 'var(--radius)',
                      cursor: 'pointer',
                      fontSize: 15,
                      fontFamily: 'inherit',
                      transition: 'all 0.15s',
                      display: 'flex', alignItems: 'center', gap: 12
                    }}
                  >
                    <span style={{
                      width: 22, height: 22, borderRadius: '50%',
                      border: `2px solid ${selected ? 'var(--accent)' : 'var(--line-strong)'}`,
                      background: selected ? 'var(--accent)' : 'transparent',
                      flexShrink: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      {selected && <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#000' }}/>}
                    </span>
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 32 }}>
        <button onClick={onBackToReading} className="btn btn-ghost">← Re-read lesson</button>
        <button onClick={onSubmit} className="btn btn-primary btn-lg" disabled={!allAnswered}>
          Submit answers →
        </button>
      </div>
    </div>
  );
}

// ---------- Result ----------
function ResultPhase({ lesson, answers, score, passed, onRetry, onContinue, isLast }) {
  return (
    <div className="fade-in">
      <div className="card" style={{
        padding: 40, textAlign: 'center',
        borderColor: passed ? 'rgba(91, 255, 159, 0.5)' : 'rgba(255, 179, 71, 0.5)',
        background: passed
          ? 'linear-gradient(180deg, rgba(91, 255, 159, 0.08), transparent)'
          : 'linear-gradient(180deg, rgba(255, 179, 71, 0.08), transparent)',
        marginBottom: 32
      }}>
        <div className="t-eyebrow" style={{ color: passed ? 'var(--success)' : 'var(--warn)', marginBottom: 12 }}>
          {passed ? '// CERTIFIED' : '// NOT QUITE'}
        </div>
        <div className="t-display" style={{ fontSize: 96, color: passed ? 'var(--success)' : 'var(--warn)', lineHeight: 1 }}>
          {score}%
        </div>
        <div className="t-mono" style={{ color: 'var(--ink-muted)', marginTop: 8, fontSize: 13 }}>
          {lesson.quiz.filter((q, i) => answers[i] === q.answer).length} of {lesson.quiz.length} correct · 75% required
        </div>
        <h2 className="t-h2" style={{ color: 'var(--ink)', marginTop: 24, fontSize: 32 }}>
          {passed ? 'Section unlocked.' : 'Try again — you got this.'}
        </h2>
        <p style={{ color: 'var(--ink-dim)', marginTop: 12, maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
          {passed
            ? `Great work. ${isLast ? 'You\'ve completed all 10 sections — your certificate is ready.' : 'Review your answers below, then continue to the next lesson.'}`
            : 'Review the missed questions, re-read the lesson if you need to, and retake the quiz when ready.'}
        </p>
      </div>

      {/* Per-question review */}
      <div className="t-eyebrow" style={{ marginBottom: 16 }}>// Review</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
        {lesson.quiz.map((q, qi) => {
          const right = answers[qi] === q.answer;
          return (
            <div key={qi} className="card" style={{
              padding: 20,
              borderLeft: `3px solid ${right ? 'var(--success)' : 'var(--error)'}`
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                <span className="t-mono" style={{ fontSize: 11, color: 'var(--ink-muted)' }}>Q{qi + 1}</span>
                <span className="t-mono" style={{ fontSize: 11, color: right ? 'var(--success)' : 'var(--error)' }}>
                  {right ? '✓ CORRECT' : '✕ INCORRECT'}
                </span>
              </div>
              <div style={{ color: 'var(--ink)', marginBottom: 10, fontWeight: 600 }}>{q.q}</div>
              {!right && (
                <div style={{ fontSize: 14, color: 'var(--ink-dim)' }}>
                  <div>Your answer: <span style={{ color: 'var(--error)' }}>{q.options[answers[qi]]}</span></div>
                  <div>Correct: <span style={{ color: 'var(--success)' }}>{q.options[q.answer]}</span></div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
        {passed ? (
          <button onClick={onContinue} className="btn btn-primary btn-lg">
            {isLast ? 'View certificate ★' : 'Continue to next lesson →'}
          </button>
        ) : (
          <>
            <button onClick={() => window.location.reload()} className="btn btn-ghost">Back to dashboard</button>
            <button onClick={onRetry} className="btn btn-primary btn-lg">Retake quiz ↻</button>
          </>
        )}
      </div>
    </div>
  );
}

window.LessonView = LessonView;
