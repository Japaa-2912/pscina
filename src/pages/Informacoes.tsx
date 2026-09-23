import { InformacoesContent } from "../components/InformacoesContent";
import { Button } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { PageHeader } from "../components/ui/PageHeader";
import { Reveal } from "../components/ui/Reveal";
import { WhatsAppIcon } from "../components/ui/icons";
import { waServiceLink } from "../lib/whatsapp";
import { usePageMeta } from "../lib/usePageMeta";

export function Informacoes() {
  usePageMeta({
    title: "Informações | Med's Piscinas",
    description:
      "Horário de atendimento, área de atendimento (Zona Sul e Zona Oeste de São Paulo) e dúvidas frequentes sobre os serviços da Med's Piscinas.",
  });

  return (
    <>
      <PageHeader
        eyebrow="Ajuda"
        title="Informações"
        description="Horário, área de atendimento e respostas para as dúvidas mais comuns."
      />

      <section className="bg-white py-20 sm:py-28 lg:py-32">
        <Container>
          <Reveal className="mx-auto max-w-3xl">
            <InformacoesContent />
          </Reveal>

          <Reveal className="mx-auto mt-10 max-w-3xl">
            <Button
              href={waServiceLink("geral")}
              variant="whatsapp"
              className="w-full py-4 text-base sm:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Falar no WhatsApp
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
