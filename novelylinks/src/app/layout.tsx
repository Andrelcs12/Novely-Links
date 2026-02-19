import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  // Título focado em autoridade e serviço
  title: "Novely Company | Marketing & Gestão Comercial",
  description: "Estratégias personalizadas de marketing e escala comercial. Conecte-se com nossas unidades de negócio e transforme sua visão em resultados.",
  
  // Keywords para motores de busca
  keywords: ["Marketing Digital", "Gestão Comercial", "Aracaju", "Holding", "Novely Company", "Consultoria de Negócios"],
  
  // Logo no navegador
  icons: {
    icon: "/logo.png",
    apple: "/logo.png", // Ícone para quando salvarem o site no iPhone
  },

  // Como o link aparece no WhatsApp, Instagram e LinkedIn
  openGraph: {
    title: "Novely Company | Group Ecosystem",
    description: "Marketing de alta performance e Gestão Comercial estratégica.",
    url: "https://novely.com.br", // Substitua pelo seu domínio real
    siteName: "Novely Company",
    images: [
      {
        url: "/og-image.png", // Recomendo criar uma imagem 1200x630px para o link ficar bonito
        width: 1200,
        height: 630,
        alt: "Novely Company - Marketing & Gestão",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  // Configuração para o Twitter/X
  twitter: {
    card: "summary_large_image",
    title: "Novely Company | Marketing & Gestão",
    description: "Escalando negócios através de marketing e gestão comercial de alta performance.",
    images: ["/logo.png"],
  },

  // Robôs de busca
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505] text-white`}>
        {children}
      </body>
    </html>
  );
}