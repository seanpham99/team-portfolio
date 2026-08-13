
import { Link } from 'react-router-dom'

const NAV = [
  'Capabilities',
  'AEC Focus',
  'Team',
  'Proof',
  'Working Style',
  'Contact',
]

const JD_MATCH = [
  { need: 'React, TypeScript, Next.js', have: 'Production React 19 / TS codebases, Next.js apps shipped' },
  { need: 'Node.js (NestJS/Express) or Python (FastAPI)', have: 'Node + Python services in production; REST APIs end-to-end' },
  { need: 'PostgreSQL / MySQL, Git', have: 'Postgres at scale, Supabase, versioned workflows' },
  { need: 'Docker + CI/CD cloud deploys', have: 'Dockerized apps, GitHub Actions → ECS/Fargate & static CDNs' },
  { need: 'LLM integration (OpenAI, Claude, Gemini)', have: 'OpenAI / Claude / Gemini wired into real products' },
  { need: 'RAG + vector databases', have: 'pgvector, Pinecone/Qdrant-class pipelines in production' },
  { need: 'PDF parsing, OCR, document pipelines', have: 'Extraction pipelines on messy real-world documents' },
  { need: 'AEC domain', have: 'Construction & architecture engineering experience' },
]

const CAPABILITIES = [
  {
    icon: '◈',
    title: 'Full-Stack Web',
    body: 'React 19 + TypeScript + Next.js frontends, Node (NestJS/Express) + Python (FastAPI) backends, REST APIs designed for scale.',
  },
  {
    icon: '✦',
    title: 'LLM Integration',
    body: 'OpenAI, Claude, and Gemini production integrations — structured outputs, function calling, and cost-aware routing.',
  },
  {
    icon: '⬡',
    title: 'RAG & Vector DBs',
    body: 'pgvector, Qdrant-class retrieval with chunking, embedding, and re-ranking tuned for accuracy on domain docs.',
  },
  {
    icon: '▤',
    title: 'Document AI · OCR',
    body: 'PDF parsing and OCR pipelines that turn construction specs, drawings annotations, and legacy docs into queryable data.',
  },
  {
    icon: '⚙',
    title: 'AI Agents & Prompt Engineering',
    body: 'LangChain/LlamaIndex-class orchestration, tool-use agents, and prompt systems that hold up in production.',
  },
  {
    icon: '☁',
    title: 'Cloud & DevOps',
    body: 'Docker, CI/CD, Postgres, and secure cloud deploys — from greenfield to hardened production.',
  },
]

const AEC_FEATURES = [
  {
    title: 'Construction Document Q&A',
    body: 'Ask a spec, get a cited answer. RAG over construction documents with source-grounded responses.',
  },
  {
    title: 'Building Code Search',
    body: 'Semantic search across codes and standards — find the clause that applies, not just the keyword.',
  },
  {
    title: 'AI-Assisted Plan Review',
    body: 'Parsing plan documents and drawings for review workflows — flag issues, reduce manual pass time.',
  },
  {
    title: 'AI Estimation Workflows',
    body: 'Extract quantities and cost drivers from documents to speed up estimation pipelines.',
  },
]

const TEAM = [
  {
    name: 'Phạm Hoàng Sơn',
    role: 'Lead Fullstack + AI Engineer',
    detail: 'The dedicated lead on your project — full-stack, LLM integration, RAG, document pipelines.',
    tags: ['React/TS/Next', 'Node + Python', 'RAG & LLMs', 'Postgres'],
  },
  {
    name: 'Dinh Dat Vi',
    role: 'Product Owner / BA',
    detail: 'Product Owner at Zalo (VNG) — 4+ years product delivery, AI chatbot product (FriendifyAI), BSc Information Systems @ UIT, MBA @ UEH.',
    tags: ['Product', 'BA', 'Zalo', 'UIT'],
  },
  {
    name: 'Dang Xuan Truong',
    role: 'Data / AI Engineer',
    detail: 'Data Engineer at Zalo (VNG) — 4+ years ETL on Spark (billions of rows, Zalo/Zing MP3/Báo Mới). Built OCR baseline for Vietnamese scanned docs + facial recognition; ex-AI Engineer. BSc CS @ UIT, MSc in progress.',
    tags: ['Spark', 'OCR', 'Python', 'AWS', 'Zalo', 'UIT'],
  },
  {
    name: 'Nam Hoang',
    role: 'Structural / AI-ML Engineer',
    detail: 'Structural - AI/ML Engineer @ Simpson Strong-Tie Vietnam, Team Lead Data Analysis. Co-built TBA (CV/ML Material Take-Off) with Son. Civil engineering domain (AEC).',
    tags: ['Computer Vision', 'ML', 'AEC', 'SST'],
  },
  {
    name: 'Anh Dung Nguyen',
    role: 'CEO / CTO',
    detail: 'CEO at Universe Labs — strategic lead + technical direction. LinkedIn out of date; portfolio coming.',
    tags: ['Strategy', 'Leadership', 'AI'],
  },
]

