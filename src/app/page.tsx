"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
  Zap,
  Shield,
  ChevronRight,
  Menu,
  X,
  ShoppingCart,
  BookOpen,
  Users,
  Building2,
  Wrench,
  ClipboardList,
  Star,
  Calculator,
  PenTool,
  Receipt,
  Store,
  Briefcase,
  CheckCircle2,
} from "lucide-react";

type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  url: string;
  featured?: boolean;
  tags: string[];
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  category: "ai" | "saas" | "tools";
};

const projects: Project[] = [
  {
    id: "bookai",
    title: "BookAI",
    tagline: "AI Receptionist & 24/7 Appointment Booking",
    description:
      "AI receptionist that books appointments and answers customer questions around the clock. Never miss a lead or inquiry.",
    url: "https://bookaiapp.vercel.app",
    featured: true,
    tags: ["AI", "SaaS", "Receptionist", "Booking"],
    icon: Bot,
    color: "from-indigo-500 to-purple-600",
    category: "ai",
  },
  {
    id: "contentai",
    title: "ContentAI",
    tagline: "AI-powered content generation",
    description:
      "Generate high-quality marketing and business content with AI — faster drafts, consistent tone, ready to publish.",
    url: "https://contentai-brown.vercel.app",
    tags: ["AI", "Content", "Marketing"],
    icon: PenTool,
    color: "from-violet-500 to-fuchsia-500",
    category: "ai",
  },
  {
    id: "crm",
    title: "CRM SaaS",
    tagline: "Customer relationship management",
    description:
      "Full CRM to manage leads, customers, pipelines and follow-ups — built for growing teams and freelancers.",
    url: "https://crm-saas-tan-two.vercel.app",
    tags: ["SaaS", "CRM", "Sales"],
    icon: Users,
    color: "from-blue-500 to-cyan-500",
    category: "saas",
  },
  {
    id: "invoiceflow",
    title: "InvoiceFlow",
    tagline: "Professional invoicing SaaS",
    description:
      "Create, send and track invoices with a clean workflow designed for freelancers and small businesses.",
    url: "https://invoiceflow-saas-theta.vercel.app",
    tags: ["SaaS", "Finance", "Invoicing"],
    icon: Receipt,
    color: "from-emerald-500 to-teal-500",
    category: "saas",
  },
  {
    id: "khatapk",
    title: "KhataPK",
    tagline: "Digital ledger for Pakistan",
    description:
      "Simple, reliable digital khata / ledger for shops and businesses — track credits, debits and balances.",
    url: "https://khata-sandy.vercel.app",
    tags: ["SaaS", "Finance", "Pakistan"],
    icon: BookOpen,
    color: "from-amber-500 to-orange-500",
    category: "saas",
  },
  {
    id: "peopleflow",
    title: "PeopleFlow",
    tagline: "HR & people management",
    description:
      "HR SaaS for attendance, employees and people ops — keep your team organized in one place.",
    url: "https://hr-saaswebapp.vercel.app",
    tags: ["SaaS", "HR", "People"],
    icon: Users,
    color: "from-rose-500 to-pink-500",
    category: "saas",
  },
  {
    id: "pos",
    title: "POS System",
    tagline: "Point of sale for retail",
    description:
      "Modern POS for shops and retail — fast checkout, products and sales tracking.",
    url: "https://pos-rho-livid.vercel.app",
    tags: ["SaaS", "Retail", "POS"],
    icon: ShoppingCart,
    color: "from-green-500 to-emerald-600",
    category: "saas",
  },
  {
    id: "rentalhub",
    title: "RentalHub",
    tagline: "Rental & property management",
    description:
      "Manage rentals, tenants and properties with a focused SaaS built for landlords and agencies.",
    url: "https://rentalhub-khaki.vercel.app",
    tags: ["SaaS", "Property", "Rentals"],
    icon: Building2,
    color: "from-sky-500 to-blue-600",
    category: "saas",
  },
  {
    id: "bizmanage",
    title: "BizManage",
    tagline: "All-in-one business management",
    description:
      "Unified business management web app to run day-to-day operations from one dashboard.",
    url: "https://bizmanage-wepapp.vercel.app",
    tags: ["SaaS", "Business", "Ops"],
    icon: Briefcase,
    color: "from-indigo-500 to-blue-500",
    category: "saas",
  },
  {
    id: "workshop",
    title: "Workshop Manager",
    tagline: "Workshop & job management",
    description:
      "Track jobs, customers and workshop workflow — built for auto shops and service businesses.",
    url: "https://workshop-manager-chi.vercel.app",
    tags: ["SaaS", "Workshop", "Services"],
    icon: Wrench,
    color: "from-orange-500 to-red-500",
    category: "saas",
  },
  {
    id: "feemanager",
    title: "Fee Manager",
    tagline: "Fee collection & tracking",
    description:
      "Collect and manage fees for institutes, academies and training centers with clear records.",
    url: "https://feemanagerapp.vercel.app",
    tags: ["SaaS", "Education", "Finance"],
    icon: ClipboardList,
    color: "from-teal-500 to-cyan-500",
    category: "saas",
  },
  {
    id: "reviewflow",
    title: "ReviewFlow",
    tagline: "Reviews & reputation",
    description:
      "Collect and manage customer reviews to build trust and improve online reputation.",
    url: "https://reviewflowapp.vercel.app",
    tags: ["SaaS", "Reviews", "Marketing"],
    icon: Star,
    color: "from-yellow-500 to-amber-500",
    category: "saas",
  },
  {
    id: "proposal",
    title: "Proposal & Contract Builder",
    tagline: "Proposals and contracts in minutes",
    description:
      "Create professional proposals and contracts fast — ideal for freelancers and agencies.",
    url: "https://proposal-contract-builder.vercel.app",
    tags: ["Tools", "Legal", "Freelance"],
    icon: FileSignature,
    color: "from-purple-500 to-indigo-500",
    category: "tools",
  },
  {
    id: "calcpro",
    title: "CalcPro",
    tagline: "Business calculators",
    description:
      "Practical calculators for business, finance and everyday professional use.",
    url: "https://calcpro-webapp.vercel.app",
    tags: ["Tools", "Finance", "Utility"],
    icon: Calculator,
    color: "from-slate-500 to-zinc-600",
    category: "tools",
  },
  {
    id: "ats-resume",
    title: "ATS Resume Builder",
    tagline: "ATS-optimized resumes",
    description:
      "Build clean, single-column resumes engineered to pass Applicant Tracking Systems.",
    url: "https://ats-resume-builder-eight-gamma.vercel.app/",
    tags: ["Tools", "Career", "PDF"],
    icon: FileText,
    color: "from-blue-500 to-indigo-500",
    category: "tools",
  },
  {
    id: "design-studio",
    title: "Design Studio Pro",
    tagline: "Posts, stories, banners & more",
    description:
      "Design social posts, stories, banners, Shadi cards and flyers with brand kit support.",
    url: "https://design-studio-pro-six.vercel.app",
    tags: ["Design", "Marketing", "Social"],
    icon: Palette,
    color: "from-fuchsia-500 to-pink-600",
    category: "tools",
  },
  {
    id: "business-card",
    title: "Business Card Designer",
    tagline: "Print-ready cards",
    description:
      "Design print-ready business cards with live preview and high-DPI PDF export.",
    url: "https://business-card-designer-flame.vercel.app",
    tags: ["Design", "Print", "Branding"],
    icon: CreditCard,
    color: "from-sky-500 to-blue-500",
    category: "tools",
  },
  {
    id: "certificate",
    title: "Certificate & Award Generator",
    tagline: "Professional certificates",
    description:
      "Create landscape A4 certificates and awards with customizable content and PDF download.",
    url: "https://certificate-award-generator.vercel.app",
    tags: ["Tools", "PDF", "Design"],
    icon: Award,
    color: "from-yellow-500 to-orange-500",
    category: "tools",
  },
  {
    id: "contract",
    title: "Service Agreement Generator",
    tagline: "Freelance & business contracts",
    description:
      "Generate professional service agreements with parties, terms and clean PDF export.",
    url: "https://service-agreement-contract-generato.vercel.app",
    tags: ["Tools", "Legal", "PDF"],
    icon: FileSignature,
    color: "from-rose-500 to-red-500",
    category: "tools",
  },
  {
    id: "quotation",
    title: "Quotation Generator",
    tagline: "Estimates for freelancers & businesses",
    description:
      "Polished quotations and estimates with live preview and PDF download.",
    url: "https://quotation-estimate-generator.vercel.app",
    tags: ["Tools", "Business", "PDF"],
    icon: FileSpreadsheet,
    color: "from-amber-500 to-yellow-500",
    category: "tools",
  },
  {
    id: "payslip",
    title: "Salary Slip Generator",
    tagline: "Pakistan-format payslips",
    description:
      "Official-looking salary slips with earnings, deductions and Pakistan-friendly PDF format.",
    url: "https://professional-salary-slip-payslip-ma.vercel.app",
    tags: ["Tools", "HR", "PDF"],
    icon: BadgeDollarSign,
    color: "from-green-500 to-lime-500",
    category: "tools",
  },
  {
    id: "expense",
    title: "Expense Tracker",
    tagline: "Daily & monthly expenses",
    description:
      "Track daily and monthly spending with totals, history and PDF export.",
    url: "https://expense-tracker-orpin-eight-81.vercel.app",
    tags: ["Tools", "Finance", "Productivity"],
    icon: Wallet,
    color: "from-violet-500 to-purple-500",
    category: "tools",
  },
  {
    id: "qr-code",
    title: "QR Code Generator",
    tagline: "Link • WhatsApp • WiFi • Text",
    description:
      "Fast QR generator for links, WhatsApp, WiFi and text — clean downloads for print or digital.",
    url: "https://qr-code-generator-wheat-six.vercel.app",
    tags: ["Tools", "Utility", "QR"],
    icon: QrCode,
    color: "from-emerald-500 to-green-500",
    category: "tools",
  },
];

