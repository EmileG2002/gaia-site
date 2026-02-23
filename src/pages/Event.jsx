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
          <img className="evAffiche" src="/images/affiche.png" alt="Affiche GAÏA 2026" />

          <div className="evInfoCard">
            <div className="evInfoRow">
              <span className="evIcon">📅</span>
              <span>24 avril 2026</span>
            </div>

            <div className="evInfoRow">
              <span className="evIcon">📍</span>
              <span>
                Théâtre Cartier (2330 Ste Catherine E, H2K 2J4;{" "}
                <span className="evAccent">Entrée via le Jardin</span>)
              </span>
            </div>

            <div className="evInfoRow">
              <span className="evIcon">🕒</span>
              <span>Ouverture des portes à 17h00</span>
            </div>

            <div className="evInfoRow">
              <span className="evIcon">🎫</span>
              <span>Billet requis</span>
            </div>

            <div className="evInfoRow">
              <span className="evIcon">👔</span>
              <span className="evAccent">Black tie</span>
            </div>

            <div className="evInfoRow">
              <span className="evIcon">♿</span>
              <span>Lieu accessible aux personnes à mobilité réduite</span>
            </div>

            <div className="evInfoRow">
              <span className="evIcon">🧥</span>
              <span>Coatcheck offert sur place</span>
            </div>
          </div>
        </div>
      </section>

      {/* BILLETTERIE */}
      <section id="billetterie" className="evSection">
        <h2 className="evTitle">BILLETTERIE</h2>
      </section>

      {/* PROGRAMMATION */}
      <section id="programmation" className="evSection">
        <h2 className="evTitle">PROGRAMMATION</h2>

        <div className="evProgCard">
          <div className="evProgLine strong">OUVERTURE DES PORTES · 17H00</div>
          <div className="evProgDivider" />

          <div className="evProgLine strong">COCKTAIL DE BIENVENUE · 17H00 À 19H00</div>
          <div className="evProgLine">ACCUEIL</div>
          <div className="evProgLine">RÉSEAUTAGE</div>
          <div className="evProgLine">MUSIQUE LIVE</div>
          <div className="evProgLine">KIOSQUE LA MAISON BLEUE</div>
          <div className="evProgLine">VENTE DE BILLET DE TOMBOLA</div>

          <div className="evProgDivider" />
          <div className="evProgLine strong">MOT D’OUVERTURE · 19H00</div>
          <div className="evProgLine strong">DÉFILÉ DE MODE</div>
          <div className="evProgLine">ACT 1 :</div>
          <div className="evProgLine">ACT 2 :</div>

          <div className="evProgDivider" />
          <div className="evProgLine strong">INTERLUDE · 20H??</div>
          <div className="evProgLine">ACT 3 :</div>
          <div className="evProgLine">ACT 4 :</div>

          <div className="evProgDivider" />
          <div className="evProgLine strong">MOT DE CLÔTURE · 20H??</div>
          <div className="evProgLine strong">TOMBOLA · 20H??</div>
        </div>
      </section>

      {/* TOMBOLA */}
      <section id="tombola" className="evSection">
        <h2 className="evTitle">TOMBOLA</h2>
      </section>
    </div>
  );
}