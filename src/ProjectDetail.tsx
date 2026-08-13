import { useParams, Link } from 'react-router-dom'

const PROOF_MEDIA = [
  { slug: 'doc-ai', title: 'Document Intelligence', body: 'PDF/OCR extraction pipeline — specs in, structured data out.', tag: 'AI / RAG' },
  { slug: 'rag-chat', title: 'RAG Chat', body: 'Chat over documents with cited answers.', tag: 'AI / RAG' },
  { slug: 'fullstack', title: 'Full-Stack Product', body: 'React/TS + Node/Python + Postgres shipped.', tag: 'Full-Stack' },
  { slug: 'aec', title: 'AEC Project', body: 'Construction/architecture domain work.', tag: 'AEC Domain' },
]

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = PROOF_MEDIA.find((p) => p.slug === slug)

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

        <div className="mt-10 flex flex-wrap gap-2">
          {['React / TypeScript', 'Node.js / Python', 'PostgreSQL', 'Docker / CI/CD', 'OpenAI / Claude / Gemini', 'RAG / Vector DB', 'PDF / OCR'].map((t) => (
            <span key={t} className="rounded bg-white/5 px-3 py-1.5 text-sm text-slate-300">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
