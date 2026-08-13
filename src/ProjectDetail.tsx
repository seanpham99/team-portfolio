import { useParams, Link } from 'react-router-dom'

interface Project {
  slug: string
  title: string
  body: string
  tag: string
  gallery?: string[]
  metrics?: { label: string; value: string }[]
  workflow?: string[]
  tech: string[]
}

const PROJECTS: Project[] = [
  {
    slug: 'tba',
    title: 'TBA — AI Material Take-Off',
    body: 'Computer vision + ML pipeline for construction material lists at Simpson Strong-Tie. Automates PDF drawing interpretation: building info extraction, schedule table OCR, component markup, quantity estimation.',
    tag: 'AEC / CV / ML',
    gallery: [
      '/input/tba-slide1.png',
      '/input/image8.png',
      '/input/image11.png',
      '/input/image19.png',
      '/input/image33.png',
      '/input/image36.png',
    ],
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
    tech: ['Computer Vision', 'Machine Learning', 'PDF/SVG parsing', 'OCR', 'Vector format processing', 'Human-in-the-loop', 'AEC / Construction'],
  },
  {
    slug: 'roofdata',
    title: 'RoofData AI Estimator',
    body: 'Node/Express/TypeScript AI costing estimator for the roofdata.report platform. Claude prose generation, intent extraction, role-gated endpoints, RBAC + JWT, deployed on-prem.',
    tag: 'LLM / Production',
    metrics: [
      { label: 'Endpoints', value: '3 role-gated' },
      { label: 'Stack', value: 'Node 16 / TS' },
      { label: 'LLM', value: 'Claude' },
      { label: 'Auth', value: 'RBAC + JWT' },
    ],
    workflow: [
      'Frontend UI → Node/Express app',
      'RBAC middleware',
      'Estimator modules',
      'Data Graph API (JWT-signed)',
      'Numeric calculations (Node owns numbers)',
      'Claude prose generation (explanations only)',
    ],
    gallery: ['/input/roofdata-cover.jpg'],
    tech: ['Node.js / Express', 'TypeScript', 'Claude API', 'Intent extraction', 'RBAC', 'JWT', 'Prompt engineering'],
  },
  {
    slug: 'doc-ai',
    title: 'Document Intelligence',
    body: 'PDF/OCR extraction pipeline — specs in, structured data out.',
    tag: 'AI / RAG',
    tech: ['React / TypeScript', 'Node.js / Python', 'PostgreSQL', 'Docker / CI/CD', 'OpenAI / Claude / Gemini', 'RAG / Vector DB', 'PDF / OCR'],
  },
  {
    slug: 'rag-chat',
    title: 'RAG Chat',
    body: 'Chat over documents with cited answers.',
    tag: 'AI / RAG',
    tech: ['React / TypeScript', 'Node.js / Python', 'PostgreSQL', 'Docker / CI/CD', 'OpenAI / Claude / Gemini', 'RAG / Vector DB', 'PDF / OCR'],
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

        <div className="mt-10 aspect-video w-full overflow-hidden rounded border border-white/10 bg-white/5">
          <img
            src={`/input/${project.slug}-cover.jpg`}
            alt={project.title}
            className="h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>

        <div className="mt-10">
          <video
            src={`/input/${project.slug}-video.mp4`}
            controls
            className="aspect-video w-full rounded border border-white/10 bg-black"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>

        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl font-semibold text-white">Case study slides</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {project.gallery.map((src) => (
                <div key={src} className="overflow-hidden rounded border border-white/10 bg-white/5">
                  <img src={src} alt={`TBA slide ${src.split('/').pop()}`} loading="lazy" className="aspect-[4/3] w-full object-cover" onError={(e) => (e.currentTarget.style.display = 'none')} />
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
