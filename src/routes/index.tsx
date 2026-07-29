import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Mic2,
  Tent,
  Beer,
  Music2,
  Wrench,
  Building2,
  Speaker,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Calendar,
  Users,
  Zap,
  Award,
  ChevronRight,
} from "lucide-react";

import heroFestival from "@/assets/hero-festival.jpg";
import stageEquipment from "@/assets/stage-equipment.jpg";
import bars from "@/assets/bars.jpg";
import artist from "@/assets/artist.jpg";
import production from "@/assets/production.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import logoAsset from "@/assets/logo.png.asset.json";
import mutantMelodyAsset from "@/assets/mutant-melody.png.asset.json";
import project6 from "@/assets/project-6.jpg";
import vbfAerial from "@/assets/vbf-aerial-palco.jpg.asset.json";
import vbfPalcoRoxo from "@/assets/vbf-palco-roxo.jpg.asset.json";
import vbfBeatriz from "@/assets/vbf-beatriz-rosario.jpg.asset.json";
import agenciamentoImg from "@/assets/agenciamento.jpg.asset.json";
import vbfDama from "@/assets/vbf-dama-verde.jpg.asset.json";
import vbfLuzes from "@/assets/vbf-luzes-rua.webp.asset.json";
import vbfMultidao from "@/assets/vbf-aerial-multidao.webp.asset.json";
import abfPalco from "@/assets/abf-palco.jpg.asset.json";
import abfBares from "@/assets/abf-bares.jpg.asset.json";
import abfCopo from "@/assets/abf-copo.jpg.asset.json";
import abfNoite from "@/assets/abf-noite.jpg.asset.json";
import abfConcerto from "@/assets/abf-concerto.jpg.asset.json";
import abfBanda from "@/assets/abf-banda.jpg.asset.json";
import vbf2025a from "@/assets/vbf-2025-a.jpg.asset.json";
import vbf2025b from "@/assets/vbf-2025-b.jpg.asset.json";
import chaves1 from "@/assets/chaves-1.jpg.asset.json";
import chaves2 from "@/assets/chaves-2.jpg.asset.json";
import chaves3 from "@/assets/chaves-3.jpg.asset.json";
import chaves4 from "@/assets/chaves-4.jpg.asset.json";

const vianaBateForte = [
  { src: vbfAerial.url, alt: "Vista aérea do palco Viana Bate Forte 2025" },
  { src: vbf2025a.url, alt: "Concerto ao vivo com iluminação cinematográfica no Viana Bate Forte 2025" },
  { src: vbfPalcoRoxo.url, alt: "Palco iluminado a roxo com banda ao vivo" },
  { src: vbf2025b.url, alt: "Atuação com iluminação âmbar no Viana Bate Forte 2025" },
  { src: vbfBeatriz.url, alt: "Concerto de Beatriz Rosário no Viana Bate Forte" },
  { src: vbfDama.url, alt: "Concerto ao vivo com iluminação verde" },
  { src: vbfLuzes.url, alt: "Iluminação da cidade durante o festival" },
  { src: vbfMultidao.url, alt: "Multidão vista de cima no Viana Bate Forte" },
];

const amadoraBeerFest = [
  { src: abfNoite.url, alt: "Vista noturna do recinto do Amadora Beer Fest 2026 com palco e bares" },
  { src: abfConcerto.url, alt: "Concerto no palco principal do Amadora Beer Fest 2026" },
  { src: abfPalco.url, alt: "Palco principal do Amadora Beer Fest 2026 à noite" },
  { src: abfBares.url, alt: "Zona de bares e food-court do Amadora Beer Fest 2026" },
  { src: abfBanda.url, alt: "Banda de sopros a animar o Amadora Beer Fest 2026" },
  { src: abfCopo.url, alt: "Copo reutilizável Amadora com cerveja a ser servida" },
];

const chavesFestas = [
  { src: chaves3.url, alt: "Vista aérea da multidão nas Festas da Cidade de Chaves 2026" },
  { src: chaves1.url, alt: "Palco à noite com público nas Festas de Chaves" },
  { src: chaves2.url, alt: "Montagem de palco e torre delay em Chaves" },
  { src: chaves4.url, alt: "Multidão em concerto noturno nas Festas de Chaves" },
];

