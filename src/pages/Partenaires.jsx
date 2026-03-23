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
    <section className="pbSection">
      {/* OR */}
      <section id="or" className="pbSmallSection">
        <h2 className="pbTitle">PARTENAIRES OR</h2>

        <p className="pbText">
          Les partenaires Or occupent une place centrale dans la réalisation de GAÏA 2026.
          Leur engagement permet de soutenir la direction artistique, la production de l’événement
          et l’expérience globale offerte aux invité·e·s.
        </p>

        <p className="pbText strong">
          Nous remercions chaleureusement nos partenaires Or pour leur contribution déterminante.
        </p>

        <div className="pbSpecialPartnerRow">
          <a
            className="pbSpecialPartnerCard"
            href="https://www.fasken.com/fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="pbSpecialPartnerTitle">PARTENAIRE CORPORATIF ENGAGÉ</div>
            <img className="pbLogo pbLogoSpecial" src="/images/fasken.png" alt="Fasken" />
          </a>

          <a
            className="pbSpecialPartnerCard"
            href="https://beautestar.com/?srsltid=AfmBOoouZAVXRd9r-08vapulfFZ3OHPrc6OvPBVJlEmBmCQKJYyVY8WI"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="pbSpecialPartnerTitle">PARTENAIRE COIFFURE OFFICIEL</div>
            <img className="pbLogo pbLogoSpecial" src="/images/beautestar.png" alt="Beauté Star" />
          </a>
        </div>

        <div className="pbLogoGrid pbLogoGridOr">
          <a
            className="pbLogoCard pbLogoCardOr"
            href="https://www.rbccm.com/fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="pbLogo pbLogoOr" src="/images/rbc.png" alt="RBC" />
          </a>

          <a
            className="pbLogoCard pbLogoCardOr"
            href="https://www.nqx.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="pbLogo pbLogoOr" src="/images/nqx.png" alt="NQX" />
          </a>

          <a
            className="pbLogoCard pbLogoCardOr"
            href="https://www.td.com/ca/fr/services-bancaires-personnels?cm_sp=:GOOGLE:ROC+-+Brand+-+FR+-+Core+ACQ+-+Google+-+26301++(26_S_BR_BAC_AO_ACQ_FR_NAT):DIF:Core+Brand+FR+-+Broad&gclsrc=aw.ds&gad_source=1&gad_campaignid=17535966708&gbraid=0AAAAAD1rvrQdEZC0fCnUtu7XnOHP_tdzh&gclid=Cj0KCQiA5I_NBhDVARIsAOrqIsYk7iCEP7pieNtsCWbDVbV_qXFAxvUcfOHcCINiYNUnCV1w4u3WpikaAnkTEALw_wcB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="pbLogo pbLogoOr" src="/images/td.png" alt="TD" />
          </a>
        </div>

      </section>

      {/* ARGENT */}
      <section id="argent" className="pbSmallSection">
        <h2 className="pbTitle">PARTENAIRES ARGENT</h2>

        <p className="pbText">
          Les partenaires Argent soutiennent GAÏA 2026 par leur engagement et leur collaboration,
          contribuant à enrichir l’expérience proposée tout au long de l’événement.
        </p>

        <p className="pbText strong">
          Nous remercions nos partenaires Argent pour leur soutien précieux.
        </p>
        <div className="pbLogoGrid pbLogoGridArgent">
          <div className="pbLogoCard pbLogoCardArgent">
            <img className="pbLogo pbLogoArgent" src="/images/boda.png" alt="Groupe BODA" />
          </div>

          <div className="pbLogoCard pbLogoCardArgent">
            <img className="pbLogo pbLogoArgent" src="/images/aecium.png" alt="Aecium" />
          </div>

          <div className="pbLogoCard pbLogoCardArgent">
            <img className="pbLogo pbLogoArgent" src="/images/archermd.png" alt="archermd" />
          </div>
         <div className="pbLogoCard pbLogoCardArgent">
            <img className="pbLogo pbLogoArgent" src="/images/quesnel.png" alt="quesnel" />
          </div>
        </div>
      </section>

      {/* BRONZE */}
      <section id="bronze" className="pbSmallSection">
        <h2 className="pbTitle">PARTENAIRES BRONZE</h2>

        <p className="pbText">
          Les partenaires Bronze participent à la réalisation de GAÏA 2026 et témoignent de leur appui
          à la créativité étudiante et à l’engagement communautaire.
        </p>

        <p className="pbText strong">Nous les remercions pour leur implication.</p>

        <div className="pbLogoGrid pbLogoGridBronze">
          <div className="pbLogoCard pbLogoCardBronze">
            <img className="pbLogo pbLogoBronze" src="/images/clarins.png" alt="Clarins" />
          </div>

          <div className="pbLogoCard pbLogoCardBronze">
            <img className="pbLogo pbLogoBronze" src="/images/pare.png" alt="pare" />
          </div>
        </div>
      </section>
    </section>

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


      <section id="boutiques" className="pbSection">
        <div className="pbKicker">PARTENAIRES & BOUTIQUES</div>
        <h2 className="pbTitle">BOUTIQUES</h2>

        <p className="pbText">
          Les boutiques participantes jouent un rôle central dans l’univers de GAÏA 2026.
          Chacune apporte une identité unique au défilé, contribuant à une narration collective qui met en
          valeur la diversité et la richesse de la création locale.
        </p>

