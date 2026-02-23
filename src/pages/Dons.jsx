import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../assets/styles/dons.css";

export default function Dons() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    // petit délai pour laisser le layout se rendre (navbar fixed, etc.)
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    // offset pour navbar fixed
    const y = el.getBoundingClientRect().top + window.scrollY - 110;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, [hash]);

  return (
    <div className="don-page">

      {/* ===== SECTION MAISON BLEUE ===== */}
      <section className="don-section" id="donmaison">
        <h2 className="don-title">LA MAISON BLEUE</h2>

        <div className="mb-missionGrid">

          {/* Faire un don */}
          <article className="houseCard">
            <svg
              className="houseBorder"
              viewBox="0 0 300 260"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M150 10 L290 90 V250 H10 V90 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            <div className="houseContent">
              <h3>FAIRE UN DON</h3>

              <p>Soutenez directement La Maison Bleue.</p>

              <a
                className="don-link"
                href="https://example.com"
                target="_blank"
                rel="noreferrer"
              >
                → Faire un don
              </a>

              <p className="don-bottom">
                Chaque contribution fait une réelle différence.
              </p>
            </div>
          </article>

          {/* Don d’article */}
          <article className="houseCard">
            <svg
              className="houseBorder"
              viewBox="0 0 300 260"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M150 10 L290 90 V250 H10 V90 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            <div className="houseContent">
              <h3>DON D’ARTICLE</h3>

              <p>
                Vous pouvez soutenir La Maison Bleue en offrant des articles
                utiles.
              </p>

              <a
                className="don-link"
                href="https://example.com"
                target="_blank"
                rel="noreferrer"
              >
                → Voir les articles acceptés
              </a>

              <p className="don-bottom">
                Merci pour votre générosité.
              </p>
            </div>
          </article>

        </div>
      </section>

      {/* ===== SECTION GAÏA 2026 ===== */}
      <section className="don-section" id="dongaia">
        <h2 className="don-title">GAÏA 2026</h2>

        <div className="don-center">
          <p>
            <strong>Faites partie de GAÏA 2026 !</strong><br />
            Votre soutien à GAÏA 2026 nous aide à réaliser notre mission et à
            offrir un impact concret à La Maison Bleue.
          </p>

          <p>
            Vous avez un·e participant·e à encourager ?<br />
            Mentionnez son nom pour le soutenir dans son initiative GAÏA !
          </p>

          <a
            className="don-link big"
            href="https://example.com"
            target="_blank"
            rel="noreferrer"
          >
            → Faire un don
          </a>
        </div>
      </section>

    </div>
  );
}