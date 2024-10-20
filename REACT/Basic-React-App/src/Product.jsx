import "./Product.css";
import Price from "./Price";
export default function InstaActivity({ title, idx }) {
  let oldPrices = ["$99.99", "$129.99", "$899.99", "$69.99"];
  let newPrices = ["$79.99", "$99.99", "$799.99", "$59.99"];
  let description = [
    ["8,000 DPI", "5 Programmable Buttons"],
    ["intutive surface", "design for iPad Pro"],
    ["7 Color Backlit", "12 Multimedia Keys"],
    ["Bluetooth, 4.1", "10m Range"],
  ];

  return (
    <div className="InstaActivity">
      <h4>
        <b>{title}</b>
      </h4>
      <li>{description[idx][0]}</li>
      <li>{description[idx][1]}</li>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}