const heroImageUrl = `https://id-preview--c27d3510-e21e-4bf5-a619-57914eae6833.lovable.app${heroFestival}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eventualidades — Produção de Eventos, Equipamentos e Gestão de Bares" },
      {
        name: "description",
        content:
          "Há mais de 20 anos a transformar ideias em festivais, concertos e grandes produções. Equipamentos, produção, gestão de bares e agenciamento artístico.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Eventualidades — Eventos que ficam na memória" },
      {
        property: "og:description",
        content:
          "Produção integral de eventos, aluguer de equipamentos, gestão de bares e representação artística. 20+ anos de experiência.",
      },
      { property: "og:image", content: heroImageUrl },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Eventualidades — Eventos que ficam na memória" },
      {
        name: "twitter:description",
        content:
          "Produção integral de eventos, aluguer de equipamentos, gestão de bares e representação artística.",
      },
      { name: "twitter:image", content: heroImageUrl },
    ],
  }),
  component: Home,
});

const needs = [
  { icon: "🎤", title: "Vou organizar um concerto", desc: "Do palco à sonorização, tratamos de tudo." },
  { icon: "🎪", title: "Vou produzir um festival", desc: "Produção integral chave-na-mão." },
  { icon: "🍺", title: "Preciso de gestão de bares", desc: "Operação completa, RH, stock e POS." },
  { icon: "🎭", title: "Procuro artistas para contratar", desc: "Booking nacional e internacional." },
  { icon: "🔊", title: "Só preciso de equipamentos", desc: "Som, luz, vídeo LED, estruturas." },
  { icon: "🏛️", title: "Represento um município", desc: "Festas populares, celebrações, cerimónias." },
  { icon: "🏢", title: "Estou a organizar um evento empresarial", desc: "Galas, congressos, lançamentos." },
];

const services = [
  {
    id: "producao",
    kicker: "01",
    title: "Produção de Eventos",
    lede: "Organizamos eventos chave-na-mão, do conceito à desmontagem.",
    image: vbfMultidao.url,
    items: ["Festivais", "Concertos", "Eventos Corporativos", "Feiras", "Congressos", "Galas", "Festas Municipais", "Eventos Privados"],
    icon: Tent,
  },
  {
    id: "equipamentos",
    kicker: "02",
    title: "Aluguer de Equipamentos",
    lede: "Disponibilizamos equipamento profissional para qualquer dimensão de evento.",
    image: vbfPalcoRoxo.url,
    items: ["Som", "Iluminação", "Vídeo LED", "Estruturas Truss", "Palcos", "Backline", "Torres de Delay", "Geradores", "Cablagem", "Distribuição elétrica", "Mesas e cadeiras", "Zona Kids LEGO", "Camarins", "WC's", "Efeitos e Pirotecnia"],
    icon: Speaker,
  },
  {
    id: "bares",
    kicker: "03",
    title: "Gestão de Bares",
    lede: "Gerimos bares em festivais e grandes eventos, assegurando toda a operação.",
    image: abfBares.url,
    items: ["Recursos Humanos", "Stock", "Logística", "POS", "Copos reutilizáveis", "Equipamentos", "Coordenação", "Licenciamento"],
    icon: Beer,
  },
  {
    id: "agenciamento",
    kicker: "04",
    title: "Agenciamento Artístico",
    lede: "Representamos artistas e ligamos promotores, municípios e agentes internacionais.",
    image: agenciamentoImg.url,
    items: ["Booking", "Management", "Contratação", "Produção técnica"],
    icon: Music2,
  },
];

const projects = [
  { name: "Viana Bate Forte", year: "2025", img: vbfAerial.url, tag: "Festival" },
  { name: "Amadora Beer Fest", year: "2026", img: null, tag: "Festival" },
  { name: "Festas da Cidade de Chaves", year: "2026", img: null, tag: "Município" },
];

const partners = [
  { name: "Mutant Melody", role: "Som" },
  { name: "Publivez", role: "Publicidade" },
  { name: "Segurvez", role: "Segurança" },
  { name: "F&R Som", role: "Som" },
  { name: "BrandPrint", role: "Impressão" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Needs />
      <Services />
      <Projects />
      <WhyUs />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="flex items-center gap-3">
          <img src={logoAsset.url} alt="Eventualidades" width={40} height={40} className="h-9 w-9 md:h-10 md:w-10 object-contain invert" />
          <span className="font-display font-black tracking-widest text-sm md:text-base hidden sm:inline">EVENTUALIDADES</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#servicos" className="hover:text-primary transition-colors">Serviços</a>
          <a href="#projetos" className="hover:text-primary transition-colors">Projetos</a>
          <a href="#sobre" className="hover:text-primary transition-colors">Empresa</a>
          <a href="#contactos" className="hover:text-primary transition-colors">Contactos</a>
        </nav>
        <Link to="/orcamento" className="hidden md:inline-flex btn-primary !py-2.5 !px-4 !text-xs">
          Pedir Orçamento <ArrowRight className="h-3.5 w-3.5" />
        </Link>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          <div className="space-y-1.5">
            <span className="block w-6 h-0.5 bg-foreground" />
            <span className="block w-6 h-0.5 bg-foreground" />
          </div>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-x py-4 flex flex-col gap-4 text-sm">
            <a href="#servicos" onClick={() => setOpen(false)}>Serviços</a>
            <a href="#projetos" onClick={() => setOpen(false)}>Projetos</a>
            <a href="#sobre" onClick={() => setOpen(false)}>Empresa</a>
            <a href="#contactos" onClick={() => setOpen(false)}>Contactos</a>
            <Link to="/orcamento" onClick={() => setOpen(false)} className="btn-primary w-full justify-center">
              Pedir Orçamento
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-end overflow-hidden pt-20">
      <img
        src={heroFestival}
        alt="Palco de festival ao vivo com iluminação laranja e multidão"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />

      <div className="relative container-x pb-16 md:pb-28 pt-32 w-full">
        <div className="max-w-4xl">
          <div className="eyebrow mb-6">Portugal</div>
          <h1 className="heading-xl">
            Produzimos eventos<br />
            que ficam na <span className="text-primary">memória</span>.
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm md:text-base text-muted-foreground font-medium">
            <span>Equipamentos</span>
            <span className="text-primary">/</span>
            <span>Produção</span>
            <span className="text-primary">/</span>
            <span>Gestão de Bares</span>
            <span className="text-primary">/</span>
            <span>Agenciamento Artístico</span>
          </div>

          <p className="mt-6 text-base md:text-lg max-w-2xl text-muted-foreground leading-relaxed">
            Há mais de 20 anos a transformar ideias em festivais, concertos, eventos corporativos e grandes produções.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/orcamento" className="btn-primary">
              Pedir Orçamento <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="#servicos" className="btn-ghost">Ver Serviços</a>
          </div>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-3 gap-6 md:gap-10 max-w-3xl border-t border-border/60 pt-8">
          {[
            { n: "20+", l: "Anos" },
            { n: "50+", l: "Eventos/ano" },
            { n: "100%", l: "Cobertura nacional" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display font-black text-3xl md:text-4xl text-primary">{s.n}</div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Festivais", "Concertos", "Eventos Corporativos", "Feiras", "Congressos", "Galas", "Festas Municipais", "Eventos Privados"];
  return (
    <div className="border-y border-border bg-surface overflow-hidden">
      <div className="flex gap-12 py-5 whitespace-nowrap animate-[marquee_40s_linear_infinite]">
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} className="font-display font-bold uppercase tracking-widest text-sm text-muted-foreground flex items-center gap-12">
            {it}
            <span className="text-primary">◆</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-33.33%); } }`}</style>
    </div>
  );
}

