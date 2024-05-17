import "./card.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Others from "./Others";
export default function Card() {
  return (
    <div className="card-wrapper">
      <Frontend />
      <Backend />
      <Others />
    </div>
  );
}
