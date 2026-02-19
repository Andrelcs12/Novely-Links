"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Instagram, Phone,  Check, Pizza, LucideShare2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const LaParmaLinks = () => {
  const [copied, setCopied] = useState(false);

  const links = [
    {
      title: "Peça pelo Nosso Site",
      url: "https://pedido.anota.ai/loja/la-parma-pizzaria?f=ms",
      icon: <Pizza className="w-5 h-5" />,
      highlight: true,
      description: "Melhor preço e descontos exclusivos.",
      isImage: false
    },
    {
      title: "Peça pelo iFood",
      url: "https://www.ifood.com.br/delivery/aracaju-se/la-parma---pizzas-farolandia/",
      icon: (
        <div className="relative w-10 h-10">
          <Image src="/laparma/ifood.png" alt="iFood" fill className="object-contain" />
        </div>
      ),
      highlight: false,
      description: "A praticidade que você já conhece.",
      isImage: true // Marcador para remover o fundo
    },
    {
      title: "Nosso Instagram",
      url: "https://www.instagram.com/laparmapizza/",
      icon: <Instagram className="w-5 h-5" />,
      highlight: false,
      description: "Siga para ver as pizzas do dia!",
      isImage: false
    },
  ];

  const handleShare = async () => {
    const shareData = {
      title: 'La Parma Pizzaria',
      text: 'Confira nosso cardápio e peça sua pizza!',
      url: typeof window !== 'undefined' ? window.location.href : '',
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) { console.error(err); }
  };

  const [copy, setCopy] = useState<boolean>(false);
  

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-4 overflow-x-hidden font-sans">
      <div className="fixed inset-0 z-0">
        <Image src="/laparma/background.png" alt="Background" fill priority className="object-cover" quality={100} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-20  w-full max-w-md bg-white/10 backdrop-blur-md rounded-[2.5rem] p-8 shadow-2xl border border-white/20 flex flex-col items-center"
      >
        <div className="absolute top-6 right-6">
          <button 
  onClick={() => {
    handleShare(); // Chama a função de compartilhar/copiar
    // Se quiser forçar o estado para falso manualmente por algum motivo:
    // setCopied(false); 
  }} 
  className="p-3 hover:scale-110 bg-white/20 backdrop-blur-md cursor-pointer hover:bg-white/30 rounded-full text-white border border-white/30 transition-all active:scale-90"
>
  <AnimatePresence mode="wait">
    {copied ? (
      <motion.div
        key="c"
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        exit={{ scale: 0 }}
      >
        <Check className="w-5 h-5 text-green-400" />
      </motion.div>
    ) : (
      <motion.div
        key="s"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      >
        <LucideShare2 className="w-5 h-5" />
      </motion.div>
    )}
  </AnimatePresence>
</button>
        </div>

        {/* Logo Section com Glow e Animação Suave */}
<motion.div 
  initial={{ y: -30, opacity: 0 }} 
  animate={{ y: 0, opacity: 1 }} 
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="mb-6 relative"
>
  {/* Efeito de brilho (glow) atrás da logo para dar profundidade */}
  <div className="absolute inset-0 bg-red-600/30 blur-3xl rounded-full" />
  
  <div className="relative w-32 h-32 bg-white rounded-full flex items-center justify-center border-[6px] border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)] overflow-hidden p-1">
    <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
      <Image 
        src="/laparma/logo.png" 
        alt="Logo La Parma" 
        fill 
        priority 
        className="object-contain " // p-2 dá o respiro necessário para a marca
      />
    </div>
  </div>
</motion.div>

{/* Tipografia Refinada */}
<div className="text-center mb-10">
  <motion.h1 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
    className="text-white text-4xl font-black tracking-tighter leading-none mb-2 drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]"
  >
    LA PARMA
  </motion.h1>
  
  <motion.div 
    initial={{ width: 0, opacity: 0 }}
    animate={{ width: "100%", opacity: 1 }}
    transition={{ delay: 0.5, duration: 0.8 }}
    className="flex items-center justify-center gap-3"
  >
    <span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-red-500" />
    <p className="text-red-500 text-xs font-bold uppercase tracking-[0.4em] whitespace-nowrap">
      Artesanal
    </p>
    <span className="h-[1px] w-8 bg-gradient-to-l from-transparent to-red-500" />
  </motion.div>
</div>

        {/* Lista de Links */}
<div className="w-full space-y-4">
  {links.map((link, idx) => (
    <motion.a
      key={idx}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02, x: 5 }}
      whileTap={{ scale: 0.98 }}
      className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${
        link.highlight ? "bg-red-600 border-red-400 text-white shadow-lg" : "bg-white/5 border-white/10 text-white"
      }`}
    >
      <div className={`p-2 rounded-lg flex items-center justify-center ${
        link.highlight ? "bg-white/20" : link.isImage ? "bg-transparent" : "bg-red-600/20 text-red-500"
      }`}>
        {link.icon}
      </div>
      
      <div className="flex flex-col text-left">
        <span className="font-bold text-base leading-tight">{link.title}</span>
        <span className={`text-xs font-semibold ${link.highlight ? "text-white/80" : "text-gray-300"}`}>{link.description}</span>
      </div>
    </motion.a>
  ))}
</div>

<div className="w-full flex flex-col gap-4 mt-10">
          <motion.a
            href="https://wa.me/5579998685077?text=Olá,%20gostaria%20de%20realizar%20um%20pedido%20com%20a%20La%20Parma."
            target="_blank"
            whileHover={{ y: -4}}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-3 p-5 rounded-2xl bg-[#25D366] text-white font-black text-lg shadow-xl uppercase tracking-tight"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.675 1.439 5.662 1.439h.05c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            WhatsApp
          </motion.a>

          <motion.a
            href="tel:79998685077"
            whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.15)" }}
            className="w-full flex items-center justify-center gap-3 p-4 rounded-2xl border border-white/20 text-white font-bold text-sm uppercase tracking-widest transition-all"
          >
            <Phone className="w-4 h-4" />
            Ligar para a Pizzaria
          </motion.a>


        </div>


        {/* Divisor Sutil */}
<div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mt-8" />


<div className="flex flex-col items-center text-center mt-6 group">
  {/* Linha decorativa sutil que cresce no hover */}
  <motion.div 
    initial={{ width: "20px" }}
    whileInView={{ width: "40px" }}
   
  />

  <div className="space-y-2">
    <p className="text-[10px] font-black uppercase tracking-[0.6em] text-white/20 leading-none">
      Desenvolvido por
    </p>
    
    <p className="text-sm font-black uppercase tracking-[0.2em] text-white">
      Novely <span className="text-blue-500">Company</span>
    </p>

    <div className="flex items-center justify-center gap-3 pt-2">
      <span className="h-[1px] w-2 bg-white/10" />
      <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">
        © 2026 • Aracaju, SE
      </p>
      <span className="h-[1px] w-2 bg-white/10" />
    </div>
  </div>
</div>




      </motion.div>

      
    </div>
  );
};

export default LaParmaLinks;