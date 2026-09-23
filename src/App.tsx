import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./components/layout/RootLayout";
import { AntesEDepois } from "./pages/AntesEDepois";
import { Contato } from "./pages/Contato";
import { Galeria } from "./pages/Galeria";
import { Home } from "./pages/Home";
import { Informacoes } from "./pages/Informacoes";
import { NotFound } from "./pages/NotFound";
import { QuemSomos } from "./pages/QuemSomos";
import { Servicos } from "./pages/Servicos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "quem-somos", element: <QuemSomos /> },
      { path: "servicos", element: <Servicos /> },
      { path: "antes-e-depois", element: <AntesEDepois /> },
      { path: "galeria", element: <Galeria /> },
      { path: "informacoes", element: <Informacoes /> },
      { path: "contato", element: <Contato /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
