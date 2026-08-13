import { Link } from 'react-router-dom'
import { TextureCard } from '@/components/ui/texture-card'
import { GradientHeading } from '@/components/ui/gradient-heading'
import { Spotlight } from '@/components/ui/spotlight-new'

const NAV = ['Proof', 'Capabilities', 'Team', 'Contact']

const CAPABILITIES = [
  { need: 'React, TypeScript, Next.js', have: 'Production React 19 / TS codebases, Next.js apps shipped' },
  { need: 'Node.js (NestJS/Express) or Python (FastAPI)', have: 'Node + Python services in production; REST APIs end-to-end' },
  { need: 'PostgreSQL / MySQL, Git', have: 'Postgres at scale, Supabase, versioned workflows' },
  { need: 'Docker + CI/CD cloud deploys', have: 'Dockerized apps, GitHub Actions → ECS/Fargate & static CDNs' },
  { need: 'LLM integration (OpenAI, Claude, Gemini)', have: 'OpenAI / Claude / Gemini wired into real products' },
  { need: 'RAG + vector databases', have: 'pgvector, Qdrant-class pipelines in production' },
  { need: 'PDF parsing, OCR, document pipelines', have: 'Extraction pipelines on messy real-world documents' },
  { need: 'AEC domain', have: 'Construction & architecture engineering experience' },
]

const PROOF = [
  {
    slug: 'tba',
    title: 'AI Material Take-Off',
    body: 'Computer vision + ML pipeline for construction material lists. 10 days → 3 days turnaround, 89.6% accuracy, 97.6% time reduction.',
    tag: 'AEC / CV / ML',
    metric: '97.6% time cut',
  },
  {
    slug: 'roofdata',
    title: 'AI Roof Estimator',
    body: 'Node/Express/TS AI costing estimator — intent extraction, confidence tiering, role-gated endpoints, RBAC + JWT, deployed on-prem.',
    tag: 'LLM / Production',
    metric: 'Confidence-tiered estimates',
  },
  {
    slug: 'voicegpt',
    title: 'VoiceGPT',
    body: 'Voice-first ChatGPT interface — 70,000+ registered users in the first month, Vietnamese + English speech with 98% accuracy, art generation from prompts.',
    tag: 'Voice AI / LLM Product',
    metric: '70k users in 30 days',
  },
]

const TEAM = [
  {
    name: 'Phạm Hoàng Sơn',
    role: 'Lead Fullstack + AI',
    avatar: '/input/son-avatar.jpg',
    detail: 'The dedicated lead on your project — full-stack, LLM integration, RAG, document pipelines.',
    tags: ['React/TS/Next', 'Node + Python', 'RAG & LLMs', 'Postgres'],
  },
  {
    name: 'Nam Hoang',
    role: 'Structural / AI-ML Engineer',
    avatar: '/input/nam-avatar.jpg',
    detail: 'Structural - AI/ML Engineer, civil engineering domain (AEC). Co-built AI material take-off with Son. Simpson Strong-Tie.',
    tags: ['Computer Vision', 'ML', 'AEC'],
  },
  {
    name: 'Dang Xuan Truong',
    role: 'Data / AI Engineer',
    avatar: '/input/truong-avatar.jpg',
    detail: 'Data Engineer at Zalo (VNG) — 4+ years ETL on Spark (billions of rows). Built OCR baseline for Vietnamese scanned docs.',
    tags: ['Spark', 'OCR', 'Python', 'Zalo', 'UIT'],
  },
  {
    name: 'Anh Dung Nguyen',
    role: 'AI Engineer',
    avatar: '/input/dung-avatar.jpg',
    detail: 'R&D lead at Tesse (VoiceGPT) and Universe Labs — shipped VoiceGPT (70k users), AI integration for business clients across VN, Singapore, Australia, Canada. Unity/3D + digital twin, LLM & vision AI.',
    tags: ['Voice AI', 'Vision AI', 'LLM Agents', 'Digital Twin'],
  },
  {
    name: 'Dinh Dat Vi',
    role: 'Product Owner / BA',
    avatar: '/input/vi-avatar.jpg',
    detail: 'Product Owner at Zalo (VNG) — product delivery, AI chatbot product (FriendifyAI), BSc Information Systems @ UIT, MBA @ UEH.',
    tags: ['Product', 'BA', 'Zalo', 'UIT'],
  },
]

function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-12">
      <div className="font-mono-tech text-sm tracking-widest text-amber-400 uppercase">{kicker}</div>
      <GradientHeading size="lg" weight="bold" className="mt-2 !text-white">{title}</GradientHeading>
    </div>
  )
}

function AssetUrl(slug: string, kind: 'cover' | 'video') {
  if (slug === 'tba' && kind === 'cover') return '/input/image33.png'
  if (slug === 'voicegpt' && kind === 'cover') return '/input/voicegpt-cover.png'
  const ext = kind === 'video' ? 'mp4' : 'jpg'
  return `/input/${slug}-${kind}.${ext}`
}

