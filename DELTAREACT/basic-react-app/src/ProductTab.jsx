import Product from "./Product";

function ProductTab() {
  //   let feature = ["hi-tech", "durable", "existed"];
  return (
    <div className="ProductTab">
      <Product title="Logitech Mx Master 35" idx={0} />
      <Product title="Apple Pencil (2nd Gen)" idx={1} />
      <Product title="Zebronics Zeb-transformer" idx={2} />
      <Product title="Petronics Toad 23" idx={3} />
    </div>
  );
}

export default ProductTab;