<div className="boutiqueList">
  <BoutiqueCard
    name="Jeannie Nova"
    description="Jeannie Nova est une marque de vêtements pour femme qui célèbre une élégance audacieuse, inspirée par la force féminine, l’identité et l’expression artistique. Chaque création est unique et met en lumière la puissance et l’unicité de celle qui la porte. L’élégance est une manière de penser."
    imgSrc="/images/nova.jpg"
    url="https://www.instagram.com/jeannienova_official?igsh=aDRyMmxtczN6NzY5"
  />

  <BoutiqueCard
    name="Ariana Mucciacciaro"
    description="Designed with love, this collection depicts a true fairytale. It’s a glamorous, dreamy and glittery world full of roses also inspired by nature and its beauty."
    imgSrc="/images/ariana.jpg"
    url=""
  />

  <BoutiqueCard
    name="Furrias"
    description="High-end and unisex streetwear designs. A brand willing to push boundaries and provoke to reshape perspectives while keeping their core values such as sustainability, inclusivity and equality. Never forgetting a touch of sass."
    imgSrc="/images/furrias.jpg"
    url=""
  />

  <BoutiqueCard
    name="Lise René de Cotret"
    description="Lise René de Cotret est une marque émergeante de vêtements haut de gamme & haute couture avec de grandes ambitions. Créée en honneur d'un être cher, la marque rend hommage au savoir-faire ancestral et l'attention au détail. La designer s'inspire des grands créateurs européens pour donner vie à des silhouettes élégantes et complexes."
    imgSrc="/images/cotret.png"
    url="https://www.instagram.com/renedecotret.couture?igsh=MW85bHQ2ZnBvdDZ0ZQ%3D%3D"
  />

  <BoutiqueCard
    name="House of Havran"
    description="Havran is a curated world of moody elegance and timeless nostalgia for discerning souls. Here every piece is handcrafted with a strict zero waste approach and our aesthetics rooted in circular design. We exist to find beauty in the discarded, to feed our inner child with trash."
    imgSrc="/images/havran.jpg"
    url=""
  />

  <BoutiqueCard
    name="Friperie L’irisée"
    description="Friperie L’Irisée est une friperie associative montréalaise qui propose des vêtements de seconde main à petits prix, accessible à tous. L’initiative met de l’avant une approche communautaire et responsable, en donnant une seconde vie aux vêtements tout en favorisant une consommation plus durable. À travers ses activités, la friperie crée un espace convivial où l’on peut dénicher des trouvailles uniques tout en soutenant une démarche sociale et écologique."
    imgSrc="/images/irise.png"
    url="https://www.instagram.com/friperie_lirisee/"
  />

  <BoutiqueCard
    name="Ponta Atelier"
    description="Ponta est un atelier de mode indépendant basé à Montréal, fondé par la designer Laurie Ponta. La marque se distingue par des silhouettes modernes inspirées d’une esthétique rétro des années 1960, avec une approche créative et affirmée. À travers des créations originales et des projets artistiques, PONTA met de l’avant une vision contemporaine de la mode, alliant expression personnelle et production locale."
    imgSrc="/images/ponta.jpg"
    url="https://www.instagram.com/pontaatelier/"
  />

  <BoutiqueCard
    name="Rosalie Paquette"
    description="Rosalie Paquette est une créatrice de mode qui explore la transformation des matières à travers des pièces uniques et expressives. Son travail met de l’avant une approche artistique et engagée, notamment par l’utilisation de matériaux recyclés et la revalorisation des déchets textiles. À travers ses projets, elle propose une vision sensible et contemporaine de la mode, où chaque création raconte une histoire et questionne notre rapport à la consommation."
    imgSrc="/images/paquette.jpg"
    url="https://www.instagram.com/roserosalierose_design/"
  />

  <BoutiqueCard
    name="Salmani"
    description="Salmani est une marque de mode montréalaise qui propose des vêtements inspirés par une vision forte et déterminée, mettant de l’avant des valeurs de persévérance et d’expression personnelle. À travers ses créations, la marque explore une esthétique contemporaine marquée par le caractère et l’intention, où chaque pièce reflète une identité affirmée et un parcours créatif unique."
    imgSrc="/images/salmani.png"
    url="https://www.instagram.com/salmani.mtl/"
  />

  <BoutiqueCard
    name="Invincible"
    description="En plus d’offrir des vêtements streetwear, Invincible s’inscrit dans un mouvement ancré dans l'humanité, une plateforme d'expression de soi et un rappel quotidien de l’importance de la santé mentale. Invincible a comme mission de créer des vêtements qui font du bien au corps, à l'âme et à l'esprit afin que chaque pièce soit un point d'ancrage, une source de fierté et un symbole de résilience. Chaque pièce d'Invincible est une déclaration discrète mais puissante : Je suis toujours là. Je grandis. Je suis Invincible."
    imgSrc="/images/invicible.png"
    url="https://invincibleboutique.com/"
  />

  <BoutiqueCard
    name="Florence Lachapelle"
    description="Je m’appelle Florence (F.Lach), créatrice basée à Montréal, spécialisée en design de mode. Mon travail consiste à créer des pièces uniques à partir de matières seconde main et de textiles récupérés, dans une démarche écoresponsable. Chaque vêtement est conçu comme une pièce singulière, où la transformation des matériaux donne naissance à de nouvelles formes et à de nouvelles histoires. Mon approche explore le lien entre mode, identité et narration visuelle, en développant des univers forts autour de chaque création. Mon parcours en photographie et en design graphique influence également mon processus, me permettant de concevoir des projets où vêtement, image et direction artistique se rencontrent."
    imgSrc="/images/lachapelle.png"
    url=""
  />

  <BoutiqueCard
    name="Brokenheart"
    description="Brokenheart is a fashion label that blends experimentation and craftsmanship. Each piece is designed with a focus on details, texture, layers and silhouettes. The brand aims to push the boundaries of design through unconventional techniques and finishes."
    imgSrc="/images/BROKENHEART.png"
    url="https://brokenheartofficial.com/"
  />

  <BoutiqueCard
    name="Perdition"
    description="C’est la marque d’un esprit libre ; quelqu’un qui avance à sa manière, qui n’attend pas qu’on lui montre le chemin et qui transforme les obstacles en force. Chaque pièce est faite pour ceux qui veulent se sentir confiants, solides et vrais, sans compromis sur le confort ou le style. On ne veut pas qu’on nous colle une étiquette. On préfère créer la nôtre. Parce que la différence ne vient pas des vêtements. Elle vient des gens assez audacieux pour porter Perdition."
    imgSrc="/images/perdition.png"
    url="https://perditionmtl.com/"
  />

  <BoutiqueCard
    name="Delinor"
    description="Delinor est une marque d’accessoires de mode et de maison, fondée par l’artiste-designer montréalaise D. Léonor Leclair, où la photographie devient motif et où l’émotion prend forme. La marque se distingue par ses foulards de soie dont certains sont en édition limitée et personnalisables avec des mots porteurs de sens ainsi que par des pièces de maison et d’art de la table créées avec intention. Ancrée dans la slow fashion et l’art de vivre, DELINOR propose des essentiels intemporels chics, élégants et subtilement bohèmes, produits en petites quantités et fabriqués à Montréal. DELINOR vise à avoir un impact positif sur le monde. Sa mission est d’inspirer et de s’inspirer grâce à une créativité libre et intuitive, en transformant les détails anodins et la photographie en expressions poétiques de l’Art de l’Ordinaire."
    imgSrc="/images/delinor.png"
    url="https://www.delinordesign.com"
  />

  <BoutiqueCard
    name="Valérie C"
    description="Valérie C. propose des vêtements luxueux de tous les jours, conçus avec des matières de qualité et une attention particulière aux détails. Produites en petites quantités et fabriquées avec soin au Québec, les collections offrent des pièces distinctives, élégantes et intemporelles — pensées pour incarner un luxe naturel, sans effort."
    imgSrc="/images/valerie.png"
    url="https://valeriecdesign.ca/"
  />

  <BoutiqueCard
    name="Tauts"
    description="Cette collection intitulé collection première à pour but de célébrer la diversité et l'inclusivité à travers ses silhouettes monochromatiques et colorées conçus et construites sur tout type de corps et personne. La collection n'est pas pour un genre, un public ou une clientèle fixe, mais pour tous!"
    imgSrc="/images/tauts.png"
    url="https://madewithtauts.square.site/"
  />

  <BoutiqueCard
    name="URI-L2"
    description="Mon approche de la mode est instinctive et très pratique. Je travaille rarement à partir de tableaux d’inspiration (moodboards) ou de prototypes ; souvent, le patron et le vêtement sont créés dans un même élan, directement avec les tissus finaux. Mon travail est guidé par l’observation — la rue, les gens, leur posture et la façon dont ils s’habillent au quotidien. Je m’inspire de l’expérience vécue, de mon environnement quotidien et de ce qui attire naturellement mon attention. Chaque pièce est une réponse immédiate à un moment, une silhouette ou une énergie."
    imgSrc="/images/uri.png"
    url="https://u-ri-l2.online/"
  />
</div>
      </section>

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