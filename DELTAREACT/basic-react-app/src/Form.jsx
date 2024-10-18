function onSubmit(event) {
  event.preventDefault();
  console.log("Form submitted!");
}
export default function Form() {
  return (
    <form onSubmit={onSubmit}>
      <input placeholder="write something" />
      <button>Submit</button>
    </form>
  );
}
