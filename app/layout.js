
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Topbar from "./components/Topbar";

export const metadata = {
  metadataBase: new URL("https://jpzmanpower.com"),
  title: {
    default: "JPZ Manpower | Overseas Recruitment & Visa Processing",
    template: "%s | JPZ Manpower",
  },
  description:
    "JPZ Manpower connects Pakistani talent with international careers. Overseas employment, visa processing, and recruitment services from Gujranwala, Pakistan.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: "JPZ Manpower",
    type: "website",
    locale: "en_US",
    url: "https://jpzmanpower.com",
    title: "JPZ Manpower | Overseas Recruitment & Visa Processing",
    description:
      "JPZ Manpower connects Pakistani talent with international careers. Overseas employment, visa processing, and recruitment services.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://jpzmanpower.com/#website",
      url: "https://jpzmanpower.com",
      name: "JPZ Manpower",
      description:
        "Overseas recruitment, manpower supply, and visa processing services.",
      publisher: { "@id": "https://jpzmanpower.com/#organization" },
      inLanguage: "en",
    },
    {
      "@type": "Organization",
      "@id": "https://jpzmanpower.com/#organization",
      name: "JPZ Manpower",
      url: "https://jpzmanpower.com",
      logo: "https://jpzmanpower.com/pic/JPZManpowerlogo.jpg",
      email: "Jpzmanpower@gmail.com",
      telephone: ["+92-55-3844098", "+92-321-7443131"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Office No 99, Jinnah Stadium, Civil Lines",
        addressLocality: "Gujranwala",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
      sameAs: [
        "https://facebook.com/jpzinternationaltravels",
        "https://twitter.com/jpztravels",
        "https://instagram.com/jpz.travels",
      ],
      creator: {
        "@type": "Organization",
        name: "SyncOps",
        url: "https://syncops.tech",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        <Topbar />
        <Header />
        <main className="flex-grow w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
