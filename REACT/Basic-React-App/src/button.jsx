function doSomething() {
  console.log("Button clicked!");
}

function onMouseOver() {
  console.log("Mouse over");
}
function onDblClick() {
  console.log("Double clicked!");
}

export default function Button() {
  return (
    <div>
      <button onClick={doSomething}>Click me</button>
      <p onMouseOver={onMouseOver}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque rem odio
        ipsum illum, pariatur neque eos ullam eveniet incidunt omnis, nesciunt
        deleniti corporis similique doloribus consequuntur natus? Veritatis,
        culpa assumenda.
      </p>
      <button onDoubleClick={onDblClick}>Double click me!</button>
    </div>
  );
}