function About() {
  return (
    <section id="sobre" className="py-24 md:py-36">
      <div className="container-x grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-4">
          <div className="eyebrow mb-6">Quem Somos</div>
          <h2 className="heading-lg">
            Duas décadas<br />
            <span className="text-primary">a montar palco.</span>
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Uma empresa especializada na <span className="text-foreground font-medium">produção integral de eventos</span>, aluguer de equipamentos audiovisuais, gestão de bares e representação artística.
          </p>
          <p>
            Ao longo de mais de duas décadas participámos na produção de alguns dos maiores eventos nacionais, desenvolvendo soluções técnicas e logísticas adaptadas a cada projeto.
          </p>
          <div className="hair mt-10" />
          <div className="grid grid-cols-2 gap-6 pt-4">
            <Stat icon={Calendar} label="Anos de operação" value="20+" />
            <Stat icon={Users} label="Profissionais" value="120+" />
            <Stat icon={Award} label="Grandes festivais" value="80+" />
            <Stat icon={Zap} label="Equipamentos próprios" value="Sim" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon: Icon, label, value }: { icon: typeof Calendar; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="h-5 w-5 text-primary mt-1 shrink-0" />
      <div>
        <div className="font-display font-bold text-xl text-foreground">{value}</div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
      </div>
    </div>
  );
}

