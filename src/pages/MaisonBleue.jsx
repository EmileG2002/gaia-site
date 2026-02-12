import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../assets/styles/maisonBleue.css";

export default function MaisonBleue() {
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
    <div className="mb-page">
      {/* HERO */}
      <section className="mb-hero">
        <h1 className="mb-heroTitle">L’OCCASION D’UNE VIE</h1>

        {/* Logo cliquable -> lien externe */}
        <a
          className="mb-logoLink"
          href="https://maisonbleue.info/simpliquer/"
          target="_blank"
          rel="noreferrer"
          aria-label="Aller sur le site de La Maison Bleue"
        >
          <img
            className="mb-logo"
            src="/images/maisonbleue-logo.png"
            alt="La Maison Bleue"
          />
        </a>
      </section>

      {/* SECTION 1 : MISSION */}
      <section id="mission" className="mb-section">
        <h2 className="mb-title">MISSION</h2>

        <div className="mb-missionGrid">
          <article className="houseCard">
                <svg className="houseBorder" viewBox="0 0 300 260" preserveAspectRatio="none" aria-hidden="true">
                    <path
                    d="M150 10 L290 90 V250 H10 V90 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    vectorEffect="non-scaling-stroke"
                    />
                </svg>
                <div className="houseContent">
                    <h3>QU’EST-CE QUE LA MAISON BLEUE ?</h3>
                    <p>
                    La mission de La Maison Bleue est de réduire les inégalités sociales
                    en intervenant auprès des femmes enceintes en situation de vulnérabilité
                    et leur famille.
                    </p>
                </div>
          </article>

          <article className="houseCard">
                <svg className="houseBorder" viewBox="0 0 300 260" preserveAspectRatio="none" aria-hidden="true">
                    <path
                    d="M150 10 L290 90 V250 H10 V90 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    vectorEffect="non-scaling-stroke"
                    />
                </svg>
                <div className="houseContent">
                    <h3>PÉRINATALITÉ SOCIALE</h3>
                    <p>
                    La Maison Bleue a choisi d’associer étroitement le suivi médical de la
                    grossesse et de la petite enfance à un accompagnement éducatif et
                    psychosocial global.
                    </p>
                </div>
          </article>

          <article className="houseCard">
                <svg className="houseBorder" viewBox="0 0 300 260" preserveAspectRatio="none" aria-hidden="true">
                    <path
                    d="M150 10 L290 90 V250 H10 V90 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    vectorEffect="non-scaling-stroke"
                    />
                </svg>
                <div className="houseContent">
                    <h3>QUI AIDE-T-ELLE ?</h3>
                    <p>
                    La Maison Bleue s’adresse aux familles qui attendent un enfant et qui
                    ont besoin d’accompagnement et de soutien, dans un contexte de vulnérabilité.
                    </p>
                </div>
          </article>
        </div>

      </section>

      {/* SECTION 2 : SOINS */}
      <section id="soins" className="mb-section">
        <h2 className="mb-title">SOINS &amp; SERVICES</h2>

        <p className="mb-paragraph">
          La Maison Bleue accueille les femmes lors de leur grossesse afin de leur offrir
          une évaluation psychosociale et un suivi prénatal adapté.
        </p>

        <ul className="mb-list">
          <li>Accueil pendant la grossesse</li>
          <li>Évaluation psychosociale</li>
          <li>Suivi prénatal</li>
          <li>Accouchement (avec MD / doula au besoin)</li>
          <li>Suivi postnatal (visites à domicile, soutien à l’allaitement, etc.)</li>
          <li>Accompagnement juridique</li>
          <li>Suivi de l’enfant 0 à 5 ans (santé, développement, vaccination, etc.)</li>
          <li>Activités de soutien aux familles (parents-enfants, sorties, etc.)</li>
        </ul>
      </section>

      {/* SECTION 3 : S'IMPLIQUER */}
      <section id="simpliquer" className="mb-section">
        <h2 className="mb-title">S’IMPLIQUER</h2>

        <p className="mb-paragraph center">
          S’impliquer auprès de La Maison Bleue, c’est poser un geste concret pour soutenir
          les familles et les enfants. Que ce soit par un don, une participation aux
          initiatives communautaires ou du bénévolat, chaque forme d’engagement contribue
          à faire une réelle différence.
        </p>

        <a
          className="mb-logoLink small"
          href="https://maisonbleue.info/simpliquer/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="mb-logo small"
            src="/images/maisonbleue-logo.png"
            alt="La Maison Bleue"
          />
        </a>
      </section>
    </div>
  );
}