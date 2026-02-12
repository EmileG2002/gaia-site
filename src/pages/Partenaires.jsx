import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BoutiqueCard from "../components/BoutiqueCard";
import "../assets/styles/partenaires.css";

export default function Partenaires() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - 110; // offset navbar
    window.scrollTo({ top: y, behavior: "smooth" });
  }, [hash]);

  return (
    <div className="pbPage">
      {/* OR */}
      <section className="pbSection">
        <section id="or" className="pbSmallSection">
          <div className="pbKicker">PARTENAIRES GAÏA 2026</div>
          <h2 className="pbTitle">PARTENAIRES OR</h2>

          <p className="pbText">
            Les partenaires Or occupent une place centrale dans la réalisation de GAÏA 2026.
            Leur engagement permet de soutenir la direction artistique, la production de l’événement
            et l’expérience globale offerte aux invité·e·s.
          </p>

          <p className="pbText strong">
            Nous remercions chaleureusement nos partenaires Or pour leur contribution déterminante.
          </p>

          <div className="pbLogoStack">
            {/* Remplace les src par tes vrais fichiers dans public/images */}
            <img className="pbLogo" src="/images/rbc.png" alt="RBC" />
            <img className="pbLogo" src="/images/nqx.png" alt="NQX" />
          </div>
        </section>

        {/* ARGENT */}
        <section id="argent" className="pbSmallSection">
          <div className="pbKicker">PARTENAIRES GAÏA 2026</div>
          <h2 className="pbTitle">PARTENAIRES ARGENT</h2>

          <p className="pbText">
            Les partenaires Argent soutiennent GAÏA 2026 par leur engagement et leur collaboration,
            contribuant à enrichir l’expérience proposée tout au long de l’événement.
          </p>

          <p className="pbText strong">
            Nous remercions nos partenaires Argent pour leur soutien précieux.
          </p>

          <div className="pbLogoRow">
            <img className="pbLogo small" src="/images/boda.png" alt="Groupe BODA" />
            <img className="pbLogo small" src="/images/aecium.png" alt="Aecium" />
          </div>
        </section>

        {/* BRONZE */}
        <section id="bronze" className="pbSmallSection">
          <div className="pbKicker">PARTENAIRES GAÏA 2026</div>
          <h2 className="pbTitle">PARTENAIRES BRONZE</h2>

          <p className="pbText">
            Les partenaires Bronze participent à la réalisation de GAÏA 2026 et témoignent de leur appui
            à la créativité étudiante et à l’engagement communautaire.
          </p>

          <p className="pbText strong">Nous les remercions pour leur implication.</p>

          <div className="pbLogoRow">
            <img className="pbLogo small" src="/images/clarins.png" alt="Clarins" />
          </div>
        </section>
      </section>

      {/* DEVENIR PARTENAIRE */}
      <section id="devenir-partenaire" className="pbSection">
        <div className="pbKicker">PARTENAIRES & BOUTIQUES</div>
        <h2 className="pbTitle">DEVENEZ PARTENAIRE</h2>

        <p className="pbText">
          En devenant partenaire de <strong>GAÏA 2026</strong>, vous contribuez directement au soutien de
          <strong> La Maison Bleue</strong>, tout en vous associant à un projet rassembleur qui valorise
          la créativité locale et l’engagement communautaire.
        </p>

        <p className="pbText strong">
          Ensemble, nous participons à la création d’un impact concret et durable, à la fois social et humain.
        </p>

        <div className="pbSmallNote">
          Pour plus d’information, contactez-nous via{" "}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=gaia2026.udem@gmail.com&su=Devenir%20partenaire%20de%20GAIA%202026"
            target="_blank"
            rel="noopener noreferrer"
            className="pbEmailLink"
          >
            gaia2026.udem@gmail.com
          </a>
        </div>
      </section>

      {/* BOUTIQUES */}
      <section id="boutiques" className="pbSection">
        <div className="pbKicker">PARTENAIRES & BOUTIQUES</div>
        <h2 className="pbTitle">BOUTIQUES</h2>

        <p className="pbText">
          Les boutiques participantes jouent un rôle central dans l’univers de GAÏA 2026.
          Chacune apporte une identité unique au défilé, contribuant à une narration collective qui met en
          valeur la diversité et la richesse de la création locale.
        </p>

        <div className="boutiqueList">
          <BoutiqueCard name="NOM DE LA BOUTIQUE" imgSrc="/images/photo.png" url="https://example.com" />
          <BoutiqueCard name="NOM DE LA BOUTIQUE" imgSrc="/images/photo.png" url="https://example.com" />
          <BoutiqueCard name="NOM DE LA BOUTIQUE" imgSrc="/images/photo.png" url="https://example.com" />
        </div>

      </section>

      {/* DEVENIR BOUTIQUE */}
      <section id="devenir-boutique" className="pbSection">
        <div className="pbKicker">PARTENAIRES & BOUTIQUES</div>
        <h2 className="pbTitle">DEVENEZ BOUTIQUE PARTENAIRE</h2>

        <p className="pbText">
          GAÏA 2026 se veut une vitrine de la créativité locale et émergente. Il s’agit d’une occasion unique
          de raconter votre marque autrement.
        </p>

        <p className="pbText">
          À travers le défilé, nous offrons aux boutiques et créateurs partenaires l’opportunité de présenter
          leurs pièces dans un contexte artistique et immersif, devant un public composé d’étudiant·e·s
          universitaires, de jeunes professionnel·le·s et d’acteurs du milieu créatif montréalais.
        </p>

        <p className="pbText">
          En tant que boutique partenaire, vous êtes invité·e·s à collaborer avec GAÏA 2026 par le prêt
          ou le don de vêtements à l’occasion, intégrés directement au défilé.
        </p>
        <div className="pbSmallNote">
          Pour plus d’information, contactez-nous via{" "}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=gaia2026.udem@gmail.com&su=Devenir%20une%20boutique%20partenaire%20de%20GAIA%202026"
            target="_blank"
            rel="noopener noreferrer"
            className="pbEmailLink"
          >
            gaia2026.udem@gmail.com
          </a>
        </div>
      </section>
    </div>
  );
}