function ProofCard({ p }: { p: { slug: string; title: string; body: string; tag: string; metric: string } }) {
  return (
    <Link
      to={`/project/${p.slug}`}
      className="group block"
    >
      <TextureCard className="transition hover:border-amber-400/40">
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
          <div className="font-mono-tech text-xs tracking-wider text-amber-400">{p.tag}</div>
          <h3 className="mt-3 text-base font-semibold text-white">{p.title}</h3>
          <p className="mt-2 text-sm text-slate-400">{p.body}</p>
          <div className="mt-4 border-t border-white/10 pt-3 font-mono-tech text-sm font-bold text-amber-400">
            {p.metric}
          </div>
        </div>
      </TextureCard>
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
              AI
            </span>
            <span className="font-mono-tech text-sm font-semibold tracking-tight text-white">
              AI Engineering · Construction & Architecture
            </span>
          </div>
          <nav className="hidden gap-8 text-sm text-slate-400 md:flex">
            {NAV.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-amber-400">
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
        {/* HERO — text left, proof panel right */}
        <section id="top" className="relative mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-28">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(38, 92%, 50%, .12) 0, hsla(38, 92%, 45%, .03) 50%, hsla(38, 92%, 40%, 0) 80%)"
            gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(38, 92%, 50%, .08) 0, hsla(38, 92%, 45%, .02) 80%, transparent 100%)"
          />
          <div className="relative grid items-center gap-12 md:grid-cols-2">
            <div>
              <div className="font-mono-tech mb-6 inline-flex items-center gap-2 border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                AI for AEC · Vietnam
              </div>
              <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
                We build AI for the people who{' '}
                <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent">
                  build the world.
                </span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-400">
                A small team of senior engineers — 5+ years each, ex-FPT and ex-Zalo — who ship
                production AI for construction: document intelligence, LLM integration, RAG, and
                full-stack delivery.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#proof"
                  className="rounded bg-amber-400 px-6 py-3 font-semibold text-[#0a0f16] transition hover:bg-amber-300"
                >
                  See what we deliver
                </a>
                <a
                  href="#contact"
                  className="rounded border border-white/20 px-6 py-3 font-medium text-white transition hover:border-amber-400/50 hover:text-amber-400"
                >
                  Talk to us
                </a>
              </div>
            </div>

            {/* Hero proof panel — TBA */}
            <Link
              to="/project/tba"
              className="group relative overflow-hidden border border-white/10 bg-white/[0.03]"
            >
              <img
                src="/input/image9.png"
                alt="AI Material Take-Off marked-up plan"
                className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f16] via-[#0a0f16]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <div className="font-mono-tech text-xs uppercase tracking-wider text-amber-400">
                  AI Material Take-Off
                </div>
                <div className="mt-2 flex flex-wrap items-end gap-x-6 gap-y-3">
                  <div>
                    <div className="font-mono-tech text-3xl font-bold text-white md:text-4xl">10→3</div>
                    <div className="mt-0.5 text-xs font-medium text-slate-300">days turnaround</div>
                  </div>
                  <div>
                    <div className="font-mono-tech text-3xl font-bold text-amber-400 md:text-4xl">89.6%</div>
                    <div className="mt-0.5 text-xs font-medium text-slate-300">accuracy</div>
                  </div>
                  <div>
                    <div className="font-mono-tech text-3xl font-bold text-amber-400 md:text-4xl">97.6%</div>
                    <div className="mt-0.5 text-xs font-medium text-slate-300">time cut</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* PROOF — real project */}
        <section id="proof" className="border-t border-white/10 bg-[#0d141d]/60 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading kicker="01 · Proof" title="Shipped, not slides." />
            <div className="grid gap-5 md:grid-cols-2">
              {PROOF.map((p) => (
                <ProofCard key={p.slug} p={p} />
              ))}
            </div>
          </div>
        </section>

        {/* CAPABILITIES — JD mirror */}
        <section id="capabilities" className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading kicker="02 · Capabilities" title="You need. We deliver." />
            <div className="grid gap-4 md:grid-cols-2">
              {CAPABILITIES.map((m) => (
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

        {/* TEAM */}
        <section id="team" className="border-t border-white/10 bg-[#0d141d]/60 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading kicker="03 · Team" title="One dedicated lead. A whole team behind." />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {TEAM.map((t) => (
                <div key={t.name} className="flex flex-col border border-white/10 bg-white/[0.03] p-6">
                  {t.avatar ? (
                    <img src={t.avatar} alt={t.name} className="mb-4 h-14 w-14 rounded-full border border-amber-400/40 object-cover" />
                  ) : (
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-amber-400/40 bg-amber-400/10 font-mono-tech text-lg font-bold text-amber-400">
                      {t.name.charAt(0)}
                    </div>
                  )}
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
              // ex-FPT · ex-Zalo · AEC engineers — 5+ years each
            </p>
          </div>
        </section>

        {/* CTA / CONTACT */}
        <section id="contact" className="py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-3xl font-bold text-white md:text-5xl">
              Ready to build.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">
              One dedicated lead, a full team behind, and AEC AI proof already shipped.
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
          © {new Date().getFullYear()} AI Engineering for Construction & Architecture
        </div>
      </footer>
    </div>
  )
}

export default App
