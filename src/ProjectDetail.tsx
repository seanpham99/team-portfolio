import { useParams, Link } from 'react-router-dom'

interface Project {
  slug: string
  title: string
  body: string
  tag: string
  metrics?: { label: string; value: string }[]
  workflow?: string[]
  tech: string[]
}

const PROJECTS: Project[] = [
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
            src={`/input/${project.slug}-cover.jpg`}
            alt={project.title}
            className="w-full object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>

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