const PROOF_MEDIA = [
  { slug: 'tba', title: 'TBA — AI Material Take-Off', body: 'Computer vision + ML pipeline for construction material lists. 10 days → 3 days turnaround, 89.6% accuracy, 97.6% time reduction. Built with Nam Hoang at Simpson Strong-Tie.', tag: 'AEC / CV / ML' },
  { slug: 'roofdata', title: 'RoofData AI Estimator', body: 'Node/Express/TS AI costing estimator — Claude prose generation, intent extraction, role-gated endpoints, RBAC + JWT, deployed on-prem.', tag: 'LLM / Production' },
  { slug: 'doc-ai', title: 'Document Intelligence', body: 'PDF/OCR extraction pipeline — specs in, structured data out.', tag: 'AI / RAG' },
  { slug: 'rag-chat', title: 'RAG Chat', body: 'Chat over documents with cited answers.', tag: 'AI / RAG' },
]

const PROOF = PROOF_MEDIA

const STYLE = [
  { title: 'Remote-first, overlap with US', body: 'Full overlap with your timezone during your working window.' },
  { title: 'Async by default', body: 'Jira, Notion, Figma, Confluence, Slack — fluent in your tooling.' },
  { title: 'Ownership mindset', body: 'We deliver outcomes, not tickets. We ask why, then build.' },
  { title: 'English-native communication', body: 'Clear written and spoken English across international teams.' },
]

function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-12">
      <div className="font-mono-tech text-sm tracking-widest text-amber-400 uppercase">{kicker}</div>
      <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">{title}</h2>
    </div>
  )
}

function AssetUrl(slug: string, kind: 'cover' | 'video') {
  if (slug === 'tba' && kind === 'cover') return '/input/image33.png'
  const ext = kind === 'video' ? 'mp4' : 'jpg'
  return `/input/${slug}-${kind}.${ext}`
}

