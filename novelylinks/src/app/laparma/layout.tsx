import type { Metadata } from "next";

// Remova as importações de fontes e globals.css daqui, 
// pois elas já devem estar no layout principal (na raiz da pasta app)

export const metadata: Metadata = {
  title: "Pizzaria La Parma | A Melhor Pizza Artesanal de Aracaju",
  description: "Saboreie a verdadeira pizza artesanal em Aracaju. Peça pelo site, iFood ou WhatsApp.",
  keywords: [
    "pizzaria em aracaju", "melhor pizza de aracaju", "pizza artesanal aracaju",
    "delivery de pizza aracaju", "pizzaria la parma"
  ],
  twitter: {
    card: "summary_large_image",
    title: "Pizzaria La Parma | Artesanal e Saborosa",
    description: "Peça sua pizza artesanal em Aracaju. Descontos exclusivos no site!",
    images: ["/minilogo.png"],
  },
  icons: {
    icon: "/minilogo.png",
    apple: "/minilogo.png",
  },
  openGraph: {
    title: "Pizzaria La Parma - Peça Agora a Melhor Pizza de Aracaju",
    description: "Pizza artesanal com ingredientes selecionados. Clique e faça seu pedido!",
    url: "https://laparma-aracaju.com.br/laparma", 
    siteName: "La Parma Pizzaria",
    images: [{ url: "/minilogo.png", width: 1200, height: 630 }],
    locale: "pt_BR",
    type: "website",
  },
};

export default function LaParmaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Em layouts aninhados, você NÃO usa as tags <html> ou <body>.
  // Você apenas retorna um fragmento ou uma div, pois o Next.js 
  // já injetou o <html> e <body> do layout da raiz.
  return <>{children}</>;
}