import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Send, CheckCircle2 } from "lucide-react";
import logoAsset from "@/assets/logo.png.asset.json";

export const Route = createFileRoute("/orcamento")({
  head: () => ({
    meta: [
      { title: "Pedir Orçamento — Eventualidades" },
      {
        name: "description",
        content:
          "Peça um orçamento para produção de eventos, aluguer de equipamentos, gestão de bares ou agenciamento artístico. Resposta em 48 horas.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Pedir Orçamento — Eventualidades" },
      {
        property: "og:description",
        content: "Diga-nos o que precisa. Voltamos com um orçamento em 48 horas.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OrcamentoPage,
});

const servicesList = [
  { id: "producao", label: "Produção de Eventos", desc: "Festivais, concertos, corporate, galas." },
  { id: "equipamentos", label: "Aluguer de Equipamentos", desc: "Som, luz, vídeo LED, palcos, estruturas." },
  { id: "bares", label: "Gestão de Bares", desc: "Operação completa, RH, stock, POS." },
  { id: "agenciamento", label: "Agenciamento Artístico", desc: "Booking, management, contratação." },
  { id: "tecnica", label: "Produção Técnica", desc: "Riders, hospitalidade, stage management." },
  { id: "municipio", label: "Festas Municipais", desc: "Festas populares, cerimónias, celebrações." },
  { id: "corporate", label: "Evento Corporativo", desc: "Congressos, lançamentos, team building." },
  { id: "outro", label: "Outro / Não sei ainda", desc: "Fale connosco e ajudamos a definir." },
];

function OrcamentoPage() {
  const [selected, setSelected] = useState<string[]>([]);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    location: "",
    attendees: "",
    message: "",
  });

  function toggle(id: string) {
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const chosen = selected
      .map((id) => servicesList.find((s) => s.id === id)?.label)
      .filter(Boolean)
      .join(", ");
    const subject = `Pedido de orçamento — ${chosen || "Novo pedido"}`;
    const body = [
      `Nome: ${form.name}`,
      `Email: ${form.email}`,
      `Telefone: ${form.phone}`,
      `Data do evento: ${form.eventDate}`,
      `Local: ${form.location}`,
      `Nº participantes: ${form.attendees}`,
      `Serviços pretendidos: ${chosen}`,
      "",
      "Descrição:",
      form.message,
    ].join("\n");
    window.location.href = `mailto:catarinavieira@eventualidades.pt?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="container-x flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="Eventualidades"
              width={40}
              height={40}
              className="h-9 w-9 md:h-10 md:w-10 object-contain invert"
            />
            <span className="font-display font-black tracking-widest text-sm md:text-base hidden sm:inline">
              EVENTUALIDADES
            </span>
          </Link>
          <Link to="/" className="text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Voltar
          </Link>
        </div>
      </header>

      <main className="container-x py-16 md:py-24 max-w-5xl">
        <div className="eyebrow mb-6">Pedir Orçamento</div>
        <h1 className="heading-lg mb-6">
          Diga-nos o que precisa.<br />
          <span className="text-primary">Voltamos em 48 horas.</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mb-12">
          Escolha os serviços que pretende e preencha os dados do seu evento. A nossa equipa responde com um orçamento personalizado.
        </p>

        {sent ? (
          <div className="border border-primary/40 bg-primary/5 p-8 md:p-12 text-center">
            <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="font-display font-black text-2xl md:text-3xl mb-3">Pedido pronto a enviar</h2>
            <p className="text-muted-foreground mb-6">
              Abrimos o seu cliente de email com o pedido preenchido. Se não abriu, envie diretamente para{" "}
              <a href="mailto:catarinavieira@eventualidades.pt" className="text-primary underline">
                catarinavieira@eventualidades.pt
              </a>
              .
            </p>
            <Link to="/" className="btn-ghost inline-flex">
              Voltar ao início
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-12">
            <section>
              <div className="eyebrow mb-4 text-primary">01 · Que serviços precisa?</div>
              <p className="text-sm text-muted-foreground mb-6">Selecione um ou vários.</p>
              <div className="grid sm:grid-cols-2 gap-px bg-border border border-border">
                {servicesList.map((s) => {
                  const active = selected.includes(s.id);
                  return (
                    <button
                      type="button"
                      key={s.id}
                      onClick={() => toggle(s.id)}
                      aria-pressed={active}
                      className={`text-left p-5 md:p-6 transition-colors ${
                        active ? "bg-primary/10 border-l-2 border-l-primary" : "bg-background hover:bg-surface"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`h-5 w-5 border shrink-0 mt-0.5 flex items-center justify-center ${
                            active ? "bg-primary border-primary" : "border-muted-foreground/50"
                          }`}
                        >
                          {active && <CheckCircle2 className="h-4 w-4 text-background" />}
                        </div>
                        <div>
                          <div className="font-display font-bold text-base mb-1">{s.label}</div>
                          <div className="text-xs text-muted-foreground">{s.desc}</div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>

            <section>
              <div className="eyebrow mb-6 text-primary">02 · Dados do evento</div>
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  label="Nome*"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  required
                />
                <FormField
                  label="Email*"
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  required
                />
                <FormField
                  label="Telefone"
                  type="tel"
                  value={form.phone}
                  onChange={(v) => setForm({ ...form, phone: v })}
                />
                <FormField
                  label="Data do evento"
                  type="date"
                  value={form.eventDate}
                  onChange={(v) => setForm({ ...form, eventDate: v })}
                />
                <FormField
                  label="Local"
                  value={form.location}
                  onChange={(v) => setForm({ ...form, location: v })}
                  placeholder="Cidade / recinto"
                />
                <FormField
                  label="Nº aproximado de participantes"
                  value={form.attendees}
                  onChange={(v) => setForm({ ...form, attendees: v })}
                  placeholder="ex: 2000"
                />
              </div>
              <div className="mt-6">
                <label className="block text-xs eyebrow mb-2">Descreva o seu evento</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={6}
                  maxLength={2000}
                  className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary"
                  placeholder="Conte-nos sobre o evento, cronograma, requisitos técnicos, artistas, etc."
                />
              </div>
            </section>

            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-border">
              <button
                type="submit"
                disabled={selected.length === 0 || !form.name || !form.email}
                className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Enviar pedido <Send className="h-4 w-4" />
              </button>
              <p className="text-xs text-muted-foreground">
                Ao enviar concorda com o contacto pela equipa Eventualidades.
              </p>
            </div>
          </form>
        )}
      </main>
    </div>
  );
}

function FormField({
  label,
  value,
  onChange,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs eyebrow mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        maxLength={200}
        className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary"
      />
    </div>
  );
}
