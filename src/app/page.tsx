"use client";

import { useState, useEffect } from "react";
import {
  ArrowUpRight,
  Bot,
  FileText,
  QrCode,
  FileSpreadsheet,
  BadgeDollarSign,
  Award,
  FileSignature,
  Wallet,
  CreditCard,
  Palette,
  Mail,
  Phone,
  MessageCircle,
  ExternalLink,
  Sparkles,
  Code2,
  Zap,
  Shield,
  Layers,
  ChevronRight,
  Menu,
  X,
  Globe,
} from "lucide-react";

const projects = [
  {
    id: "bookai",
    title: "BookAI",
    tagline: "AI receptionist & appointment booking, 24/7",
    description:
      "SaaS AI receptionist that handles appointment booking and answers customer questions around the clock. Automates front-desk conversations so businesses never miss a booking or inquiry.",
    url: "https://bookaiapp.vercel.app",
    featured: true,
    tags: ["AI", "SaaS", "Booking", "Receptionist"],
    icon: Bot,
    color: "from-indigo-500 to-purple-600",
  },
  {
    id: "ats-resume",
    title: "ATS Resume Builder",
    tagline: "Professional & ATS-optimized resumes",
    description:
      "Create clean, single-column, text-based resumes engineered to pass Applicant Tracking Systems. Pakistan-focused with live ATS score and PDF export.",
    url: "https://ats-resume-builder-eight-gamma.vercel.app/",
    tags: ["PDF", "ATS", "Career"],
    icon: FileText,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "qr-code",
    title: "QR Code Generator",
    tagline: "Link • WhatsApp • WiFi • Text",
    description:
      "Fast, beautiful QR code generator supporting multiple types. Clean downloads ready for print or digital use.",
    url: "https://qr-code-generator-wheat-six.vercel.app",
    tags: ["Utility", "QR"],
    icon: QrCode,
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: "quotation",
    title: "Quotation / Estimate Generator",
    tagline: "Professional quotes for freelancers & businesses",
    description:
      "Generate polished quotations and estimates with live preview and PDF download. Built for freelancers and small businesses in Pakistan.",
    url: "https://quotation-estimate-generator.vercel.app",
    tags: ["PDF", "Business"],
    icon: FileSpreadsheet,
    color: "from-amber-500 to-orange-500",
  },
  {
    id: "payslip",
    title: "Salary Slip / Payslip Maker",
    tagline: "Professional Pakistan format payslips",
    description:
      "Create official-looking salary slips with company details, earnings, deductions, and clean PDF export in Pakistan-friendly format.",
    url: "https://professional-salary-slip-payslip-ma.vercel.app",
    tags: ["PDF", "HR", "Finance"],
    icon: BadgeDollarSign,
    color: "from-green-500 to-emerald-600",
  },
  {
    id: "certificate",
    title: "Certificate & Award Generator",
    tagline: "Professional certificates & awards",
    description:
      "Design and download landscape A4 certificates and awards with customizable content and high-quality PDF output.",
    url: "https://certificate-award-generator.vercel.app",
    tags: ["PDF", "Design"],
    icon: Award,
    color: "from-yellow-500 to-amber-500",
  },
  {
    id: "contract",
    title: "Service Agreement Generator",
    tagline: "Freelance & business contracts",
    description:
      "Generate professional service agreements and contracts with parties, terms, and clean PDF download — ideal for freelancers.",
    url: "https://service-agreement-contract-generato.vercel.app",
    tags: ["PDF", "Legal", "Freelance"],
    icon: FileSignature,
    color: "from-rose-500 to-pink-500",
  },
  {
    id: "expense",
    title: "Expense Tracker",
    tagline: "Daily & monthly expense tracking",
    description:
      "Simple yet powerful expense tracker for daily and monthly spending with totals, history, and PDF export.",
    url: "https://expense-tracker-orpin-eight-81.vercel.app",
    tags: ["Finance", "Productivity"],
    icon: Wallet,
    color: "from-violet-500 to-purple-500",
  },
  {
    id: "business-card",
    title: "Business Card Designer",
    tagline: "Print-ready 3.5″ × 2″ cards",
    description:
      "Design print-ready business cards at standard size with live preview and high-DPI PDF export.",
    url: "https://business-card-designer-flame.vercel.app",
    tags: ["Design", "Print"],
    icon: CreditCard,
    color: "from-sky-500 to-blue-600",
  },
  {
    id: "design-studio",
    title: "Design Studio Pro",
    tagline: "Posts, Stories, Banners, Shadi Cards & more",
    description:
      "All-in-one design studio for social posts, stories, reels, banners, wedding (Shadi) cards, flyers, covers and sale banners with brand kit support.",
    url: "https://design-studio-pro-six.vercel.app",
    tags: ["Design", "Social", "Marketing"],
    icon: Palette,
    color: "from-fuchsia-500 to-pink-600",
  },
];

