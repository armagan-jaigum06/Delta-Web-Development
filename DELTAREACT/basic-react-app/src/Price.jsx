export default function Price({ oldPrice, newPrice }) {
  return (
    <div
      style={{
        backgroundColor: "#e0c367",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        marginTop: "10px",
      }}
    >
      <span style={{ textDecorationLine: "line-through" }}>{oldPrice}</span>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <span style={{ fontWeight: "bold" }}>{newPrice}</span>
    </div>
  );
}
