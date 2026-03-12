import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../assets/styles/event.css";

export default function Event() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - 110;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, [hash]);

  return (
    <div className="evPage">
      {/* DÉFILÉ */}
      <section id="defile" className="evSection">
        <h2 className="evTitle">DÉFILÉ DE MODE 2026</h2>

        <div className="evDefileGrid">
          <img
            className="evAffiche"
            src="/images/affiche.png"
            alt="Affiche GAÏA 2026"
          />

          <div className="evInfoCard">
            <div className="evInfoRow">
              <img className="evIconImg" src="/images/icon-calendar.png" alt="" />
              <span>24 avril 2026</span>
            </div>

            <div className="evInfoRow">
              <img className="evIconImg" src="/images/icon-location.png" alt="" />
              <span>
                <a
                  className="evLink"
                  href="https://theatrecartier.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Théâtre Cartier
                </a>{" "}
                (2330 Ste Catherine E, H2K 2J4; Entrée via le Jardin)
              </span>
            </div>

            <div className="evInfoRow">
              <img className="evIconImg" src="/images/icon-clock.png" alt="" />
              <span>Ouverture des portes à 17h00</span>
            </div>

            <div className="evInfoRow">
              <img className="evIconImg" src="/images/icon-ticket.png" alt="" />
              <span>Billet requis</span>
            </div>

            <div className="evInfoRow">
              <img className="evIconImg" src="/images/icon-tie.png" alt="" />
              <span>Black tie</span>
            </div>

            <div className="evInfoRow">
              <img className="evIconImg" src="/images/icon-accessible.png" alt="" />
              <span>Lieu accessible aux personnes à mobilité réduite</span>
            </div>

            <div className="evInfoRow">
              <img className="evIconImg" src="/images/icon-coatcheck.png" alt="" />
              <span>Coatcheck offert sur place (3$)</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMMATION */}
      <section id="programmation" className="evSection">
        <h2 className="evTitle">PROGRAMMATION</h2>

        <div className="evProgCard">
          <div className="evProgLine strong">OUVERTURE DES PORTES · 17H00</div>
          <div className="evProgDivider" />

          <div className="evProgLine strong">COCKTAIL DE BIENVENUE · 17H00</div>
          <div className="evProgLine">ACCUEIL</div>
          <div className="evProgLine">RÉSEAUTAGE</div>
          <div className="evProgLine italic">MEDBAND</div>
          <div className="evProgLine">KIOSQUE LA MAISON BLEUE</div>
          <div className="evProgLine">VENTE DE BILLET DE TOMBOLA</div>

          <div className="evProgDivider" />
          <div className="evProgLine strong">DÉBUT DÉFILÉ GAÏA · 19H30</div>

          <div className="evProgSmallDivider" />
          <div className="evProgLine strong">ENTRACTES</div>
          <div className="evProgLine">TÉMOIGNAGES LA MAISON BLEUE</div>
          <div className="evProgLine">PERFORMANCES ARTISTIQUES</div>
          <div className="evProgLine">ANNONCES DES PRIX</div>

          <div className="evProgSmallDivider" />
          <div className="evProgLine strong">RÉCUPÉRATION DES PRIX</div>

          <div className="evProgDivider" />
          <div className="evProgLine strong">FERMETURE DES PORTES · 22H00</div>
        </div>
      </section>

      {/* BILLETTERIE */}
      <section id="billetterie" className="evSection">
        <h2 className="evTitle">BILLETTERIE</h2>

        <div className="evSimpleCenterBlock">
          <div className="evComingSoon">À VENIR</div>
          <div className="evComingDate">23.03.2026</div>
        </div>
      </section>

      {/* TOMBOLA */}
      <section id="tombola" className="evSection">
        <h2 className="evTitle">TOMBOLA</h2>

        <div className="evTombolaSub">RESTEZ À L’AFFUT</div>

        <div className="evTombolaRow">
          <img className="evTombolaLogo" src="/images/lole.png" alt="Lolë" />
          <img className="evTombolaLogo" src="/images/clarins.png" alt="Clarins" />
          <img className="evTombolaLogo" src="/images/spinenergie.png" alt="Spin Énergie" />
        </div>
      </section>
    </div>
  );
}