const skills = [
  { name: "Next.js / React", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Node.js", level: 85 },
  { name: "AI / LLMs", level: 88 },
  { name: "PDF Generation", level: 92 },
  { name: "Product Design", level: 90 },
  { name: "Vercel / Deployment", level: 95 },
];

const features = [
  {
    icon: Zap,
    title: "Speed-first",
    description: "Every product loads fast and feels instant — no unnecessary friction.",
  },
  {
    icon: Shield,
    title: "Production quality",
    description: "Built like real software, not demos. Reliable exports, clean UX, edge cases handled.",
  },
  {
    icon: Layers,
    title: "Focused tooling",
    description: "Each app solves one job extremely well for freelancers and businesses in Pakistan.",
  },
  {
    icon: Sparkles,
    title: "AI-augmented",
    description: "Where it matters most (BookAI), intelligent 24/7 reception and booking that never sleeps.",
  },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["home", "work", "about", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "work", label: "Work" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background effects */}
      <div className="pointer-events-none fixed inset-0 bg-grid opacity-60" />
      <div className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full" />
      <div className="pointer-events-none fixed bottom-0 right-0 w-[600px] h-[400px] bg-purple-600/8 blur-[100px] rounded-full" />

      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="flex h-16 items-center justify-between">
            <a
              href="#home"
              className="flex items-center gap-2.5 font-semibold tracking-tight text-foreground"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-sm font-bold text-white">
                M
              </span>
              <span className="hidden sm:inline">Muhammad Mubashir</span>
            </a>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`px-3.5 py-2 text-sm rounded-lg transition-colors ${
                    activeSection === link.id
                      ? "text-white bg-white/5"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-zinc-200 transition-colors"
              >
                Let&apos;s talk
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 text-muted hover:text-foreground"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
            <div className="px-5 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2.5 text-sm rounded-lg text-muted hover:text-foreground hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-white text-black px-4 py-2.5 text-sm font-medium"
              >
                Let&apos;s talk
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section
          id="home"
          className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 px-5 sm:px-6"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-1.5 text-xs text-muted mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Available for new projects
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-balance">
                Product Engineer building{" "}
                <span className="gradient-text">tools people actually use</span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-muted leading-relaxed max-w-2xl">
                I design and ship AI-powered products and professional business
                utilities — from BookAI to a full suite of generators used by
                freelancers and companies across Pakistan.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity glow-sm"
                >
                  View my work
                  <ChevronRight className="h-4 w-4" />
                </a>
                <a
                  href="https://bookaiapp.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-5 py-2.5 text-sm font-medium text-foreground hover:bg-white/10 transition-colors"
                >
                  Try BookAI
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              <div className="mt-12 flex flex-wrap gap-6 text-sm text-muted">
                <div className="flex items-center gap-2">
                  <Code2 className="h-4 w-4 text-accent-light" />
                  10+ shipped products
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-accent-light" />
                  Live on Vercel
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-accent-light" />
                  AI + PDF + Design tools
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured: BookAI */}
        <section className="px-5 sm:px-6 pb-20">
          <div className="mx-auto max-w-6xl">
            <div className="gradient-border overflow-hidden">
              <div className="relative p-6 sm:p-10 lg:p-12">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/3" />
                <div className="relative flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 text-xs font-medium text-indigo-300 mb-4">
                      <Sparkles className="h-3.5 w-3.5" />
                      Featured Product
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                      BookAI
                    </h2>
                    <p className="mt-2 text-lg text-indigo-200/80">
                      AI receptionist & appointment booking, 24/7
                    </p>
                    <p className="mt-4 text-muted leading-relaxed max-w-xl">
                      SaaS AI receptionist that books appointments and answers
                      customer questions around the clock. Automates front-desk
                      conversations so businesses never miss a booking or
                      inquiry — fully available 24/7.
                    </p>
                    <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-muted">
                      {[
                        "24/7 AI receptionist",
                        "Appointment booking",
                        "Answers customer questions",
                        "Never miss an inquiry",
                        "Multi-tenant SaaS",
                        "Always-on availability",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <a
                        href="https://bookaiapp.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-zinc-200 transition-colors"
                      >
                        Open BookAI
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2.5 text-xs text-muted">
                        bookaiapp.vercel.app
                      </span>
                    </div>
                  </div>
                  <div className="lg:w-[380px] shrink-0">
                    <div className="rounded-2xl border border-border bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent p-8 flex flex-col items-center justify-center min-h-[240px] animate-float">
                      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30">
                        <Bot className="h-10 w-10 text-white" />
                      </div>
                      <p className="mt-5 text-sm font-medium text-center text-zinc-300">
                        AI Receptionist & Booking SaaS
                      </p>
                      <p className="mt-1 text-xs text-muted text-center">
                        24/7 appointments & answers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All Projects */}
        <section id="work" className="px-5 sm:px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
              <div>
                <p className="text-sm font-medium text-accent-light mb-2">
                  Selected Work
                </p>
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                  Products I&apos;ve shipped
                </h2>
                <p className="mt-3 text-muted max-w-lg">
                  A focused suite of tools for freelancers, small businesses,
                  and creators — each solving a real daily problem.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {projects
                .filter((p) => !p.featured)
                .map((project) => {
                  const Icon = project.icon;
                  return (
                    <a
                      key={project.id}
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative rounded-2xl border border-border bg-card hover:bg-card-hover p-6 transition-all duration-300 hover:border-zinc-700"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div
                          className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${project.color} shadow-lg`}
                        >
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-muted group-hover:text-foreground transition-colors shrink-0 mt-1" />
                      </div>
                      <h3 className="mt-5 text-lg font-semibold tracking-tight group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted">{project.tagline}</p>
                      <p className="mt-3 text-sm text-zinc-400 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </a>
                  );
                })}
            </div>
          </div>
        </section>

        {/* Approach / Features */}
        <section className="px-5 sm:px-6 py-16 border-t border-border">
          <div className="mx-auto max-w-6xl">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-sm font-medium text-accent-light mb-2">
                How I build
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                Product thinking, not just code
              </h2>
              <p className="mt-3 text-muted">
                Every tool is designed to feel like software from a company
                with years of refinement — clean, fast, and focused.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.title}
                    className="rounded-2xl border border-border bg-card p-6"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold">{f.title}</h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* About + Skills */}
        <section id="about" className="px-5 sm:px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <p className="text-sm font-medium text-accent-light mb-2">
                  About
                </p>
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                  Muhammad Mubashir
                </h2>
                <p className="mt-2 text-lg text-muted">
                  Product Engineer & Full-Stack Developer
                </p>
                <div className="mt-6 space-y-4 text-muted leading-relaxed">
                  <p>
                    I build focused digital products that solve real problems
                    for freelancers, small businesses, and everyday users in
                    Pakistan and beyond.
                  </p>
                  <p>
                    My work ranges from BookAI — an AI receptionist and
                    appointment-booking SaaS that works 24/7 — to a complete
                    suite of professional generators: resumes, contracts,
                    payslips, certificates, design tools, and more. Each one is
                    designed to be fast, intuitive, and production-ready.
                  </p>
                  <p>
                    I care deeply about the details: clean exports, thoughtful
                    defaults, responsive interfaces, and experiences that feel
                    polished from day one.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="mailto:mmubashi75@gmail.com"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted hover:text-foreground hover:border-zinc-600 transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    mmubashi75@gmail.com
                  </a>
                  <a
                    href="https://wa.me/923047343632"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted hover:text-foreground hover:border-zinc-600 transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-accent-light mb-6">
                  Skills & stack
                </p>
                <div className="space-y-5">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="px-5 sm:px-6 py-16 sm:py-24 border-t border-border"
        >
          <div className="mx-auto max-w-6xl">
            <div className="rounded-3xl border border-border bg-card overflow-hidden">
              <div className="relative p-8 sm:p-12 lg:p-16">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5" />
                <div className="relative max-w-2xl">
                  <p className="text-sm font-medium text-accent-light mb-2">
                    Contact
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                    Let&apos;s build something useful
                  </h2>
                  <p className="mt-4 text-muted leading-relaxed">
                    Whether you need a custom tool, want to collaborate, or just
                    want to say hello — I&apos;m always open to interesting
                    conversations.
                  </p>

                  <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a
                      href="mailto:mmubashi75@gmail.com"
                      className="group flex items-center gap-4 rounded-2xl border border-border bg-background/50 p-5 hover:border-zinc-600 transition-colors"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Email</p>
                        <p className="text-sm text-muted">
                          mmubashi75@gmail.com
                        </p>
                      </div>
                    </a>

                    <a
                      href="tel:+923047343632"
                      className="group flex items-center gap-4 rounded-2xl border border-border bg-background/50 p-5 hover:border-zinc-600 transition-colors"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Phone</p>
                        <p className="text-sm text-muted">+92 304 734 3632</p>
                      </div>
                    </a>

                    <a
                      href="https://wa.me/923047343632"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-2xl border border-border bg-background/50 p-5 hover:border-zinc-600 transition-colors sm:col-span-2"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 text-green-400 group-hover:bg-green-500/20 transition-colors">
                        <MessageCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">WhatsApp</p>
                        <p className="text-sm text-muted">
                          +92 304 734 3632 — preferred for quick chat
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border px-5 sm:px-6 py-10">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-sm text-muted">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 text-xs font-bold text-white">
              M
            </span>
            <span>© {new Date().getFullYear()} Muhammad Mubashir</span>
          </div>
          <p className="text-xs text-muted">
            Built with Next.js · Deployed on Vercel
          </p>
        </div>
      </footer>
    </div>
  );
}
