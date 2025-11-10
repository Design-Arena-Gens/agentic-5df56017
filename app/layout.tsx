import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahmed Elfar | Digital Marketing Specialist",
  description:
    "Portfolio of Ahmed Elfar, a versatile digital marketing specialist blending data-driven strategy with creative content to grow brands.",
  openGraph: {
    title: "Ahmed Elfar | Digital Marketing Specialist",
    description:
      "Portfolio of Ahmed Elfar, a versatile digital marketing specialist blending data-driven strategy with creative content to grow brands.",
    url: "https://agentic-5df56017.vercel.app",
    siteName: "Ahmed Elfar Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Elfar | Digital Marketing Specialist",
    description:
      "Portfolio of Ahmed Elfar, a versatile digital marketing specialist blending data-driven strategy with creative content to grow brands.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          // Structured data for Ahmed Elfar (Person)
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Ahmed Elfar',
              jobTitle: 'Digital Marketing Specialist',
              url: 'https://agentic-5df56017.vercel.app',
              sameAs: [
                'https://www.linkedin.com/',
              ],
              worksFor: {
                '@type': 'Organization',
                name: 'Independent / Agency Collaborations',
              },
              knowsAbout: [
                'Digital Marketing',
                'Paid Advertising',
                'SEO',
                'Content Strategy',
                'Email Marketing',
                'Analytics',
              ],
            }),
          }}
        />
      </head>
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
