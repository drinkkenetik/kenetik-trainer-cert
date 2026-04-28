// Kenetik Trainer Certification — Lesson Content
// 10 lessons, ~300 words each, 4 quiz questions each.
// All claims grounded in publicly-stated brand language.
// answer index is 0-based.

window.LESSONS = [
  {
    id: 1,
    eyebrow: "Foundation",
    title: "Welcome & Why This Matters",
    duration: "2 min read",
    summary: "Why trainers are uniquely positioned to introduce ketones to clients.",
    body: [
      { type: "h2", text: "Performance starts in the mind." },
      { type: "p", text: "Kenetik makes brain fuel powered by D-BHB ketones — the same molecule the body produces during fasting, sleep, and sustained exercise. Our mission is simple: give people clean, sustained mental and physical performance, without caffeine, sugar, or crash." },
      { type: "p", text: "As a trainer, you are the most trusted performance professional in your client's life. They listen to you about sleep, recovery, hydration, and supplementation in a way they don't listen to ads. That makes you the single most powerful introduction point for ketones in fitness." },
      { type: "callout", label: "Your role", text: "You are not a doctor or a scientist. You are an educator and a guide. This certification gives you the language, science, and confidence to talk about ketones accurately — and to match the right product to the right client." },
      { type: "h2", text: "What you'll learn" },
      { type: "list", items: [
        "How D-BHB ketones work in the body and brain",
        "The four Kenetik formats and when each one fits",
        "Use cases: performance, recovery, focus, longevity, menopause",
        "How to match clients to products — and what NOT to say"
      ]},
      { type: "p", text: "Each lesson is short (about 2 minutes) and ends with a 4-question quiz. Score 75% or higher on every section to earn your Kenetik Certified Trainer credential." },
      { type: "stat", value: "10", label: "Lessons", value2: "75%", label2: "To pass" }
    ],
    quiz: [
      { q: "What is Kenetik's core product category?", options: ["A pre-workout stimulant", "Brain fuel powered by D-BHB ketones", "A protein recovery shake", "An electrolyte hydration mix"], answer: 1 },
      { q: "Why are trainers uniquely positioned to introduce ketones?", options: ["They are licensed to prescribe supplements", "They are the most trusted performance professional in a client's life", "They have access to lab testing", "They are paid by Kenetik to recommend it"], answer: 1 },
      { q: "What is the role of a Kenetik Certified Trainer?", options: ["Diagnose nutritional deficiencies", "Educate and guide — not prescribe or diagnose", "Replace a client's physician", "Administer supplements during training"], answer: 1 },
      { q: "What score is required on each section to earn certification?", options: ["50%", "60%", "75%", "100%"], answer: 2 }
    ]
  },
  {
    id: 2,
    eyebrow: "The Science",
    title: "Ketones 101 — Simple Science",
    duration: "2 min read",
    summary: "What ketones are, what D-BHB is, and why your body already makes them.",
    body: [
      { type: "h2", text: "Your body's backup fuel." },
      { type: "p", text: "Most of the time, your brain runs on glucose (sugar). But when glucose runs low — during fasting, sleep, long exercise, or carb restriction — your liver makes ketones from fat. Ketones are the body's clean backup fuel. Your brain loves them." },
      { type: "p", text: "The most important ketone is D-Beta-Hydroxybutyric Acid — D-BHB for short. This is the ketone Kenetik delivers, and it is bioidentical: chemically identical to the ketone your body produces on its own." },
      { type: "callout", label: "Bioidentical = key", text: "Other ketone products use synthetic salts or esters that taste terrible and can upset the stomach. Kenetik's D-BHB is the real molecule, paired with R-1,3-butanediol, a precursor your body fully converts into D-BHB." },
      { type: "h2", text: "Why the brain prefers ketones" },
      { type: "list", items: [
        "Ketones produce energy more efficiently than glucose, with less oxidative stress",
        "They cross the blood-brain barrier easily",
        "They don't require insulin to be used",
        "They support mitochondrial health — the 'powerhouses' of every cell"
      ]},
      { type: "p", text: "Bottom line for clients: drinking Kenetik gives them on-demand access to a fuel their body and brain already know how to use. No fasting required. No keto diet required. Just clean fuel, when they need it." }
    ],
    quiz: [
      { q: "What does D-BHB stand for?", options: ["Daily Brain Health Booster", "D-Beta-Hydroxybutyric Acid", "Dietary Bio-Hydration Blend", "Dual-Benefit Hydrocarbon"], answer: 1 },
      { q: "When does the body naturally produce ketones?", options: ["Only during a strict keto diet", "During fasting, sleep, and sustained exercise", "Only after eating sugar", "Only in childhood"], answer: 1 },
      { q: "What does 'bioidentical' mean in this context?", options: ["Lab-grown and synthetic", "Chemically identical to what the body produces naturally", "Plant-based but unrelated to human biology", "Twice as strong as natural ketones"], answer: 1 },
      { q: "Do you have to be on a keto diet for Kenetik to work?", options: ["Yes, strict keto required", "Yes, low-carb only", "No — Kenetik delivers ketones on-demand regardless of diet", "Only if combined with intermittent fasting"], answer: 2 }
    ]
  },
  {
    id: 3,
    eyebrow: "Product Family",
    title: "The Kenetik Product Family",
    duration: "2 min read",
    summary: "A quick tour of the four formats and when each one fits.",
    body: [
      { type: "h2", text: "Four formats. One molecule." },
      { type: "p", text: "Every Kenetik product is built around the same patented bioidentical D-BHB. The format you recommend depends on the client's goal, schedule, and how much fine-tuning they want." },
      { type: "products", items: [
        { name: "Cans", spec: "12oz · 12g ketones", best: "Daily clarity. Lightly carbonated, real fruit extracts. Drink 1–2 per day for steady focus." },
        { name: "Shots", spec: "2oz · 10g ketones", best: "On-the-go and pre-workout. TSA-friendly. With electrolytes for hydration." },
        { name: "Concentrate", spec: "4oz · 48g ketones", best: "Maximum-strength format for serious training days, big competitions, or deep-focus work blocks. Mix into water or take straight." },
        { name: "KenetikPro", spec: "4oz · 80g ketones", best: "Higher-dose support after major physical or cognitive stress." }
      ]},
      { type: "callout", label: "Quick rule of thumb", text: "Cans = ritual. Shots = mission. Concentrate = max effort. KenetikPro = protocol." },
      { type: "p", text: "All formats are caffeine-free, sugar-free, Informed Sport Certified, vegan, gluten-free, and protected by a patented formula. That last point matters: clients can train, compete, and test without worrying about banned substances." }
    ],
    quiz: [
      { q: "How many grams of ketones are in a 12oz Kenetik Can?", options: ["5g", "8g", "12g", "20g"], answer: 2 },
      { q: "Which format is TSA-friendly and best for pre-workout?", options: ["Cans", "Shots", "Concentrate", "KenetikPro"], answer: 1 },
      { q: "What does 'Informed Sport Certified' mean for athletes?", options: ["It tastes better", "It's been third-party tested for banned substances", "It contains caffeine", "It's only for professional athletes"], answer: 1 },
      { q: "Which format is the highest-dose, max-strength option for serious training days or big competitions?", options: ["Cans", "Shots", "Concentrate", "Sparkling water"], answer: 2 }
    ]
  },
  {
    id: 4,
    eyebrow: "Use Case",
    title: "Sports Performance & Endurance",
    duration: "2 min read",
    summary: "How ketones support output during training, especially when it counts.",
    body: [
      { type: "h2", text: "Stay sharp when you're gassed." },
      { type: "p", text: "In long or high-effort training, the body burns through glycogen and the brain burns through glucose. Form breaks down. Decision-making slows. The last 20% of a session is where most clients lose their edge — not because their muscles failed, but because their brain ran out of fuel." },
      { type: "p", text: "Ketones change that math. They give the brain a parallel fuel source that doesn't depend on glucose. That means cleaner output, longer focus, and better technique deeper into a session." },
      { type: "h2", text: "The dual-fuel strategy" },
      { type: "list", items: [
        "Drink one serving 20–30 minutes before training",
        "For sessions over 90 minutes, take another every 2 hours",
        "Pair with normal carb intake — ketones don't replace carbs, they complement them"
      ]},
      { type: "callout", label: "Who benefits most", text: "Endurance athletes (runners, cyclists, triathletes), CrossFit and HYROX athletes, combat sports, and anyone whose sport rewards clean decision-making under fatigue." },
      { type: "p", text: "In published research, D-BHB supplementation improved processing speed and increased cerebral blood flow. Other studies showed ketones helped maintain alertness and supported circulating dopamine during exhaustion. Translation for clients: when everyone else is foggy, you're still locked in." }
    ],
    quiz: [
      { q: "Why does form often break down in the last 20% of a long session?", options: ["Muscles always fail first", "The brain runs out of glucose", "The body overheats", "Hydration drops to zero"], answer: 1 },
      { q: "What is the 'dual-fuel strategy'?", options: ["Replacing all carbs with ketones", "Pairing normal carb intake with ketones for parallel brain fuel", "Drinking two cans at once", "Combining caffeine and ketones"], answer: 1 },
      { q: "When should an athlete take Kenetik before training?", options: ["5 minutes before", "20–30 minutes before", "2 hours before", "Only after"], answer: 1 },
      { q: "Which type of athlete benefits most from ketones during competition?", options: ["Anyone in a sport that rewards clean decision-making under fatigue", "Only marathon runners", "Only powerlifters", "Only beginners"], answer: 0 }
    ]
  },
  {
    id: 5,
    eyebrow: "Use Case",
    title: "Recovery & Reducing Soreness",
    duration: "2 min read",
    summary: "Help clients bounce back faster between sessions.",
    body: [
      { type: "h2", text: "Recovery is where progress happens." },
      { type: "p", text: "Hard training is the stimulus. Recovery is the adaptation. If a client can't recover, they can't progress — and most clients are training closer to overreaching than they realize." },
      { type: "p", text: "Ketones support the recovery window in three ways: they help dampen exercise-induced inflammation, they support muscle protein synthesis, and they can spare glycogen so the body's stores rebuild more efficiently." },
      { type: "h2", text: "How to use Kenetik for recovery" },
      { type: "list", items: [
        "Drink one serving within 30 minutes post-training",
        "Pair with a normal post-workout meal (protein + carbs)",
        "On heavy training days, a second serving in the evening can support overnight recovery"
      ]},
      { type: "callout", label: "Sleep bonus", text: "Kenetik is caffeine-free, so it won't disrupt sleep. In a clinical study, ketone supplementation actually improved sleep efficiency by 3% and prevented the typical 26% drop in REM sleep caused by physical stress." },
      { type: "p", text: "For trainers, this is a high-leverage conversation. A client who sleeps better, recovers faster, and shows up sharper for the next session is a client who keeps making progress — and keeps coming back." }
    ],
    quiz: [
      { q: "Why is recovery so important to talk about with clients?", options: ["It's where adaptation happens — no recovery, no progress", "It's optional for most clients", "It only matters for elite athletes", "It only matters in the off-season"], answer: 0 },
      { q: "When should a client drink Kenetik for recovery?", options: ["3 days after training", "Within 30 minutes post-training", "Only on rest days", "Right before bed only"], answer: 1 },
      { q: "Why won't Kenetik disrupt sleep?", options: ["It contains melatonin", "It's caffeine-free", "It's a sedative", "It contains alcohol"], answer: 1 },
      { q: "How do ketones support recovery?", options: ["By replacing all protein needs", "By dampening inflammation, supporting protein synthesis, and sparing glycogen", "By increasing cortisol", "By blocking soreness signals entirely"], answer: 1 }
    ]
  },
  {
    id: 6,
    eyebrow: "Use Case",
    title: "Brain Health, Focus & Mental Clarity",
    duration: "2 min read",
    summary: "Cognitive performance without caffeine.",
    body: [
      { type: "h2", text: "Calm clarity, not a buzz." },
      { type: "p", text: "Most clients have only one tool for mental energy: caffeine. It works — until it doesn't. They build tolerance, they crash, they get jittery, they can't sleep, and they spend the afternoon chasing the morning." },
      { type: "p", text: "Ketones offer a different category of mental energy. Clients describe it as 'calm clarity': the fog lifts, focus sharpens, and tasks feel easier to start. There's no spike, no crash, and no jitter." },
      { type: "h2", text: "Who this matters for" },
      { type: "list", items: [
        "Clients who train at 5am and need to function at work by 9",
        "Clients in demanding cognitive jobs — finance, medicine, law, founders",
        "Clients who've maxed out their caffeine tolerance",
        "Clients with afternoon slumps where more coffee just makes it worse"
      ]},
      { type: "callout", label: "Trainer talk track", text: "\"If you've ever had a great workout and then crashed at your desk by 2pm, ketones can give you a steadier baseline — without taking anything from tonight's sleep.\"" },
      { type: "p", text: "Most people notice the effect within 20–30 minutes. The cumulative effect builds over a few weeks of regular use, as the body learns to use ketones more efficiently." }
    ],
    quiz: [
      { q: "How do most clients describe the feeling of ketones?", options: ["A strong buzz", "Calm clarity — no spike, no crash", "Sleepy", "Jittery"], answer: 1 },
      { q: "Why is Kenetik a good fit for clients with high caffeine tolerance?", options: ["It contains more caffeine", "It works on a different mechanism — no jitters or crash", "It blocks caffeine receptors", "It replaces water"], answer: 1 },
      { q: "How quickly do most people notice the cognitive effect?", options: ["Instantly", "Within 20–30 minutes", "Several days", "Several months"], answer: 1 },
      { q: "When does the cumulative benefit really show up?", options: ["After one drink", "After a few weeks of regular use", "Only after a year", "Never"], answer: 1 }
    ]
  },
  {
    id: 7,
    eyebrow: "Use Case",
    title: "Longevity & Healthy Aging",
    duration: "2 min read",
    summary: "Metabolic flexibility, mitochondria, and aging well.",
    body: [
      { type: "h2", text: "The 40+ conversation." },
      { type: "p", text: "Around age 40, two things start happening that clients feel even if they can't name them: their metabolism becomes less flexible (harder to switch between fuels), and their mitochondria — the cellular powerhouses — become less efficient. The result is more fatigue, slower recovery, and brain fog." },
      { type: "p", text: "Ketones help on both fronts. They train the body to be more metabolically flexible, and they signal pathways that support mitochondrial health and biogenesis (literally making more mitochondria)." },
      { type: "h2", text: "What this means in plain language" },
      { type: "list", items: [
        "More efficient energy production at the cellular level",
        "Better recovery between sessions",
        "Less afternoon fatigue",
        "Cognitive resilience — clearer thinking, longer"
      ]},
      { type: "callout", label: "How to position", text: "For 40+ clients, frame Kenetik as a daily metabolic and cognitive habit — not a pre-workout. The cumulative effect over weeks and months is what matters most." },
      { type: "p", text: "This is a fast-growing client segment. Most are well-informed, willing to invest in their health, and looking for evidence-based products. Kenetik fits because it is patented, third-party tested, and grounded in published research." }
    ],
    quiz: [
      { q: "What happens to most people's metabolism around age 40?", options: ["It becomes infinitely faster", "It becomes less flexible — harder to switch between fuels", "It stops entirely", "It only changes after age 70"], answer: 1 },
      { q: "What are mitochondria?", options: ["A type of bone", "The cellular powerhouses that produce energy", "A part of the brain", "A digestive enzyme"], answer: 1 },
      { q: "How should you position Kenetik for a 40+ client?", options: ["Strictly as a pre-workout", "As a daily metabolic and cognitive habit", "As a replacement for sleep", "Only on weekends"], answer: 1 },
      { q: "Why does the 40+ segment fit Kenetik so well?", options: ["They want unproven supplements", "They are well-informed and value patented, third-party tested products", "They never train", "They prefer high caffeine"], answer: 1 }
    ]
  },
  {
    id: 8,
    eyebrow: "Use Case",
    title: "Menopause & Women's Brain Health",
    duration: "2 min read",
    summary: "Brain fog, energy dips, and an underserved client segment.",
    body: [
      { type: "h2", text: "An underserved client segment." },
      { type: "p", text: "During perimenopause and menopause, declining estrogen affects how the brain uses glucose. The result, for many women, is brain fog, afternoon crashes, sleep disruption, mood shifts, and a feeling that workouts that used to feel easy now feel hard." },
      { type: "p", text: "Ketones are uniquely relevant here. Because they offer the brain an alternative fuel that doesn't depend on glucose metabolism, they can help support cognitive function and steady energy during a period when the brain's primary fuel system is changing." },
      { type: "callout", label: "Why this matters for trainers", text: "Women in mid-life are one of the largest, most loyal, and most underserved client segments in fitness. They are looking for professionals who understand what they're going through — not coaches who treat them like a smaller, older male athlete." },
      { type: "h2", text: "How to talk about it" },
      { type: "list", items: [
        "Lead with empathy — name the symptoms (fog, fatigue, sleep) before naming the product",
        "Frame ketones as an alternative brain fuel, not a hormone treatment",
        "Suggest a 4–6 week trial of daily Cans or Shots — cumulative effect matters",
        "Be clear: Kenetik is not a treatment for menopause. It's a tool that supports clarity and energy."
      ]},
      { type: "p", text: "This is the most important conversation many trainers are not yet having. The trainers who have it well will earn enormous trust." }
    ],
    quiz: [
      { q: "What happens to brain glucose metabolism during menopause?", options: ["It becomes more efficient", "Declining estrogen affects how the brain uses glucose", "It stops entirely", "It only changes after menopause ends"], answer: 1 },
      { q: "How should ketones be framed for menopausal clients?", options: ["As a hormone replacement", "As an alternative brain fuel that supports clarity and energy", "As a cure for menopause", "As a sleep aid only"], answer: 1 },
      { q: "What's the right tone when starting this conversation?", options: ["Clinical and detached", "Empathy first — name the symptoms before the product", "Aggressive and sales-driven", "Avoid the topic entirely"], answer: 1 },
      { q: "Roughly how long is a recommended trial period to feel cumulative benefit?", options: ["1 day", "1 week", "4–6 weeks", "2 years"], answer: 2 }
    ]
  },
  {
    id: 9,
    eyebrow: "Application",
    title: "Matching Clients to Products",
    duration: "2 min read",
    summary: "A practical guide: which client, which product, when.",
    body: [
      { type: "h2", text: "Three example clients." },
      { type: "p", text: "The right Kenetik product depends on the client's goal, schedule, and lifestyle. Here are three real-world matches you'll see often." },
      { type: "matchups", items: [
        { client: "CrossFit athlete, 28", goal: "Sharper output in WODs, faster recovery", product: "Shots pre-workout + Can post-workout", note: "Pocket-sized for the gym bag, electrolytes built in." },
        { client: "Executive, 52", goal: "Calm clarity through long workdays + 6am training", product: "Daily Can in the morning + Concentrate on big days", note: "Replaces or reduces a second coffee. Concentrate gives a max-strength boost when the day demands it." },
        { client: "Perimenopausal runner, 47", goal: "Less brain fog, steadier energy, better sleep", product: "Daily Can — 4–6 week trial", note: "Caffeine-free, so afternoon use is fine. Cumulative effect is the point." }
      ]},
      { type: "h2", text: "The diagnostic questions" },
      { type: "list", items: [
        "What's the primary goal — performance, recovery, focus, or healthy aging?",
        "When in their day do they need it most? Pre-training, mid-day, post-training?",
        "Are they already heavy on caffeine? (Kenetik can replace or stack with it.)",
        "Do they want a daily ritual (Cans) or on-demand (Shots)?"
      ]},
      { type: "callout", label: "Default starting point", text: "When in doubt, recommend daily Cans for 2–3 weeks. It's the easiest entry point and the cumulative effect is what most clients remember." }
    ],
    quiz: [
      { q: "Best fit for a CrossFit athlete who wants pre-workout fuel and post-workout recovery?", options: ["KenetikPro only", "Shots pre + Can post", "Coffee + Can", "No ketones needed"], answer: 1 },
      { q: "Best fit for a 52-year-old executive who trains at 6am and works long days?", options: ["Strictly Shots only", "Daily Can in the morning + Concentrate on big days", "KenetikPro every hour", "None — they should just drink more coffee"], answer: 1 },
      { q: "What's a smart default starting point when you're unsure?", options: ["KenetikPro every day", "Daily Cans for 2–3 weeks", "Skip the cans entirely", "Wait until the client asks"], answer: 1 },
      { q: "Which is the FIRST diagnostic question to ask a client?", options: ["What's their max bench?", "What's the primary goal — performance, recovery, focus, or healthy aging?", "What's their favorite flavor?", "What time do they wake up?"], answer: 1 }
    ]
  },
  {
    id: 10,
    eyebrow: "Compliance",
    title: "What to Say (and What NOT to Say)",
    duration: "2 min read",
    summary: "Approved language, banned phrases, and how to handle client questions.",
    body: [
      { type: "h2", text: "Confident, accurate, compliant." },
      { type: "p", text: "Kenetik is a dietary supplement. That means there is a clear line between describing how it supports performance and clarity (allowed) and claiming it diagnoses, treats, cures, or prevents any disease (not allowed). Crossing that line gets the brand and you in trouble — and erodes client trust." },
      { type: "compliance", items: [
        { ok: true, text: "\"Kenetik supports calm clarity and steady focus.\"" },
        { ok: true, text: "\"Ketones are an alternative brain fuel.\"" },
        { ok: true, text: "\"It may help support recovery and reduce inflammation.\"" },
        { ok: true, text: "\"It's third-party tested and Informed Sport Certified.\"" },
        { ok: false, text: "\"Kenetik treats Alzheimer's / ADHD / depression.\"" },
        { ok: false, text: "\"Kenetik cures menopause symptoms.\"" },
        { ok: false, text: "\"It's a replacement for medication.\"" },
        { ok: false, text: "\"Guaranteed performance gains.\"" }
      ]},
      { type: "h2", text: "Handling tough questions" },
      { type: "list", items: [
        "\"Is this safe with my medication?\" → \"Great question — please check with your doctor before starting any new supplement.\"",
        "\"Will it help my [medical condition]?\" → \"I'm not able to speak to medical conditions. What I can say is how clients use it for focus and recovery.\"",
        "\"Is it FDA-approved?\" → \"It's a dietary supplement, not a drug. The formula is patented and third-party tested through Informed Sport.\""
      ]},
      { type: "callout", label: "Golden rule", text: "When in doubt, talk about how clients USE it — not what it CURES." }
    ],
    quiz: [
      { q: "Which statement is COMPLIANT?", options: ["\"Kenetik treats ADHD.\"", "\"Kenetik supports calm clarity and steady focus.\"", "\"Kenetik cures menopause.\"", "\"Kenetik replaces your medication.\""], answer: 1 },
      { q: "A client asks if Kenetik is safe with her blood pressure medication. What's the right response?", options: ["\"Yes, totally safe.\"", "\"No, it's dangerous.\"", "\"Great question — please check with your doctor before starting any new supplement.\"", "\"I don't know, just try it.\""], answer: 2 },
      { q: "Is Kenetik FDA-approved as a drug?", options: ["Yes, it's an FDA-approved drug", "No — it's a dietary supplement; the formula is patented and third-party tested", "It's a prescription only", "It's a banned substance"], answer: 1 },
      { q: "What's the golden rule for compliant talk?", options: ["Talk about what it cures", "Talk about how clients USE it, not what it CURES", "Avoid the product entirely", "Quote the lab studies word-for-word"], answer: 1 }
    ]
  }
];
