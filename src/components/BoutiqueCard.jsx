export default function BoutiqueCard({ name, imgSrc = "/images/photo.png", url = "#" }) {
  return (
    <div className="boutiqueCard">
      <img className="boutiqueImg" src={imgSrc} alt={name} />

      <div className="boutiqueBody">
        <div className="boutiqueName">{name}</div>

        <a className="boutiqueLink" href={url} target="_blank" rel="noopener noreferrer">
          → Découvrir la boutique
        </a>
      </div>
    </div>
  );
}