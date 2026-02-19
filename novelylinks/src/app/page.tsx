"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Instagram, Mail, MessageCircle, ArrowUpRight, BarChart3, Users, Headset } from 'lucide-react';
import Aurora from '@/components/Aurora';

const BUSINESS_UNITS = [
  {
    id: "la-parma",
    name: "La Parma Pizzaria",
    slug: "/laparma",
    logo: "/laparma/logo.png",
    description: "Gastronomia artesanal premium especializada em pizzas de longa fermentação.",
    tag: "Gastronomia",
  },
];

export default function NovelyHub() {
  // Configuração das mensagens de WhatsApp
  const waNumber = "5579981164174";
  const msgParceria = encodeURIComponent("Olá! Vi o hub da Novely e gostaria de falar sobre uma parceria ou me tornar cliente do grupo.");
  const msgSuporte = encodeURIComponent("Olá! Gostaria de tirar uma dúvida ou solicitar suporte em relação aos serviços da Novely.");

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center font-sans bg-[#0a0a0c] text-slate-200 selection:bg-red-500/30 overflow-x-hidden">
    
   {/* CONTAINER DA AURORA: Full Screen absoluto */}
<div className="fixed inset-0 w-screen h-screen z-0 pointer-events-none opacity-90">
  <div className="absolute inset-0 w-full h-full">
    <Aurora
      colorStops={["#00e1ff","#1873c9","#0233f7"]}
      amplitude={0.6}
      blend={0.8}
    />
  </div>
  
  {/* Overlay de Vinheta: Escurece as bordas e o fundo para o texto saltar */}
  <div className="absolute inset-0 bg-[#0a0a0c] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_100%)] opacity-80" />
  
  {/* Gradiente de saída para o conteúdo debaixo não ficar cortado */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0c]/50 to-[#0a0a0c]" />
</div>

    {/* CONTEÚDO PRINCIPAL: Acima da Aurora (z-20) */}
    <main className="relative z-20 w-full max-w-2xl px-6 py-16 flex flex-col items-center">
        
      {/* HERO SECTION */}
<header className="text-center flex flex-col items-center">
  {/* Badge de Localização Minimalista */}
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    className=" flex items-center gap-3 px-4 py-1 rounded-full border border-white/5 bg-white/[0.02]"
  >
    <span className="relative flex h-1.5 w-1.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-600"></span>
    </span>
    <span className="text-white/30 text-[8px] font-bold uppercase tracking-[0.5em]">
      Aracaju • Sergipe
    </span>
  </motion.div>
  
  {/* Logo Principal com Efeito de Profundidade */}
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    className="relative w-48 h-48 md:w-56 md:h-56 "
  >
    {/* Brilho sutil atrás da logo */}
    <div className="absolute inset-0 bg-red-600/5 blur-[80px] rounded-full" />
    
    <Image 
      src="/logo.png" 
      alt="Novely Company Logo" 
      fill 
      priority 
      className="object-contain brightness-110"
    />
  </motion.div>

{/* Nome da Holding e Descrição */}
<div className="space-y-4">
  <motion.h1 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
    className="text-blue-500 text-2xl font-semibold tracking-[0.9em] uppercase ml-[0.6em]"
  >
    Novely Links
  </motion.h1>
  
  <motion.div
    initial={{ width: 0 }}
    animate={{ width: "40px" }}
    className="h-0.5 bg-blue-600/50 mx-auto"
  />

  {/* CORREÇÃO AQUI: Mudamos motion.p para motion.div e removemos o <p> extra */}
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5 }}
    className="text-blue-500 text-[10px] font-black uppercase tracking-[0.4em] mt-2"
  >
    Marketing & Gestão Comercial
  </motion.div>
</div>
</header>

        {/* UNIDADES DE NEGÓCIO */}
        <section className="w-full space-y-4 my-6">
          <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-2 mb-4">
            Nossas Unidades
          </h2>
          
          {BUSINESS_UNITS.map((unit, idx) => (
            <motion.div
              key={unit.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link href={unit.slug}>
                <div className="group relative bg-[#121214]/60 backdrop-blur-md border border-white/5 p-6 rounded-3xl flex items-center gap-6 hover:border-blue-500/40 hover:bg-[#161619] transition-all duration-500 shadow-xl">
                  <div className="relative w-16 h-16 rounded-2xl ">
                    <Image src={unit.logo} alt={unit.name} fill className="object-contain rounded-md border-white border-2" />
                  </div>

                  <div className="flex-1">
                    <span className="text-[9px] font-bold text-blue-500 uppercase tracking-widest">{unit.tag}</span>
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                      {unit.name} 
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all text-blue-500" />
                    </h2>
                  </div>
                  <ChevronRight className="text-slate-600 group-hover:text-white transition-colors" />
                </div>
              </Link>
            </motion.div>
          ))}
        </section>

      {/* SEÇÃO: PERSONALIZAÇÃO / EXCLUSIVE PROJECTS */}
<motion.section 
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="w-full mb-12"
>
  <div className="relative overflow-hidden bg-[#0f0f12]/60 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 shadow-2xl">
    {/* Glow de fundo mais contido */}
    <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/10 blur-[80px] rounded-full" />
    
    <div className="relative z-10 flex flex-col items-center text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/5 border border-blue-500/20 mb-6">
        <span className="text-xs font-black text-blue-500 uppercase tracking-[0.4em]">projetos exclusivos</span>
      </div>

      <h2 className="text-3xl font-black text-white tracking-tighter mb-4 leading-[0.9]">
        SUA MARCA, <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 uppercase">
          SEM CÓPIAS.
        </span>
      </h2>

      <p className="text-slate-400 text-[10px] leading-relaxed max-w-[260px] mb-8 uppercase tracking-widest font-bold">
        Personalizamos cada etapa da sua gestão comercial e marketing. Estratégias únicas para quem busca liderar o mercado.
      </p>

      <a 
        href={`https://wa.me/${waNumber}?text=Olá!%20Quero%20uma%20estratégia%20personalizada%20para%20meu%20negócio.`}
        target="_blank"
        className="text-[10px] font-black text-white uppercase bg-blue-600 py-3 px-8 rounded-full tracking-[0.2em] shadow-lg shadow-blue-900/40 hover:bg-blue-500 transition-all active:scale-95"
      >
        Solicitar Estratégia
      </a>
    </div>
  </div>
</motion.section>


       {/* SEÇÃO DE CONTATOS / CTAs EM AZUL */}
<section className="w-full space-y-4">
  <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-2 mb-4">
    Canais de Atendimento
  </h2>

  {/* Botão: Virar Cliente / Parceria */}
  <motion.a 
    href={`https://wa.me/${waNumber}?text=${msgParceria}`}
    target="_blank"
    whileHover={{ x: 5 }}
    className="w-full flex items-center justify-between bg-gradient-to-r from-blue-600 to-blue-800 p-6 rounded-3xl shadow-lg shadow-blue-900/20 group transition-all"
  >
    <div className="flex items-center gap-4 text-white">
      <div className="bg-white/20 p-3 rounded-2xl">
        <Users size={24} />
      </div>
      <div className="text-left">
        <h3 className="font-black text-lg leading-none uppercase tracking-tight">Seja nosso parceiro</h3>
        <p className="text-white/70 text-[10px] uppercase font-bold mt-1">Expansão e Novos Negócios</p>
      </div>
    </div>
    <MessageCircle className="text-white/50 group-hover:text-white transition-colors" size={24} />
  </motion.a>

  {/* Botão: Suporte Geral */}
  <motion.a 
    href={`https://wa.me/${waNumber}?text=${msgSuporte}`}
    target="_blank"
    whileHover={{ x: 5 }}
    className="w-full flex items-center justify-between bg-[#121214] border border-blue-500/20 p-6 rounded-3xl hover:bg-[#1a1a1e] transition-all group"
  >
    <div className="flex items-center gap-4 text-white">
      <div className="bg-blue-600/10 p-3 rounded-2xl text-blue-500">
        <Headset size={24} />
      </div>
      <div className="text-left">
        <h3 className="font-bold text-lg leading-none">Suporte Novely</h3>
        <p className="text-slate-500 text-[10px] uppercase font-bold mt-1">Dúvidas e Atendimento Geral</p>
      </div>
    </div>
    <ChevronRight className="text-slate-700 group-hover:text-white transition-colors" size={24} />
  </motion.a>
</section>

        {/* FOOTER */}
        <footer className=" w-full flex flex-col items-center gap-8 pt-10 border-t border-white/5">
          <div className="flex gap-4">
            <a href="https://instagram.com/novelycompany" target="_blank" className="text-slate-500 hover:text-white transition-colors p-3 bg-white/5 rounded-2xl"><Instagram size={20} /></a>
            <a href="mailto:companynovely@gmail.com" className="text-slate-500 hover:text-white transition-colors p-3 bg-white/5 rounded-2xl"><Mail size={20} /></a>
          </div>
          
          <div className="text-center space-y-1">
            <p className="text-[9px] font-black uppercase tracking-[0.5em] text-white/20">Novely Company</p>
            <p className="text-[8px] text-slate-600 font-bold uppercase tracking-widest">© 2026 Aracaju, SE • Brasil</p>
          </div>
        </footer>

      </main>
    </div>
  );
}