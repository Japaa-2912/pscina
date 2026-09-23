import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { MobileBottomBar } from "./MobileBottomBar";
import { PageTransition } from "./PageTransition";
import { ScrollToTop } from "./ScrollToTop";
import { Topbar } from "./Topbar";
import { WhatsAppFloat } from "./WhatsAppFloat";

/** Layout base de todas as páginas: topbar/header fixos + conteúdo da rota. */
export function RootLayout() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-lg focus:bg-deep focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-cream"
      >
        Pular para o conteúdo
      </a>

      <ScrollToTop />

      <div className="sticky top-0 z-50">
        <Topbar />
        <Header />
      </div>

      <main id="conteudo">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>

      <Footer />
      <WhatsAppFloat />
      <MobileBottomBar />
    </>
  );
}
