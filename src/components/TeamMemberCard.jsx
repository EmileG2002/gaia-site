export default function TeamMemberCard({ name, role, imgSrc = "/images/photo.png" }) {
  return (
    <div className="teamCard">
      <img className="teamAvatar" src={imgSrc} alt={name} />
      <div className="teamName">{name}</div>
      <div className="teamRole">{role}</div>
    </div>
  );
}