const skills = [
  { name: "AI / LLMs & Agents", level: 92 },
  { name: "Next.js / React", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "SaaS Architecture", level: 90 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Node.js / APIs", level: 88 },
  { name: "Product Design", level: 90 },
  { name: "Vercel / Shipping", level: 95 },
];

const highlights = [
  {
    icon: Bot,
    title: "AI-first products",
    description:
      "BookAI and ContentAI — real AI that answers, books and creates for businesses 24/7.",
  },
  {
    icon: Store,
    title: "20+ live SaaS & tools",
    description:
      "CRM, POS, invoicing, HR, rentals and more — all production apps, not demos.",
  },
  {
    icon: Zap,
    title: "Ship fast, polish hard",
    description:
      "Clean UX, reliable exports, mobile-ready. Built to convert users and clients.",
  },
  {
    icon: Shield,
    title: "Business-ready",
    description:
      "Designed for Pakistan & global freelancers, shops and growing companies.",
  },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [filter, setFilter] = useState<"all" | "ai" | "saas" | "tools">("all");

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

  const filtered =
    filter === "all"
      ? projects.filter((p) => !p.featured)
      : projects.filter((p) => !p.featured && p.category === filter);

  const featured = projects.find((p) => p.featured)!;

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 bg-grid opacity-50" />
      <div className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[520px] bg-indigo-600/15 blur-[140px] rounded-full" />
      <div className="pointer-events-none fixed bottom-1/4 right-0 w-[500px] h-[400px] bg-purple-600/10 blur-[120px] rounded-full" />

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
              className="flex items-center gap-2.5 font-semibold tracking-tight"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-sm font-bold text-white">
                M
              </span>
              <span className="hidden sm:inline text-sm sm:text-base">
                Muhammad Mubashir
              </span>
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
                Hire me
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 text-muted hover:text-foreground"
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>

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
                Hire me
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        <section
          id="home"
          className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 px-5 sm:px-6"
        >
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-1.5 text-xs text-muted mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  Available for hire & custom SaaS builds
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-semibold tracking-tight leading-[1.12] text-balance">
                  AI Engineer building{" "}
                  <span className="gradient-text">products that sell</span>
                </h1>

                <p className="mt-5 text-lg text-muted leading-relaxed max-w-xl">
                  I design and ship AI-powered SaaS and business tools — from a
                  24/7 AI receptionist to CRM, POS, invoicing and 20+ live apps
                  used by real businesses.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="#work"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity glow-sm"
                  >
                    View live products
                    <ChevronRight className="h-4 w-4" />
                  </a>
                  <a
                    href="https://wa.me/923047343632"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-5 py-2.5 text-sm font-medium text-foreground hover:bg-white/10 transition-colors"
                  >
                    <MessageCircle className="h-4 w-4 text-green-400" />
                    WhatsApp me
                  </a>
                </div>

                <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    23+ shipped products
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    AI + full SaaS stack
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    Live on Vercel
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500 opacity-40 blur-sm" />
                  <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-indigo-500/20 w-[260px] sm:w-[300px] aspect-[3/4]">
                    <Image
                      src="/profile.jpg"
                      alt="Muhammad Mubashir — AI Engineer"
                      fill
                      className="object-cover object-top"
                      priority
                      sizes="300px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-semibold text-lg">
                        Muhammad Mubashir
                      </p>
                      <p className="text-white/80 text-sm">
                        AI Engineer · SaaS Builder
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 sm:px-6 pb-16">
          <div className="mx-auto max-w-6xl">
            <div className="gradient-border overflow-hidden">
              <div className="relative p-6 sm:p-10 lg:p-12">
                <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-500/15 blur-3xl rounded-full -translate-y-1/3 translate-x-1/4" />
                <div className="relative flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 text-xs font-medium text-indigo-300 mb-4">
                      <Sparkles className="h-3.5 w-3.5" />
                      Flagship product
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                      {featured.title}
                    </h2>
                    <p className="mt-2 text-lg text-indigo-200/90">
                      {featured.tagline}
                    </p>
                    <p className="mt-4 text-muted leading-relaxed max-w-xl">
                      {featured.description} Automates front-desk conversations
                      so businesses never miss a booking or inquiry — fully
                      available 24/7.
                    </p>
                    <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-muted">
                      {[
                        "24/7 AI receptionist",
                        "Appointment booking",
                        "Answers customer questions",
                        "Never miss an inquiry",
                        "Multi-tenant SaaS",
                        "Always-on availability",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <a
                        href={featured.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-zinc-200 transition-colors"
                      >
                        Open BookAI live
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                      <span className="inline-flex items-center rounded-full border border-border px-4 py-2.5 text-xs text-muted">
                        bookaiapp.vercel.app
                      </span>
                    </div>
                  </div>
                  <div className="lg:w-[340px] shrink-0">
                    <div className="rounded-2xl border border-border bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent p-8 flex flex-col items-center justify-center min-h-[220px] animate-float">
                      <div className="flex items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30 p-5">
                        <Bot className="h-10 w-10 text-white" />
                      </div>
                      <p className="mt-5 text-sm font-medium text-center text-zinc-200">
                        AI Receptionist & Booking
                      </p>
                      <p className="mt-1 text-xs text-muted text-center">
                        24/7 · Appointments · Answers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 sm:px-6 py-12 border-y border-border/60">
          <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {highlights.map((h) => {
              const Icon = h.icon;
              return (
                <div
                  key={h.title}
                  className="rounded-2xl border border-border bg-card/80 p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 mb-3">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-sm">{h.title}</h3>
                  <p className="mt-1.5 text-xs text-muted leading-relaxed">
                    {h.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section id="work" className="px-5 sm:px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
              <div>
                <p className="text-sm font-medium text-accent-light mb-2">
                  Live products
                </p>
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                  Every product is live
                </h2>
                <p className="mt-3 text-muted max-w-lg">
                  Click any card to open the real app. Prioritized by impact —
                  AI and core SaaS first.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {(
                [
                  { id: "all", label: "All" },
                  { id: "ai", label: "AI" },
                  { id: "saas", label: "SaaS" },
                  { id: "tools", label: "Tools" },
                ] as const
              ).map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                    filter === f.id
                      ? "bg-white text-black font-medium"
                      : "bg-white/5 text-muted hover:text-foreground border border-border"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((project) => {
                const Icon = project.icon;
                return (
                  <a
                    key={project.id}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative rounded-2xl border border-border bg-card hover:bg-card-hover p-5 transition-all duration-300 hover:border-zinc-600 hover:shadow-lg hover:shadow-indigo-500/5 flex flex-col"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${project.color} shadow-md shrink-0`}
                      >
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted group-hover:text-foreground transition-colors shrink-0 mt-1" />
                    </div>
                    <h3 className="mt-4 text-base font-semibold tracking-tight group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted line-clamp-1">
                      {project.tagline}
                    </p>
                    <p className="mt-2 text-xs text-zinc-500 leading-relaxed line-clamp-2 flex-1">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] uppercase tracking-wide text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-3 pt-3 border-t border-border/80 text-[11px] text-zinc-500 truncate group-hover:text-indigo-300 transition-colors">
                      {project.url.replace(/^https?:\/\//, "")}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="about"
          className="px-5 sm:px-6 py-16 sm:py-24 border-t border-border"
        >
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <p className="text-sm font-medium text-accent-light mb-2">
                  About
                </p>
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                  Muhammad Mubashir
                </h2>
                <p className="mt-2 text-lg text-indigo-300/90">
                  AI Engineer & SaaS Builder
                </p>
                <div className="mt-6 space-y-4 text-muted leading-relaxed">
                  <p>
                    I build AI products and full business SaaS that people
                    actually open every day — not demos, not MVPs that die in a
                    week.
                  </p>
                  <p>
                    Flagship work includes{" "}
                    <strong className="text-foreground">BookAI</strong> (AI
                    receptionist & appointment booking), plus CRM, POS,
                    InvoiceFlow, KhataPK, HR, rentals, and a full suite of
                    professional generators used by freelancers and companies.
                  </p>
                  <p>
                    If you need a custom AI tool, a SaaS product, or want to use
                    one of the live apps — I ship fast and care about the
                    details that make users stay.
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

        <section
          id="contact"
          className="px-5 sm:px-6 py-16 sm:py-24 border-t border-border"
        >
          <div className="mx-auto max-w-6xl">
            <div className="rounded-3xl border border-border bg-card overflow-hidden">
              <div className="relative p-8 sm:p-12 lg:p-16">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10" />
                <div className="relative max-w-2xl">
                  <p className="text-sm font-medium text-accent-light mb-2">
                    Contact
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                    Hire me or use a product
                  </h2>
                  <p className="mt-4 text-muted leading-relaxed">
                    Custom AI tools, SaaS builds, or licensing an existing
                    product — message me and we&apos;ll talk.
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
                        <p className="text-sm font-medium">
                          WhatsApp — preferred
                        </p>
                        <p className="text-sm text-muted">
                          +92 304 734 3632 · Fastest way to discuss a project or
                          product
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

      <footer className="border-t border-border px-5 sm:px-6 py-10">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-sm text-muted">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 text-xs font-bold text-white">
              M
            </span>
            <span>
              © {new Date().getFullYear()} Muhammad Mubashir · AI Engineer
            </span>
          </div>
          <p className="text-xs text-muted">
            23+ live products · Built with Next.js · Vercel
          </p>
        </div>
      </footer>
    </div>
  );
}
