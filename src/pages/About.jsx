import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import TeamMemberCard from "../components/TeamMemberCard";
import "../assets/styles/about.css";

export default function About() {
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
    <div className="aboutPage">
      {/* SECTION: MISSION */}
      <section id="mission" className="aboutSection">
        <h2 className="aboutTitle">MISSION</h2>

        <div className="aboutTextBlock">
          <p>
            Depuis plus de dix ans, le Défilé de mode de médecine de l’Université de Montréal
            constitue un projet d’envergure entièrement porté par des étudiants de deuxième année.
            Devenu un rendez-vous annuel incontournable, l’événement affiche complet à chacune de ses
            éditions. À ce jour, plus de <strong>50 000 $</strong> ont été remis à différents organismes
            communautaires.
          </p>

          <p>
            <strong>GAÏA 2026</strong> s’inscrit dans cette continuité, tout en proposant une approche renouvelée :
            une thématique forte, une direction artistique ambitieuse et la mise en lumière d’un organisme
            communautaire dont la mission rejoint profondément nos valeurs. À travers cette édition, nous
            souhaitons créer une expérience artistique porteuse de sens, tout en poursuivant notre engagement
            à contribuer de manière durable à des causes qui nous tiennent à cœur.
          </p>
        </div>
      </section>

      {/* SECTION: NOTRE ÉQUIPE */}
      <section id="equipe" className="aboutSection">
        <h2 className="aboutTitle">NOTRE ÉQUIPE</h2>

        <h3 className="aboutSubTitle">DIRECTRICES</h3>
        <div className="teamGrid cols3">
          <TeamMemberCard name="Lauren Kamel" role="Directrice Exécutive" imgSrc="/images/lauren.jpg" imgPosition="center 10%"/>
          <TeamMemberCard name="Lynne Finéus" role="Directrice Logistique" imgSrc="/images/lynn.jpg"/>
          <TeamMemberCard name="Lara Alsabeh" role="Directrice Artistique" imgSrc="/images/lara.jpg"/>
        </div>

        <h3 className="aboutSubTitle">LOGISTIQUES</h3>
        <div className="teamGrid cols2">
          <TeamMemberCard name="Maggie Vaillancourt" role="Responsable logistique" imgSrc="/images/maggie.jpg"/>
          <TeamMemberCard name="Lou-An Lè-Berthier" role="Responsable finance" imgSrc="/images/lou.jpg"/>
        </div>

        <h3 className="aboutSubTitle">ARTISTIQUES</h3>
        <div className="teamGrid cols3">
          <TeamMemberCard name="Anouk Villeneuve" role="Responsable boutiques et partenaires" imgSrc="/images/anouk.jpg"/>
          <TeamMemberCard name="Salomé Boissonneault" role="Responsable boutiques et partenaires" imgSrc="/images/salome.jpg"/>
          <TeamMemberCard name="Marilou Salvatorelli" role="Responsable boutiques et partenaires" imgSrc="/images/marilou.jpg"/>
        </div>

        <div className="teamGrid cols3">
          <TeamMemberCard name="Kamilia Lamtaouab" role="Responsable mannequins" imgSrc="/images/kamilia.jpg"/>
          <TeamMemberCard name="Agnès Hage-Chehine" role="Responsable mannequins" imgSrc="/images/agnes.jpg"/>
          <TeamMemberCard name="Madeleine D'amours-Gravel" role="Responsable mannequins" imgSrc="/images/madelaine.jpg"/>
        </div>

        <div className="teamGrid cols3">
          <TeamMemberCard name="Amanda Brière" role="Responsable communication" imgSrc="/images/amanda.jpg" imgPosition="center 35%"/>
          <TeamMemberCard name="Mathilde Turcotte" role="Responsable communication" imgSrc="/images/mathilde.jpg"/>
          <TeamMemberCard name="Héloïse Mira Schurch" role="Responsable mise en scène" imgSrc="/images/helo.jpg" imgPosition="center 25%"/>
        </div>
      </section>

      {/* SECTION: NOUS JOINDRE */}
        <section id="contact" className="aboutSection">
            <h2 className="aboutTitle">NOUS JOINDRE</h2>

<div className="contact-icons">

  <div className="contact-item">
    <a
      href="https://www.facebook.com/people/Udemedmode/61587863631723/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/images/facebook.png" alt="Facebook" />
    </a>
    <span>Facebook</span>
  </div>

  <div className="contact-item">
    <a
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/images/linkedin.png" alt="LinkedIn" />
    </a>
    <span>LinkedIn</span>
  </div>

  <div className="contact-item">
    <a
      href="https://www.instagram.com/udemed.mode/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/images/instagram.png" alt="Instagram" />
    </a>
    <span>Instagram</span>
  </div>

  <div className="contact-item">
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=gaia2026.udem@gmail.com&su=GAIA%202026"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/images/gmail.png" alt="Courriel" />
    </a>
    <span>Courriel</span>
  </div>

</div>

<div className="contact-handle">
  @udemed.mode
</div>
        </section>
    </div>
  );
}