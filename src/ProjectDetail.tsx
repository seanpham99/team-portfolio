import { useParams, Link } from 'react-router-dom'

interface Project {
  slug: string
  title: string
  body: string
  tag: string
  source?: string
  metrics?: { label: string; value: string }[]
  workflow?: string[]
  gallery?: { src: string; caption: string; wide?: boolean }[]
  tech: string[]
}

const PROJECTS: Project[] = [
  {
    slug: 'tba',
    title: 'AI Material Take-Off',
    body: 'Computer vision + ML pipeline for construction material lists. Automates PDF drawing interpretation: building info extraction, schedule table OCR, component markup, quantity estimation.',
    tag: 'AEC / CV / ML',
    metrics: [
      { label: 'Turnaround', value: '10 → 3 days' },
      { label: 'Time reduction', value: '97.6%' },
      { label: 'Accuracy', value: '89.6%' },
      { label: 'Scope', value: '60% of material list' },
    ],
    workflow: [
      'Upload drawing files (.pdf)',
      'Extract building info — raw text → structured JSON',
      'Extract schedule tables via OCR',
      'Human-in-the-loop validation',
      'Trigger product quantity estimation',
      'Package & deliver — product list (.xlsx) + marked-up drawing (.pdf)',
    ],
    gallery: [
      { src: '/input/image11.png', caption: 'Problem — construction drawing with markups' },
      { src: '/input/image19.png', caption: 'Extraction — drawing info → structured data', wide: true },
      { src: '/input/image9.png', caption: 'Markup — CV component detection on plan' },
      { src: '/input/image36.png', caption: 'Outcome — automated quantity output' },
    ],
    tech: ['Computer Vision', 'Machine Learning', 'PDF/SVG parsing', 'OCR', 'Vector format processing', 'Human-in-the-loop', 'AEC / Construction'],
  },
  {
    slug: 'roofdata',
    title: 'AI Roof Estimator',
    body: 'AI costing estimator for the roofdata.report platform. The backend owns every number: intent extraction, geo-widened match, confidence tiering, then Claude writes only the plain-English explanation.',
    tag: 'LLM / Production',
    metrics: [
      { label: 'Confidence tiers', value: '4' },
      { label: 'LLM role', value: 'Prose only' },
      { label: 'Auth', value: 'RBAC + JWT' },
      { label: 'Deploy', value: 'On-prem' },
    ],
    workflow: [
      'Frontend UI → Node/Express app',
      'RBAC middleware + rate limiting',
      'Intent extraction (closed-enum validated)',
      'Data Graph API — signed short-lived JWT',
      'Node numeric calculations (Node owns the numbers)',
      'Confidence tiering from match count',
      'Claude prose generation (explanation only)',
    ],
    tech: ['Node.js / Express', 'TypeScript', 'Claude API', 'Intent extraction', 'Confidence tiering', 'Rate limiting', 'RBAC', 'JWT', 'Prompt engineering'],
  },
  {
    slug: 'voicegpt',
    title: 'VoiceGPT',
    body: 'Voice-first ChatGPT interface built on OpenAI — Vietnamese + English speech with 98% accuracy, voice-to-text input, text-to-speech answers, and art generation from prompts. Reached 70,000+ registered users in its first month, covered by VnExpress.',
    tag: 'Voice AI / LLM Product',
    source: 'https://vnexpress.net/startup-viet-phat-trien-voicegpt-4570210.html',
    metrics: [
      { label: 'Users', value: '70,000+' },
      { label: 'Time to scale', value: '1 month' },
      { label: 'Speech accuracy', value: '98%' },
      { label: 'Languages', value: 'VI + EN' },
    ],
    workflow: [
      'User speaks a question — Google speech-to-text converts it',
      'Question forwarded to ChatGPT backend via VoiceGPT proxy',
      'AI response returned + synthesized to speech via text-to-speech',
      'Art generation from text prompts built in',
      'Invite-gated signup for capacity control',
      'Press coverage: VnExpress, Feb 2023',
    ],
    tech: ['Voice AI', 'Speech-to-text', 'Text-to-speech', 'OpenAI / ChatGPT API', 'Vietnamese + English', 'Consumer product', 'Prompt-based art generation'],
  },
]

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = PROJECTS.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#0a0f16] text-slate-300">
        <div className="font-mono-tech text-4xl font-bold text-amber-400">404</div>
        <p>Project not found.</p>
        <Link to="/" className="rounded border border-amber-400/50 px-4 py-2 text-amber-400 hover:bg-amber-400/10">
          ← Back to Buildform
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0f16] text-slate-200">
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div className="relative mx-auto max-w-4xl px-6 py-16">
        <Link to="/" className="font-mono-tech text-sm text-amber-400 hover:text-amber-300">
          ← Back to Buildform
        </Link>
        <div className="mt-8 font-mono-tech text-xs uppercase tracking-widest text-amber-400">{project.tag}</div>
        <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">{project.title}</h1>
        <p className="mt-4 text-lg text-slate-400">{project.body}</p>

  {project.source && (
    <a
      href={project.source}
      target="_blank"
      rel="noreferrer"
      className="mt-4 inline-flex items-center gap-2 rounded border border-amber-400/40 px-4 py-2 text-sm text-amber-400 transition hover:bg-amber-400/10"
    >
      VnExpress coverage ↗
    </a>
  )}

        {project.metrics && (
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {project.metrics.map((m) => (
              <div key={m.label} className="border border-white/10 bg-white/[0.03] p-5 text-center">
                <div className="font-mono-tech text-2xl font-bold text-amber-400">{m.value}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-slate-400">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        {project.workflow && (
          <div className="mt-10">
            <h2 className="text-xl font-semibold text-white">Workflow</h2>
            <ol className="mt-4 space-y-3 border-l border-amber-400/30 pl-5">
              {project.workflow.map((step, i) => (
                <li key={step} className="relative text-slate-300">
                  <span className="absolute -left-[1.4rem] top-0 font-mono-tech text-xs text-amber-400">{String(i + 1).padStart(2, '0')}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        )}

        <div className="mt-10 w-full overflow-hidden rounded border border-white/10 bg-white/5">
          <img
            src={`/input/${project.slug === 'tba' ? 'image33.png' : project.slug + '-cover.jpg'}`}
            alt={project.title}
            className="w-full object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>

        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl font-semibold text-white">Case study</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {project.gallery.map((g) => (
                <div key={g.src} className={`overflow-hidden rounded border border-white/10 bg-white/5 ${g.wide ? 'sm:col-span-2' : ''}`}>
                  <img src={g.src} alt={g.caption} loading="lazy" className={`w-full ${g.wide ? 'aspect-auto object-contain' : 'aspect-[4/3] object-cover'}`} onError={(e) => (e.currentTarget.style.display = 'none')} />
                  <div className="border-t border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-slate-400">{g.caption}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-10 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="rounded bg-white/5 px-3 py-1.5 text-sm text-slate-300">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
