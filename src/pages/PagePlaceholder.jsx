export default function PagePlaceholder({ title }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "120px 24px",
        textAlign: "center",
      }}
    >
      <h1 style={{ letterSpacing: "0.25em" }}>{title}</h1>
      <p style={{ marginTop: 24, opacity: 0.7 }}>
        Contenu à venir
      </p>
    </div>
  );
}