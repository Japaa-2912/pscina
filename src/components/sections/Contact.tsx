import { useState } from "react";
import type { FormEvent } from "react";
import { site } from "../../config/site";
import { services } from "../../data/services";
import { waLink } from "../../lib/whatsapp";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import {
  ClockIcon,
  InstagramIcon,
  WhatsAppIcon,
} from "../ui/icons";

const inputClasses =
  "w-full rounded-xl border border-deep/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/70 focus:border-water-deep focus:outline-none focus:ring-2 focus:ring-water-deep/20";

export function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const lines = [
      "Olá! Vim pelo site da Med's Piscinas e gostaria de solicitar um orçamento.",
      "",
      `Nome: ${name}`,
      `Telefone: ${phone}`,
      service ? `Serviço desejado: ${service}` : "",
      city ? `Cidade/região: ${city}` : "",
      message ? `Mensagem: ${message}` : "",
    ].filter(Boolean);
    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  const infoCards = [
    {
      icon: WhatsAppIcon,
      label: "WhatsApp",
      value: site.whatsappDisplay,
      href: waLink("Olá! Vim pelo site da Med's Piscinas e gostaria de solicitar um orçamento."),
      external: true,
    },
    {
      icon: InstagramIcon,
      label: "Instagram",
      value: site.instagramHandle,
      href: site.instagramUrl,
      external: true,
    },
    {
      icon: ClockIcon,
      label: "Horário de atendimento",
      value: site.openingHours || "Em breve",
      href: "",
      external: false,
    },
  ];

  return (
    <section id="contato" className="bg-cream py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Contato"
          title="Peça seu orçamento"
          description="Conte o que sua piscina precisa e fale diretamente com a Med's Piscinas."
        />

        <div className="mt-12 grid gap-10 sm:mt-14 lg:grid-cols-5 lg:gap-14">
          {/* Formulário */}
          <Reveal className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-deep/5 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="nome" className="mb-1.5 block text-sm font-semibold text-deep">
                    Nome *
                  </label>
                  <input
                    id="nome"
                    type="text"
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Seu nome"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="telefone" className="mb-1.5 block text-sm font-semibold text-deep">
                    Telefone *
                  </label>
                  <input
                    id="telefone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="(00) 00000-0000"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="servico" className="mb-1.5 block text-sm font-semibold text-deep">
                    Serviço desejado
                  </label>
                  <select
                    id="servico"
                    value={service}
                    onChange={(event) => setService(event.target.value)}
                    className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20fill%3D%22none%22%20stroke%3D%22%231e7e93%22%20stroke-width%3D%222%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22/%3E%3C/svg%3E')] bg-[position:right_1rem_center] bg-no-repeat pr-10`}
                  >
                    <option value="">Selecione um serviço</option>
                    {services.map((item) => (
                      <option key={item.id} value={item.title}>
                        {item.title}
                      </option>
                    ))}
                    <option value="Outro">Outro</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="cidade" className="mb-1.5 block text-sm font-semibold text-deep">
                    Cidade/região
                  </label>
                  <input
                    id="cidade"
                    type="text"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                    placeholder="Sua cidade ou região"
                    className={inputClasses}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="mensagem" className="mb-1.5 block text-sm font-semibold text-deep">
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
                    required
                    rows={4}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Conte o que sua piscina precisa"
                    className={`${inputClasses} resize-y`}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-wa px-8 py-4 text-base font-semibold text-white shadow-sm transition-colors hover:bg-wa-dark sm:w-auto"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Enviar solicitação
              </button>
              <p className="mt-3 text-xs leading-relaxed text-muted">
                Ao enviar, sua solicitação é encaminhada diretamente para o
                WhatsApp da Med&apos;s Piscinas.
              </p>
            </form>
          </Reveal>

          {/* Canais de contato */}
          <Reveal delay={120} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              {infoCards.map((card) => {
                const Icon = card.icon;
                const content = (
                  <div className="flex items-center gap-4 rounded-2xl border border-deep/5 bg-white p-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sand-light text-deep">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">
                        {card.label}
                      </p>
                      <p className="mt-0.5 font-semibold text-deep">{card.value}</p>
                    </div>
                  </div>
                );
                return card.href ? (
                  <a
                    key={card.label}
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={card.label}>{content}</div>
                );
              })}

              <div className="mt-auto rounded-2xl bg-deep p-6 text-white">
                <p className="font-display text-lg font-semibold">
                  Resposta rápida pelo WhatsApp
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  O atendimento é direto com a Med&apos;s Piscinas — sem
                  robôs, sem espera. Conte o que você precisa e receba a melhor
                  solução para a sua piscina.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}