export default function TeamMemberCard({
  name,
  role,
  imgSrc = "/images/photo.png",
  imgPosition = "center"
}) {
  return (
    <div className="teamCard">
      <img
        className="teamAvatar"
        src={imgSrc}
        alt={name}
        style={{ objectPosition: imgPosition }}
      />
      <div className="teamName">{name}</div>
      <div className="teamRole">{role}</div>
    </div>
  );
}