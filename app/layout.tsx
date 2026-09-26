import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Atelier Baignoire AI Architecture Blueprint',
  description: 'Comprehensive 5-page enterprise AI system design, multi-agent architecture, and RAG knowledge engine for luxury handmade bathtubs.',
  openGraph: {
    title: 'Atelier Baignoire AI Architecture Blueprint',
    description: 'Comprehensive 5-page enterprise AI system design, multi-agent architecture, and RAG knowledge engine for luxury handmade bathtubs.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atelier Baignoire AI Architecture Blueprint',
    description: 'Comprehensive 5-page enterprise AI system design, multi-agent architecture, and RAG knowledge engine for luxury handmade bathtubs.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
