function Card({ titulo, valor }) {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        minWidth: "200px",
      }}
    >
      <h3
        style={{
          margin: 0,
          color: "#64748b",
        }}
      >
        {titulo}
      </h3>

      <h1
        style={{
          marginTop: "10px",
          color: "#0f172a",
        }}
      >
        {valor}
      </h1>
    </div>
  );
}

export default Card;