function Needs() {
  return (
    <section className="py-24 md:py-32 bg-surface border-y border-border">
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <div className="eyebrow mb-6">O que conseguimos fazer pelo seu evento</div>
          <h2 className="heading-lg">
            Diga-nos o que precisa.<br />
            <span className="text-primary">Nós tratamos do resto.</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {needs.map((n) => (
            <a
              key={n.title}
              href="#contactos"
              className="group bg-surface p-8 md:p-10 hover:bg-background transition-colors relative"
            >
              <div className="text-4xl mb-6">{n.icon}</div>
              <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                {n.title}
              </h3>
              <p className="text-sm text-muted-foreground">{n.desc}</p>
              <ChevronRight className="absolute top-8 right-8 h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="py-24 md:py-36">
      <div className="container-x">
        <div className="max-w-3xl mb-20">
          <div className="eyebrow mb-6">Serviços</div>
          <h2 className="heading-lg">
            Uma capacidade completa,<br />
            <span className="text-primary">um único interlocutor.</span>
          </h2>
        </div>

        <div className="space-y-24 md:space-y-32">
          {services.map((s, i) => {
            const Icon = s.icon;
            const reversed = i % 2 === 1;
            return (
              <article key={s.id} id={s.id} className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
                <div className={`md:col-span-7 ${reversed ? "md:order-2" : ""}`}>
                  <div className="relative overflow-hidden group aspect-[4/3] bg-surface">
                    <img
                      src={s.image}
                      alt={s.title}
                      width={1400}
                      height={1000}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 flex items-center gap-3">
                      <Icon className="h-5 w-5 text-primary" />
                      <span className="text-xs font-display font-bold tracking-widest uppercase text-foreground">
                        {s.title}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={`md:col-span-5 ${reversed ? "md:order-1" : ""}`}>
                  <div className="font-display font-black text-primary text-sm tracking-widest mb-4">
                    — {s.kicker}
                  </div>
                  <h3 className="heading-lg !text-3xl md:!text-4xl mb-6">{s.title}</h3>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{s.lede}</p>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-8">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-center gap-2 text-sm">
                        <span className="h-1 w-1 bg-primary" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}

          {/* Produção Técnica */}
          <article className="grid md:grid-cols-12 gap-8 items-start border-t border-border pt-16">
            <div className="md:col-span-5">
              <div className="font-display font-black text-primary text-sm tracking-widest mb-4">— 05</div>
              <h3 className="heading-lg !text-3xl md:!text-4xl mb-6 flex items-center gap-3">
                <Wrench className="h-8 w-8 text-primary" />
                Produção Técnica
              </h3>
              <p className="text-muted-foreground text-lg">Planeamento integral, do rider à coordenação em campo.</p>
            </div>
            <div className="md:col-span-7 md:pt-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border">
                {["Riders", "Hospitalidade", "Stage Management", "Produção Executiva", "Coordenação Técnica", "Health & Safety"].map((t) => (
                  <div key={t} className="bg-background p-6 hover:bg-surface transition-colors">
                    <div className="font-display font-bold text-sm">{t}</div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
        </div>



    </section>
  );
}

function Projects() {
  return (
    <section id="projetos" className="py-24 md:py-36 bg-surface border-y border-border">
      <div className="container-x">
        <div className="mb-16">
          <div className="eyebrow mb-6">Projetos</div>
          <h2 className="heading-lg">
            Últimos palcos onde<br />
            <span className="text-primary">deixámos marca.</span>
          </h2>
        </div>

        {/* Featured: Viana Bate Forte 2025 */}
        <div className="mb-20 border border-border p-6 md:p-10 bg-background">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <div className="eyebrow mb-3 text-primary">Em destaque · 2025</div>
              <h3 className="font-display font-black text-3xl md:text-5xl leading-none">
                Viana Bate Forte
              </h3>
              <p className="text-muted-foreground mt-3 max-w-xl text-sm md:text-base">
                Produção integral no coração de Viana do Castelo — palco, som, luz e estruturas.
              </p>
            </div>
            <div className="text-xs eyebrow">Festival · Município</div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {vianaBateForte.map((img, i) => (
              <div
                key={img.src}
                className={`relative overflow-hidden bg-surface aspect-[4/5] ${
                  i === 0 ? "col-span-2 md:col-span-2 md:row-span-2 md:aspect-auto" : ""
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>


        {/* Featured: Amadora Beer Fest 2026 */}
        <div className="mb-20 border border-border p-6 md:p-10 bg-background">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <div className="eyebrow mb-3 text-primary">Em destaque · 2026</div>
              <h3 className="font-display font-black text-3xl md:text-5xl leading-none">
                Amadora Beer Fest
              </h3>
              <p className="text-muted-foreground mt-3 max-w-xl text-sm md:text-base">
                Produção de palco, som, luz e operação de bares num dos maiores festivais de cerveja do país.
              </p>
            </div>
            <div className="text-xs eyebrow">Festival</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {amadoraBeerFest.map((img) => (
              <div key={img.src} className="relative overflow-hidden bg-surface aspect-[16/10]">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Featured: Festas da Cidade de Chaves 2026 */}
        <div className="border border-border p-6 md:p-10 bg-background">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <div className="eyebrow mb-3 text-primary">Em destaque · 2026</div>
              <h3 className="font-display font-black text-3xl md:text-5xl leading-none">
                Festas da Cidade de Chaves
              </h3>
              <p className="text-muted-foreground mt-3 max-w-xl text-sm md:text-base">
                Produção integral de palco, som, luz e estruturas para milhares de pessoas junto ao rio Tâmega.
              </p>
            </div>
            <div className="text-xs eyebrow">Município</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {chavesFestas.map((img, i) => (
              <div
                key={img.src}
                className={`relative overflow-hidden bg-surface ${i === 0 ? "md:col-span-2 aspect-[21/9]" : "aspect-[16/10]"}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const reasons = [
    { n: "01", t: "20+ anos de experiência", d: "Duas décadas a montar e desmontar palcos por Portugal e Europa." },
    { n: "02", t: "Equipa especializada", d: "Técnicos, produtores e gestores com pedigree em grandes festivais." },
    { n: "03", t: "Equipamentos próprios", d: "Parque técnico atualizado, som, luz, vídeo e estruturas." },
    { n: "04", t: "Cobertura nacional", d: "Do Algarve ao Minho, Açores e Madeira incluídos." },
    { n: "05", t: "Produção chave-na-mão", d: "Um único interlocutor. Um único orçamento. Zero surpresas." },
    { n: "06", t: "Resposta rápida", d: "Emergências, réplicas, alterações de última hora. Resolvemos." },
  ];
  return (
    <section className="py-24 md:py-36">
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <div className="eyebrow mb-6">Porque escolher-nos</div>
          <h2 className="heading-lg">
            O que faz de nós<br />
            <span className="text-primary">a escolha certa.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {reasons.map((r) => (
            <div key={r.n} className="bg-background p-8 md:p-10 relative">
              <div className="font-display font-black text-6xl text-primary/20 mb-4">{r.n}</div>
              <h3 className="font-display font-bold text-xl mb-3">{r.t}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className="py-20 md:py-24 border-y border-border bg-surface">
      <div className="container-x">
        <div className="text-center mb-12">
          <div className="eyebrow mb-4">Parceiros Técnicos</div>
          <h2 className="heading-lg !text-3xl md:!text-4xl">
            Ao lado dos <span className="text-primary">melhores.</span>
          </h2>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-col items-center gap-3">
            <img
              src={mutantMelodyAsset.url}
              alt="Mutant Melody"
              className="h-20 md:h-24 w-auto object-contain"
              loading="lazy"
            />
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Som · Sound Partner</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
          {partners.filter((p) => p.name !== "Mutant Melody").map((p) => (
            <div key={p.name} className="bg-background p-8 flex items-center justify-center text-center min-h-[120px]">
              <div className="font-display font-black text-lg md:text-xl tracking-wide">{p.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Contact() {
  const contacts = [
    {
      area: "Produção · Agenciamento",
      name: "Catarina Vieira",
      phone: "+351 933 818 311",
      phoneHref: "tel:+351933818311",
      email: "catarinavieira@eventualidades.pt",
    },
    {
      area: "Palcos · Som · Luz",
      name: "João Moreira",
      phone: "+351 913 536 646",
      phoneHref: "tel:+351913536646",
      email: "joaomoreira@eventualidades.pt",
    },
    {
      area: "Gestão de Bares",
      name: "João Paulo Viana",
      phone: "+351 926 361 445",
      phoneHref: "tel:+351926361445",
      email: "joaoviana@eventualidades.pt",
    },
  ];
  return (
    <section id="contactos" className="py-24 md:py-36">
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <div className="eyebrow mb-6">Contactos</div>
          <h2 className="heading-lg mb-8">
            Vamos montar<br />
            <span className="text-primary">o próximo palco?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Fale diretamente com a pessoa certa. Voltamos com um orçamento em 48 horas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border border border-border mb-16">
          {contacts.map((c) => (
            <div key={c.name} className="bg-background p-8 md:p-10 flex flex-col">
              <div className="eyebrow mb-4 text-primary">{c.area}</div>
              <div className="font-display font-black text-2xl md:text-3xl mb-6">{c.name}</div>
              <a href={c.phoneHref} className="flex items-center gap-3 mb-3 group">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm md:text-base group-hover:text-primary transition-colors">{c.phone}</span>
              </a>
              <a href={`mailto:${c.email}`} className="flex items-center gap-3 group">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm break-all group-hover:text-primary transition-colors">{c.email}</span>
              </a>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 border-t border-border pt-10">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 border border-border flex items-center justify-center shrink-0">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="eyebrow mb-1">Sede</div>
              <div className="font-display font-bold text-base">Paredes de Coura · Portugal</div>
              <div className="text-sm text-muted-foreground mt-1">Com atuação em todo o país.</div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 border border-border flex items-center justify-center shrink-0">
              <MessageCircle className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="eyebrow mb-1">Prefere WhatsApp?</div>
              <div className="text-sm text-muted-foreground">Envie mensagem para qualquer um dos números acima.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, value, href }: { icon: typeof Phone; label: string; value: string; href?: string }) {
  const content = (
    <>
      <div className="h-12 w-12 border border-border flex items-center justify-center shrink-0 group-hover:border-primary group-hover:text-primary transition-colors">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs eyebrow mb-1">{label}</div>
        <div className="font-display font-bold text-base group-hover:text-primary transition-colors">{value}</div>
      </div>
    </>
  );
  return href ? (
    <a href={href} className="flex items-center gap-4 group">{content}</a>
  ) : (
    <div className="flex items-center gap-4 group">{content}</div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs eyebrow mb-2">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="container-x py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3 mb-6">
            <img src={logoAsset.url} alt="Eventualidades" width={40} height={40} className="h-10 w-10 object-contain invert" />
            <span className="font-display font-black tracking-widest">EVENTUALIDADES</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            Produção integral de eventos. Há mais de 20 anos a montar palco em Portugal.
          </p>
        </div>
        <FooterCol title="Serviços" links={["Produção", "Equipamentos", "Gestão de Bares", "Agenciamento", "Produção Técnica"]} />
        <FooterCol title="Empresa" links={["Sobre", "Equipa", "Parceiros", "Carreiras"]} />
        <FooterCol title="Portfólio" links={["Festivais", "Concertos", "Corporate", "Municipal"]} />
        <FooterCol title="Contactos" links={["+351 933 818 311", "catarinavieira@eventualidades.pt", "Paredes de Coura · Portugal"]} />
      </div>
      <div className="border-t border-border">
        <div className="container-x py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Eventualidades. Todos os direitos reservados.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary">Instagram</a>
            <a href="#" className="hover:text-primary">LinkedIn</a>
            <a href="#" className="hover:text-primary">Facebook</a>
            <a href="#" className="hover:text-primary">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="md:col-span-2">
      <div className="eyebrow mb-4">{title}</div>
      <ul className="space-y-2 text-sm">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">{l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
