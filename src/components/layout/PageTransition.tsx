import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";

/** Aplica uma transição suave sempre que a rota muda. */
export function PageTransition({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();

  return (
    <div key={pathname} className="page-enter">
      {children}
    </div>
  );
}
