import type { Metadata } from "next";

// Este layout é específico para a rota da Academia de Tênis.
// Ele herda o <html> e <body> do layout raiz da pasta /app.

export const metadata: Metadata = {
  title: "Elite Tennis Academy | A Melhor Academia de Tênis de Aracaju",
  description: "Treinamento de alta performance, aulas para iniciantes e estrutura internacional na Orla de Atalaia, Aracaju. Domine as quadras hoje!",
  keywords: [
    "academia de tênis aracaju", "aula de tênis aracaju", "tennis academy sergipe",
    "quadra de tênis orla atalaia", "elite tennis", "esporte de alto rendimento aracaju"
  ],
  authors: [{ name: "Novely Company" }],
  
  // Configuração para Redes Sociais (WhatsApp, Instagram, LinkedIn)
  openGraph: {
    title: "Elite Tennis Academy - Domine as Quadras em Aracaju",
    description: "Metodologia Pro, infraestrutura VIP e aulas exclusivas na Orla de Atalaia. Agende sua aula experimental gratuita!",
    url: "https://seusite.com.br/elite-tennis", // Substitua pela sua URL real
    siteName: "Elite Tennis Academy",
    images: [
      {
        url: "/og-image.png", // Recomendo criar uma imagem de 1200x630px para o link brilhar
        width: 1200,
        height: 630,
        alt: "Elite Tennis Academy Aracaju",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  // Configuração para Twitter/X
  twitter: {
    card: "summary_large_image",
    title: "Elite Tennis Academy | Performance & Tecnologia",
    description: "Aulas de tênis com padrão internacional em Aracaju. Conheça nossa metodologia.",
    images: ["/og-image.png"],
  },

  // Favicons e Ícones
  icons: {
    icon: "/favicon.ico", // Certifique-se de ter esses arquivos na pasta /public
    apple: "/apple-touch-icon.png",
  },
};

export default function EliteTennisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Como este é um layout de rota (aninhado), apenas retornamos o conteúdo.
  // O Next.js se encarrega de injetar isso dentro do layout principal.
  return (
    <div className="antialiased scroll-smooth">
      {children}
    </div>
  );
}