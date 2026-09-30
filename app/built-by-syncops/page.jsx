import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  Globe,
  Mail,
  MapPin,
  Phone,
  Shield,
  Sparkles,
  Cloud,
  Bot,
  Code2,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: {
    absolute: "Built by SyncOps | AI Software Partner Behind JPZ Manpower",
  },
  description:
    "JPZ Manpower’s website was engineered by SyncOps — an AI-powered software company led by Founder & CEO Majid Ali. Explore SyncOps (syncops.tech) and Majid Ali (majidali.tech).",
  alternates: {
    canonical: "/built-by-syncops",
  },
  openGraph: {
    title: "Built by SyncOps | JPZ Manpower Website Engineering Partner",
    description:
      "Meet SyncOps and Founder & CEO Majid Ali — the AI-first engineering team behind the JPZ Manpower digital experience.",
    url: "/built-by-syncops",
    type: "article",
    images: [
      {
        url: "/pic/majid-ali-ceo.png",
        width: 1024,
        height: 1024,
        alt: "Majid Ali, Founder & CEO of SyncOps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Built by SyncOps | JPZ Manpower",
    description:
      "JPZ Manpower is built by SyncOps — AI-powered software solutions led by Majid Ali.",
    images: ["/pic/majid-ali-ceo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const capabilities = [
  {
    icon: Bot,
    title: "AI Agents & Automation",
    text: "Intelligent workflows that cut manual work and surface real-time operational insight.",
  },
  {
    icon: Code2,
    title: "Custom Software & SaaS",
    text: "Production-ready platforms from MVP to enterprise scale with modern full-stack stacks.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    text: "Secure AWS, Azure, and GCP deployments with CI/CD, monitoring, and 99.5%+ uptime targets.",
  },
  {
    icon: Shield,
    title: "Secure by Design",
    text: "Enterprise-minded engineering with compliance-ready practices for regulated industries.",
  },
];

const trustSignals = [
  { label: "Projects delivered", value: "50+" },
  { label: "Client rating", value: "9.9/10" },
  { label: "Integrations", value: "25+" },
  { label: "Uptime focus", value: "99.5%" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://jpzmanpower.com/built-by-syncops#webpage",
      name: "Built by SyncOps | JPZ Manpower",
      description:
        "Credit and partnership page for SyncOps, the AI software company that engineered the JPZ Manpower website.",
      url: "https://jpzmanpower.com/built-by-syncops",
      isPartOf: { "@id": "https://jpzmanpower.com/#website" },
      about: { "@id": "https://syncops.tech/#organization" },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://jpzmanpower.com/pic/majid-ali-ceo.png",
        caption: "Majid Ali, Founder & CEO of SyncOps",
      },
      inLanguage: "en",
    },
    {
      "@type": "Organization",
      "@id": "https://syncops.tech/#organization",
      name: "SyncOps",
      alternateName: ["SyncOps Technologies", "Sync Ops"],
      url: "https://syncops.tech",
      email: "info@syncops.tech",
      telephone: "+92-301-8678-319",
      foundingDate: "2025",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Mumtaz Market",
        addressLocality: "Gujranwala",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
      sameAs: [
        "https://www.linkedin.com/company/syncops",
        "https://www.facebook.com/syncopstech",
        "https://www.instagram.com/syncops_tech",
        "https://www.youtube.com/@syncops-tech",
        "https://www.crunchbase.com/organization/syncops",
        "https://www.goodfirms.co/company/syncops",
      ],
      founder: { "@id": "https://majidali.tech/#person" },
      description:
        "AI-powered software solutions company delivering enterprise software, AI automation, advanced AI agents, and cloud platforms built for scale.",
    },
    {
      "@type": "Person",
      "@id": "https://majidali.tech/#person",
      name: "Majid Ali",
      url: "https://majidali.tech",
      image: "https://jpzmanpower.com/pic/majid-ali-ceo.png",
      jobTitle: "Founder & Chief Executive Officer",
      worksFor: { "@id": "https://syncops.tech/#organization" },
      sameAs: [
        "https://majidali.tech",
        "https://www.linkedin.com/in/majidali-syncops",
        "https://github.com/majidali36",
      ],
      description:
        "Founder & CEO of SyncOps with 10+ years of experience building scalable full-stack, AI, and cloud products for global clients.",
    },
    {
      "@type": "CreativeWork",
      "@id": "https://jpzmanpower.com/#website-work",
      name: "JPZ Manpower Website",
      url: "https://jpzmanpower.com",
      creator: { "@id": "https://syncops.tech/#organization" },
      author: { "@id": "https://majidali.tech/#person" },
      creditText: "Built by SyncOps",
      copyrightHolder: {
        "@type": "Organization",
        name: "JPZ Manpower",
        url: "https://jpzmanpower.com",
      },
    },
  ],
};

export default function BuiltBySyncOpsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-white">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, #167af0 0%, transparent 40%), radial-gradient(circle at 80% 0%, #1326B2 0%, transparent 45%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
          <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-blue-200 mb-4">
            <Sparkles className="w-4 h-4" />
            Website credit & partnership
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl mb-5">
            Built by{" "}
            <a
              href="https://syncops.tech"
              target="_blank"
              rel="noopener"
              className="underline decoration-blue-300 underline-offset-4 hover:text-blue-200 transition-colors"
            >
              SyncOps
            </a>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mb-8">
            JPZ Manpower’s digital experience was engineered by{" "}
            <a
              href="https://syncops.tech"
              target="_blank"
              rel="noopener"
              className="font-semibold text-white underline underline-offset-4"
            >
              SyncOps
            </a>
            — an AI-first software company delivering secure, scalable products
            for global teams. Led by Founder & CEO{" "}
            <a
              href="https://majidali.tech"
              target="_blank"
              rel="noopener"
              className="font-semibold text-white underline underline-offset-4"
            >
              Majid Ali
            </a>
            .
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://syncops.tech"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-primary font-semibold hover:bg-blue-50 transition-colors"
            >
              Visit SyncOps.tech
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="https://majidali.tech"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/40 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Visit MajidAli.tech
              <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondarydark text-white font-semibold"
            >
              Contact JPZ
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CEO + company */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-[320px_1fr] gap-10 items-start">
          <article className="bg-white rounded-2xl shadow-lg p-6 text-center border border-blue-100">
            <div className="relative mx-auto w-56 h-56 mb-5">
              <Image
                src="/pic/majid-ali-ceo.png"
                alt="Professional headshot of Majid Ali, Founder and CEO of SyncOps"
                fill
                priority
                sizes="224px"
                className="object-cover rounded-full ring-4 ring-blue-100"
              />
            </div>
            <h2 className="text-2xl font-bold text-primary">Majid Ali</h2>
            <p className="text-secondary font-medium mt-1">
              Founder & Chief Executive Officer
            </p>
            <p className="text-sm text-gray-600 mt-3">
              10+ years building scalable full-stack, AI, and cloud products for
              startups and enterprises worldwide.
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <a
                href="https://majidali.tech"
                target="_blank"
                rel="noopener"
                className="flex items-center justify-center gap-2 text-blue-700 hover:underline"
              >
                <Globe className="w-4 h-4" />
                majidali.tech
              </a>
              <a
                href="https://syncops.tech"
                target="_blank"
                rel="noopener"
                className="flex items-center justify-center gap-2 text-blue-700 hover:underline"
              >
                <Globe className="w-4 h-4" />
                syncops.tech
              </a>
              <a
                href="mailto:ceo@syncops.tech"
                className="flex items-center justify-center gap-2 text-gray-700 hover:underline"
              >
                <Mail className="w-4 h-4" />
                ceo@syncops.tech
              </a>
            </div>
          </article>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">
                About{" "}
                <a
                  href="https://syncops.tech"
                  target="_blank"
                  rel="noopener"
                  className="underline decoration-blue-300 underline-offset-4"
                >
                  SyncOps
                </a>
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                <a
                  href="https://syncops.tech"
                  target="_blank"
                  rel="noopener"
                  className="font-semibold text-secondary hover:underline"
                >
                  SyncOps
                </a>{" "}
                is a global engineering powerhouse delivering enterprise
                software, AI-powered automation, advanced AI agents, and cloud
                platforms built for scale. From Gujranwala, Pakistan, the team
                partners with startups, enterprises, and founders to turn bold
                ideas into resilient digital products.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Their mission is to empower businesses with cutting-edge
                AI-powered software that drives growth, efficiency, and
                competitive advantage — with a track record spanning 50+
                launches and strong client satisfaction.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Learn more on the official site at{" "}
                <a
                  href="https://syncops.tech"
                  target="_blank"
                  rel="noopener"
                  className="font-semibold text-secondary hover:underline"
                >
                  https://syncops.tech
                </a>{" "}
                or connect with CEO{" "}
                <a
                  href="https://majidali.tech"
                  target="_blank"
                  rel="noopener"
                  className="font-semibold text-secondary hover:underline"
                >
                  Majid Ali at majidali.tech
                </a>
                .
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {trustSignals.map((item) => (
                <div
                  key={item.label}
                  className="bg-white border border-blue-100 rounded-xl p-4 text-center shadow-sm"
                >
                  <p className="text-2xl font-bold text-primary">{item.value}</p>
                  <p className="text-xs text-gray-600 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-white border-y border-blue-100">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-primary mb-3">
            What SyncOps builds
          </h2>
          <p className="text-gray-600 max-w-2xl mb-10">
            The same engineering DNA behind JPZ Manpower powers product
            launches across HR, healthcare, real estate, and operational
            intelligence.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex gap-4 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-600">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Backlink / CTA block */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="rounded-2xl bg-primary text-white p-8 md:p-12 overflow-hidden relative">
          <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full bg-secondarylight/30 blur-2xl" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Need an AI-powered product partner?
              </h2>
              <p className="text-blue-100 mb-6">
                Talk to the team at{" "}
                <a
                  href="https://syncops.tech"
                  target="_blank"
                  rel="noopener"
                  className="text-white font-semibold underline underline-offset-4"
                >
                  SyncOps
                </a>{" "}
                for custom software, AI agents, SaaS platforms, and cloud
                engineering — or reach JPZ for manpower and overseas employment
                services.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://syncops.tech"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-primary font-semibold"
                >
                  Explore SyncOps
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="https://majidali.tech"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/40 font-semibold"
                >
                  Meet Majid Ali
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="space-y-4 text-sm text-blue-100">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 shrink-0" />
                <a
                  href="mailto:info@syncops.tech"
                  className="hover:text-white hover:underline"
                >
                  info@syncops.tech
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 shrink-0" />
                <a
                  href="tel:+923018678319"
                  className="hover:text-white hover:underline"
                >
                  +92-301-8678-319
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                <span>Mumtaz Market, Gujranwala, Pakistan</span>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 mt-0.5 shrink-0" />
                <div className="space-x-3">
                  <a
                    href="https://syncops.tech"
                    target="_blank"
                    rel="noopener"
                    className="hover:text-white underline underline-offset-2"
                  >
                    syncops.tech
                  </a>
                  <a
                    href="https://majidali.tech"
                    target="_blank"
                    rel="noopener"
                    className="hover:text-white underline underline-offset-2"
                  >
                    majidali.tech
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          This page is the official website credit for JPZ Manpower. Primary
          engineering partner:{" "}
          <a
            href="https://syncops.tech"
            target="_blank"
            rel="noopener"
            className="text-secondary font-medium hover:underline"
          >
            SyncOps (syncops.tech)
          </a>
          . Leadership profile:{" "}
          <a
            href="https://majidali.tech"
            target="_blank"
            rel="noopener"
            className="text-secondary font-medium hover:underline"
          >
            Majid Ali (majidali.tech)
          </a>
          .
        </p>
      </section>
    </div>
  );
}