function ProofCard({ p }: { p: { slug: string; title: string; body: string; tag: string } }) {
  return (
    <Link
      to={`/project/${p.slug}`}
      className="group overflow-hidden border border-white/10 bg-white/[0.03] transition hover:border-amber-400/40"
    >
      <div className="aspect-video bg-white/5">
        <img
          src={AssetUrl(p.slug, 'cover')}
          alt={p.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
      </div>
      <div className="p-6">
        <div className="font-mono-tech text-xs uppercase tracking-wider text-amber-400">{p.tag}</div>
        <h3 className="mt-3 text-base font-semibold text-white">{p.title}</h3>
        <p className="mt-2 text-sm text-slate-400">{p.body}</p>
      </div>
    </Link>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-[#0a0f16] text-slate-200">
      {/* background grid */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0f16]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center border border-amber-400/60 bg-amber-400/10 font-mono-tech text-sm font-bold text-amber-400">
              B
            </span>
            <span className="font-mono-tech text-lg font-bold tracking-tight text-white">
              BUILD<span className="text-amber-400">FORM</span>
            </span>
          </div>
          <nav className="hidden gap-8 text-sm text-slate-400 md:flex">
            {NAV.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="transition hover:text-amber-400">
                {item}
              </a>
            ))}
          </nav>
          <a
            href="mailto:phamhoangson2611@gmail.com"
            className="hidden rounded border border-amber-400/50 px-4 py-2 text-sm font-medium text-amber-400 transition hover:bg-amber-400/10 md:block"
          >
            Let&apos;s talk
          </a>
        </div>
      </header>

      <main className="relative">
        {/* HERO */}
        <section id="top" className="mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="max-w-3xl">
            <div className="font-mono-tech mb-6 inline-flex items-center gap-2 border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              AI Engineering · Construction & Architecture
            </div>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              We build AI for the people who{' '}
              <span className="text-amber-400">build the world.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              Buildform is a small team of senior engineers — 5+ years each, ex-FPT and ex-Zalo,
              from Bách Khoa and UIT — who ship production AI: LLM integration, RAG and vector
              databases, document intelligence, and full-stack delivery.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#capabilities"
                className="rounded bg-amber-400 px-6 py-3 font-semibold text-[#0a0f16] transition hover:bg-amber-300"
              >
                See what we deliver
              </a>
              <a
                href="#contact"
                className="rounded border border-white/20 px-6 py-3 font-medium text-white transition hover:border-amber-400/50 hover:text-amber-400"
              >
                Talk to Son
              </a>
            </div>
          </div>
        </section>

        {/* JD MATCH */}
        <section id="capabilities" className="border-t border-white/10 bg-[#0d141d]/60 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading kicker="01 · Capabilities" title="You need. We deliver." />
            <div className="grid gap-4 md:grid-cols-2">
              {JD_MATCH.map((m) => (
                <div key={m.need} className="flex gap-4 border border-white/10 bg-white/[0.03] p-5 transition hover:border-amber-400/40">
                  <div className="font-mono-tech text-amber-400">✓</div>
                  <div>
                    <div className="font-medium text-white">{m.need}</div>
                    <div className="mt-1 text-sm text-slate-400">{m.have}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CAPABILITIES GRID */}
        <section id="capabilities-grid" className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading kicker="02 · What we do" title="Capabilities, not buzzwords." />
            <div className="grid gap-5 md:grid-cols-3">
              {CAPABILITIES.map((c) => (
                <div key={c.title} className="group border border-white/10 bg-white/[0.03] p-6 transition hover:border-amber-400/40">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center border border-amber-400/40 bg-amber-400/10 text-xl text-amber-400">
                    {c.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AEC FOCUS */}
        <section id="aec-focus" className="border-y border-white/10 bg-[#0d141d]/60 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading kicker="03 · AEC Focus" title="Built for construction & architecture." />
            <div className="grid gap-5 md:grid-cols-2">
              {AEC_FEATURES.map((f) => (
                <div key={f.title} className="border border-white/10 bg-white/[0.03] p-6 transition hover:border-amber-400/40">
                  <h3 className="text-lg font-semibold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section id="team" className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading kicker="04 · Team" title="One dedicated lead. A whole team behind." />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {TEAM.map((t) => (
                <div key={t.name} className="flex flex-col border border-white/10 bg-white/[0.03] p-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-amber-400/40 bg-amber-400/10 font-mono-tech text-lg font-bold text-amber-400">
                    {t.name.charAt(0)}
                  </div>
                  <h3 className="text-base font-semibold text-white">{t.name}</h3>
                  <div className="font-mono-tech text-xs uppercase tracking-wider text-amber-400">{t.role}</div>
                  <p className="mt-3 flex-1 text-sm text-slate-400">{t.detail}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {t.tags.map((tag) => (
                      <span key={tag} className="rounded bg-white/5 px-2 py-1 text-xs text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 font-mono-tech text-sm text-slate-500">
              // ex-FPT · ex-Zalo · Bách Khoa · UIT — 5+ years each
            </p>
          </div>
        </section>

        {/* PROOF */}
        <section id="proof" className="border-t border-white/10 bg-[#0d141d]/60 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading kicker="05 · Proof" title="Shipped, not slides." />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {PROOF.map((p) => (
                <ProofCard key={p.slug} p={p} />
              ))}
            </div>
          </div>
        </section>

        {/* WORKING STYLE */}
        <section id="working-style" className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading kicker="06 · Working Style" title="Built for your workflow." />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {STYLE.map((s) => (
                <div key={s.title} className="border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA / CONTACT */}
        <section id="contact" className="border-t border-white/10 bg-[#0d141d]/60 py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-3xl font-bold text-white md:text-5xl">
              Ready to build.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">
              We&apos;re ready to start on your document intelligence and AI workflows.
              Let&apos;s talk about your project.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:phamhoangson2611@gmail.com"
                className="rounded bg-amber-400 px-8 py-3 font-semibold text-[#0a0f16] transition hover:bg-amber-300"
              >
                phamhoangson2611@gmail.com
              </a>
              <a
                href="#top"
                className="rounded border border-white/20 px-8 py-3 font-medium text-white transition hover:border-amber-400/50 hover:text-amber-400"
              >
                Back to top
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-6xl px-6 font-mono-tech text-xs text-slate-600">
          © {new Date().getFullYear()} Buildform · AI Engineering for Construction & Architecture
        </div>
      </footer>
    </div>
  )
}

export default App
