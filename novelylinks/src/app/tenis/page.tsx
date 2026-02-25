"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, Users, CalendarCheck, Clock, MapPin, Instagram, 
  MessageCircle, ChevronRight, Star, Target, Zap, ShieldCheck, 
  Menu, X, ArrowRight, TrendingUp, Award, CheckCircle2, Phone
} from 'lucide-react';
import Beams from '../../components/Beams';

const TennisAcademy = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const waNumber = "5579998685077";
  const message = encodeURIComponent("Olá! Gostaria de agendar uma aula experimental.");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Variantes de animação para reutilizar
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#030d1a] text-white font-sans overflow-x-hidden">
      
      {/* Botão Flutuante WhatsApp (Conversão Rápida) */}
      <motion.a 
        initial={{ scale: 0 }} animate={{ scale: 1 }}
        href={`https://wa.me/${waNumber}`}
        className="fixed bottom-8 right-8 z-[60] bg-[#25D366] p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-all"
      >
        <MessageCircle size={32} fill="white" className="text-white" />
      </motion.a>

      {/* --- HEADER --- */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#030d1a]/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#d4ff00] rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(212,255,0,0.3)]">
              <Target className="text-black w-6 h-6" />
            </div>
            <span className="font-black tracking-tighter text-xl uppercase italic">Arena <span className="text-[#d4ff00]">Tênis</span></span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-xs font-black uppercase tracking-[0.2em]">
            <a href="#metodologia" className="hover:text-[#d4ff00] transition-colors">Metodologia</a>
            <a href="#planos" className="hover:text-[#d4ff00] transition-colors">Planos</a>
            <a href="#contato" className="hover:text-[#d4ff00] transition-colors">Unidade</a>
          </nav>

          <a href={`https://wa.me/${waNumber}`} className="bg-[#d4ff00] text-black px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all">
            Área do Aluno
          </a>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center opacity-70">
            <Beams beamWidth={2} beamHeight={17} beamNumber={6} lightColor="#00bd3f" speed={4.6} noiseIntensity={1.75} scale={0.3} rotation={0} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030d1a]/40 to-[#030d1a]" />
        </div>

        <motion.div initial="hidden" animate="visible" className="relative z-10 text-center px-6">
          <motion.span variants={fadeInUp} className="inline-block px-4 py-1 rounded-full border border-[#d4ff00]/20 bg-[#d4ff00]/5 text-[#d4ff00] text-[10px] font-bold uppercase tracking-[0.5em] mb-8">
            Academia N°1 em Sergipe
          </motion.span>
          <motion.h1 variants={fadeInUp} className="text-6xl md:text-9xl font-black italic tracking-tighter leading-[0.8] uppercase mb-8">
            SAIA DO BÁSICO. <br/> <span className="text-[#d4ff00] drop-shadow-[0_0_30px_rgba(212,255,0,0.3)]">SEJA ELITE.</span>
          </motion.h1>
          <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a href={`https://wa.me/${waNumber}`} className="bg-white text-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest flex items-center gap-3 hover:bg-[#d4ff00] transition-colors shadow-2xl">
              Agendar Aula Grátis <ArrowRight size={20} />
            </a>
          </motion.div>
        </motion.div>
      </section>

      <main className="relative z-20 max-w-7xl mx-auto px-6">
        
        {/* --- SEÇÃO METODOLOGIA (O QUE TE FAZ GANHAR DINHEIRO) --- */}
        <section id="metodologia" className="py-32 border-b border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="text-[#d4ff00] text-xs font-black uppercase tracking-[0.4em] mb-4">Nossa Metodologia</h2>
              <h3 className="text-4xl md:text-6xl font-black italic uppercase leading-tight mb-8">Treinamos você como um <span className="text-[#d4ff00] stroke-text">atleta Pro.</span></h3>
              
              <div className="space-y-8">
                {[
                  { icon: <TrendingUp className="text-[#d4ff00]" />, t: "Evolução Acelerada", d: "Sistema de ensino baseado em análise biomecânica e vídeo-análise." },
                  { icon: <Award className="text-[#d4ff00]" />, t: "Ranking Interno", d: "Torneios mensais para testar seu nível e ganhar prêmios." },
                  { icon: <CheckCircle2 className="text-[#d4ff00]" />, t: "Certificação", d: "Professores com selo CBT e referências internacionais." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-lg uppercase italic">{item.t}</h4>
                      <p className="text-blue-100/40 text-sm">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <div className="relative aspect-square rounded-[3rem] overflow-hidden group">
              <Image src="/tenis/image.png" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Treino" />
              <div className="absolute inset-0 bg-[#d4ff00]/10 group-hover:bg-transparent transition-all" />
            </div>
          </div>
        </section>

        {/* --- CARDS DE DIFERENCIAIS (REFINADOS) --- */}
<section className="py-24 grid grid-cols-1 md:grid-cols-3 gap-8">
  {[
    { icon: <Zap size={32} />, title: "Foco em Cardio", desc: "Queime até 800 calorias por aula com treinos intervalados de alta intensidade.", tag: "Performance" },
    { icon: <ShieldCheck size={32} />, title: "Conforto VIP", desc: "Vestiários Premium, toalhas higienizadas e lounge com café cortesia.", tag: "Exclusivo" },
    { icon: <Users size={32} />, title: "Networking", desc: "Conecte-se com uma comunidade seleta de empresários e líderes de Aracaju.", tag: "Social" }
  ].map((feature, i) => (
    <motion.div 
      key={i} 
      whileHover={{ y: -12, scale: 1.02 }}
      className="relative p-10 bg-gradient-to-b from-white/[0.07] to-transparent border border-white/10 rounded-[3rem] overflow-hidden group transition-all"
    >
      {/* Efeito de brilho no fundo ao passar o mouse */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#d4ff00]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-2xl" />
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-8">
          <div className="text-[#d4ff00] p-4 bg-[#d4ff00]/10 rounded-2xl group-hover:scale-110 group-hover:bg-[#d4ff00] group-hover:text-black transition-all duration-500">
            {feature.icon}
          </div>
          <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white/30 border border-white/10 px-3 py-1 rounded-full">
            {feature.tag}
          </span>
        </div>
        
        <h3 className="text-2xl font-black italic uppercase mb-4 tracking-tighter">
          {feature.title}
        </h3>
        
        <p className="text-blue-100/40 text-sm leading-relaxed font-medium">
          {feature.desc}
        </p>
      </div>
    </motion.div>
  ))}
</section>

        {/* --- SEÇÃO DE DEPOIMENTOS (ESTILO PREMIUM) --- */}
<section className="py-24 mb-32">
  <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
    <div className="max-w-xl">
      <h2 className="text-[#d4ff00] text-[10px] font-black uppercase tracking-[0.5em] mb-4">Membros Elite</h2>
      <p className="text-5xl font-black italic uppercase leading-none">Quem joga <br/> <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>aprova o nível.</span></p>
    </div>
    <div className="hidden md:block h-[1px] flex-1 bg-white/10 mx-10 mb-4" />
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      { name: "Dr. Roberto Silva", text: "A melhor estrutura de Sergipe. O piso das quadras segue o padrão dos grandes torneios.", cargo: "Empresário", init: "RS" },
      { name: "Mariana Costa", text: "Minha técnica evoluiu de forma impressionante. A metodologia Pro faz toda a diferença.", cargo: "Advogada", init: "MC" },
      { name: "Felipe Lima", text: "O networking no lounge pós-treino vale tanto quanto a aula. Ambiente de alto nível.", cargo: "Diretor Executivo", init: "FL" }
    ].map((d, i) => (
      <motion.div 
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1 }}
        className="relative p-8 bg-[#051121] border border-white/5 rounded-tr-[4rem] rounded-bl-[4rem] rounded-tl-xl rounded-br-xl hover:border-[#d4ff00]/30 transition-all group"
      >
        <div className="absolute top-0 right-0 mt-8 mr-8 opacity-5 group-hover:opacity-10 transition-opacity">
          <span className="text-8xl font-black italic">{d.init}</span>
        </div>

        <div className="flex text-[#d4ff00] gap-1 mb-6">
          {[1,2,3,4,5].map(s => <Star key={s} size={12} fill="#d4ff00" />)}
        </div>

        <p className="relative z-10 text-gray-300 text-sm leading-relaxed mb-8 font-medium">
          "{d.text}"
        </p>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#d4ff00] to-green-600 flex items-center justify-center text-black font-black text-xs">
            {d.init}
          </div>
          <div>
            <p className="font-black uppercase italic text-xs tracking-tight">{d.name}</p>
            <p className="text-[#d4ff00] text-[9px] uppercase font-bold tracking-widest opacity-80">{d.cargo}</p>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section>


       {/* --- PLANOS (REFINADOS) --- */}
<section id="planos" className="py-32 relative">
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4ff00]/20 to-transparent" />
  
  <div className="text-center mb-20">
    <motion.h2 
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
      className="text-[#d4ff00] text-[10px] font-black uppercase tracking-[0.5em] mb-4"
    >
      Tabela de Investimento
    </motion.h2>
    <p className="text-5xl font-black italic uppercase tracking-tighter">Escolha seu <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Level.</span></p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {[
      { 
        title: "Personal Pro", 
        price: "450", 
        tags: ["Foco Total"], 
        desc: "Treinamento individualizado para quem busca a perfeição técnica e resultados imediatos.",
        features: ["Análise de vídeo mensal", "Horários flexíveis", "Material incluso (Rquetes Pro)", "Plano de treino personalizado"]
      },
      { 
        title: "Elite Group", 
        price: "290", 
        tags: ["Mais Popular"], 
        desc: "Aulas dinâmicas em grupos reduzidos, unindo competição saudável e evolução constante.",
        features: ["Até 4 jogadores por quadra", "Networking ativo", "Torneio interno incluso", "Acesso ao lounge VIP"]
      },
    ].map((plano, i) => (
      <motion.div 
        key={i}
        whileHover={{ scale: 1.02 }}
        className="relative group p-12 bg-gradient-to-br from-[#0a192f] to-[#030d1a] border border-white/10 rounded-[4rem] flex flex-col justify-between overflow-hidden shadow-2xl"
      >
        {/* Efeito de Luz no Hover */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-[#d4ff00]/5 blur-[100px] group-hover:bg-[#d4ff00]/15 transition-all duration-700" />

        <div>
          <div className="flex justify-between items-start mb-10">
            <span className="bg-[#d4ff00] text-black px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-[0_0_15px_rgba(212,255,0,0.3)]">
              {plano.tags[0]}
            </span>
            <div className="text-right">
              <span className="text-4xl font-black italic text-white">R$ {plano.price}</span>
              <span className="text-white/30 text-xs block uppercase font-bold">/ Mês</span>
            </div>
          </div>

          <h4 className="text-4xl font-black uppercase italic mb-6 tracking-tighter">{plano.title}</h4>
          <p className="text-blue-100/40 text-sm mb-10 leading-relaxed font-medium">{plano.desc}</p>

          <ul className="space-y-4 mb-12">
            {plano.features.map((f, idx) => (
              <li key={idx} className="flex items-center gap-3 text-xs font-bold uppercase tracking-wide text-white/70">
                <CheckCircle2 size={16} className="text-[#d4ff00]" /> {f}
              </li>
            ))}
          </ul>
        </div>

        <a 
          href={`https://wa.me/${waNumber}?text=${encodeURIComponent(`Olá! Quero me inscrever no plano ${plano.title}`)}`}
          className="w-full py-6 rounded-2xl bg-white/5 border border-white/10 text-center font-black uppercase tracking-[0.2em] group-hover:bg-[#d4ff00] group-hover:text-black group-hover:border-[#d4ff00] transition-all duration-500"
        >
          Garantir Minha Vaga
        </a>
      </motion.div>
    ))}
  </div>
</section>



{/* --- FOOTER / CONTATO (REFINADO) --- */}
<footer id="contato" className="relative pt-32 pb-16 overflow-hidden">
  {/* Elemento Visual de Fundo */}
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[300px]  blur-[120px] rounded-[100%] pointer-events-none" />

  <div className="relative z-10 max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
      
      {/* Branding */}
      <div className="md:col-span-2">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-[#d4ff00] rounded-xl flex items-center justify-center shadow-lg">
            <Target className="text-black w-7 h-7" />
          </div>
          <span className="font-black tracking-tighter text-3xl uppercase italic">Elite<span className="text-[#d4ff00]">Tennis</span></span>
        </div>
        <p className="text-blue-100/30 max-w-sm mb-10 text-lg font-medium leading-relaxed">
          A única academia em Aracaju com treinamento e infraestrutura de alta performance.
        </p>
        <div className="flex gap-4">
          <a href="#" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-[#d4ff00] hover:text-black transition-all border border-white/10"><Instagram size={24} /></a>
          <a href="#" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all border border-white/10"><MessageCircle size={24} /></a>
        </div>
      </div>
      
      {/* Links de Localização */}
      <div className="space-y-8">
        <h5 className="font-black uppercase italic text-[#d4ff00] tracking-widest text-sm">Unidade Atalaia</h5>
        <div className="space-y-6">
          <div className="flex gap-4 items-start group">
            <MapPin className="text-[#d4ff00] shrink-0 group-hover:scale-110 transition-transform" />
            <p className="text-gray-400 text-xs font-black uppercase leading-tight tracking-wider">
              Av. Santos Dumont, <br/> Orla de Atalaia, Aracaju - SE
            </p>
          </div>
          <div className="flex gap-4 items-start group">
            <Phone className="text-[#d4ff00] shrink-0 group-hover:scale-110 transition-transform" />
            <p className="text-gray-400 text-sm font-bold tracking-tighter hover:text-white transition-colors cursor-pointer">
              (79) 99868-5077
            </p>
          </div>
        </div>
      </div>

      {/* Horários */}
      <div className="space-y-8">
        <h5 className="font-black uppercase italic text-[#d4ff00] tracking-widest text-sm">Horários</h5>
        <div className="space-y-4">
          <div className="flex justify-between border-b border-white/5 pb-2">
            <span className="text-[10px] font-black uppercase text-white/40">Seg - Sex</span>
            <span className="text-[10px] font-black uppercase text-white">06h - 22h</span>
          </div>
          <div className="flex justify-between border-b border-white/5 pb-2">
            <span className="text-[10px] font-black uppercase text-white/40">Sábado</span>
            <span className="text-[10px] font-black uppercase text-white">07h - 14h</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[10px] font-black uppercase text-white/40">Domingo</span>
            <span className="text-[10px] font-black uppercase text-[#d4ff00]">Fechado</span>
          </div>
        </div>
      </div>
    </div>
    
    {/* Bottom Bar */}
    <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
      <p className="text-[9px] font-black uppercase tracking-[0.8em] text-white/20 text-center md:text-left">
        Novely Company • Elite Tennis Academy 2026
      </p>
      <div className="flex gap-8 text-[8px] font-black uppercase tracking-[0.2em] text-white/40">
        <a href="#" className="hover:text-[#d4ff00] transition-colors">Termos de Uso</a>
        <a href="#" className="hover:text-[#d4ff00] transition-colors">Privacidade</a>
      </div>
    </div>
  </div>
</footer>



      </main>

      
    </div>
  );
};

export default TennisAcademy;