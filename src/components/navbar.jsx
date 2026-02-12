import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./navbar.css";

const nav = [
  {
    label: "À PROPOS",
    to: "/a-propos",
    children: [
        { label: "MISSION", to: "/a-propos#mission" },
        { label: "NOTRE ÉQUIPE", to: "/a-propos#equipe" },
        { label: "NOUS JOINDRE", to: "/a-propos#contact" },
    ],
  },
  {
    label: "LA MAISON BLEUE",
    to: "/maison-bleue",
    children: [
        { label: "MISSION", to: "/maison-bleue#mission" }, 
        { label: "SOINS & SERVICES", to: "/maison-bleue#soins" }, 
        { label: "S’IMPLIQUER", to: "/maison-bleue#simpliquer" },
    ],
  },
  {
    label: "PARTENAIRES & BOUTIQUES",
    to: "/partenaires",
    children: [
      { label: "PARTENAIRES", to: "/partenaires#or" },
      { label: "DEVENIR PARTENAIRE", to: "/partenaires#devenir-partenaire" },
      { label: "BOUTIQUES", to: "/partenaires#boutiques" },
    ],
  },
  {
    label: "DONS",
    to: "/dons",
    children: [
      { label: "LA MAISON BLEUE", to: "/dons" },
      { label: "GAÏA 2026", to: "/evenement/gaia-2026" },
    ],
  },
  {
    label: "L'ÉVÉNEMENT",
    to: "/evenement",
    children: [
      { label: "DÉFILÉ", to: "/evenement" },
      { label: "BILLETERIE", to: "/evenement/billetterie" },
      { label: "PROGRAMME", to: "/evenement/programmation" },
      { label: "TOMBOLA", to: "/evenement/tombola" },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState(null);
  const headerRef = useRef(null);

  // Fermer mobile si on agrandit
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 900) {
        setMobileOpen(false);
        setMobileExpandedIndex(null);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Fermer mobile menu si click à l’extérieur
  useEffect(() => {
    const onDown = (e) => {
      if (!mobileOpen) return;
      if (!headerRef.current) return;
      if (!headerRef.current.contains(e.target)) {
        setMobileOpen(false);
        setMobileExpandedIndex(null);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [mobileOpen]);

  return (
    <header className="navHeader" ref={headerRef}>
      <div className="navInner">
        <NavLink to="/" className="brand" aria-label="GAÏA - Accueil">
          GAÏA
        </NavLink>

        {/* Desktop */}
        <nav className="navDesktop" aria-label="Navigation principale">
          {nav.map((item) => (
            <div className="navItem" key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `pill ${isActive ? "pillActive" : ""}`
                }
              >
                {item.label}
              </NavLink>

              {/* Dropdown (hover) */}
              {item.children?.length ? (
                <div className="dropdown" role="menu" aria-label={item.label}>
                  <div className="dropdownInner">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        className="dropdownPill"
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="burger"
          type="button"
          aria-label="Ouvrir le menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="burgerLine" />
          <span className="burgerLine" />
          <span className="burgerLine" />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navMobile ${mobileOpen ? "navMobileOpen" : ""}`}>
        <nav className="navMobileInner" aria-label="Navigation mobile">
          {nav.map((item, idx) => {
            const expanded = mobileExpandedIndex === idx;

            return (
              <div key={item.to} className="mobileGroup">
                <div className="mobileTopRow">
                  <NavLink
                    to={item.to}
                    className="pill pillMobile"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </NavLink>

                  {item.children?.length ? (
                    <button
                      type="button"
                      className="mobileExpand"
                      aria-label={`Afficher le sous-menu ${item.label}`}
                      aria-expanded={expanded}
                      onClick={() =>
                        setMobileExpandedIndex(expanded ? null : idx)
                      }
                    >
                      {expanded ? "–" : "+"}
                    </button>
                  ) : null}
                </div>

                {item.children?.length ? (
                  <div className={`mobileSub ${expanded ? "open" : ""}`}>
                    {item.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        className="dropdownPill dropdownPillMobile"
                        onClick={() => {
                          setMobileOpen(false);
                          setMobileExpandedIndex(null);
                        }}
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
}