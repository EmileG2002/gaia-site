import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

// Pages principales
import Home from "../pages/Home";
import About from "../pages/About";
import MaisonBleue from "../pages/MaisonBleue";
import Partenaires from "../pages/Partenaires";
import Event from "../pages/Event";
import Dons from "../pages/Dons";

// Pages secondaires
import PagePlaceholder from "../pages/PagePlaceholder";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/a-propos", element: <About /> },
      { path: "/maison-bleue", element: <MaisonBleue /> },
      { path: "/partenaires", element: <Partenaires /> },
      { path: "/evenement", element: <Event /> },
      { path: "/dons", element: <Dons /> },

      // Sous-pages GAÏA (placeholders pour l’instant)
      { path: "/gaia/mission", element: <PagePlaceholder title="Mission GAÏA" /> },
      { path: "/gaia/equipe", element: <PagePlaceholder title="Notre équipe" /> },
      { path: "/gaia/contact", element: <PagePlaceholder title="Nous joindre" /> },

      // Partenaires
      { path: "/boutiques", element: <PagePlaceholder title="Boutiques" /> },
      { path: "/partenaires/devenir", element: <PagePlaceholder title="Devenir partenaire" /> },

      // Événement
      { path: "/evenement/gaia-2026", element: <PagePlaceholder title="GAÏA 2026" /> },
      { path: "/evenement/billetterie", element: <PagePlaceholder title="Billetterie" /> },
      { path: "/evenement/programmation", element: <PagePlaceholder title="Programmation" /> },
      { path: "/evenement/tombola", element: <PagePlaceholder title="Tombola" /> },
    ],
  },
]);