import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="notfound">
      <div className="notfound__inner">
        <span className="notfound__code">404</span>
        <h1 className="notfound__title">Pagina non trovata</h1>
        <p className="notfound__text">
          La pagina che stai cercando non esiste o è stata spostata.
        </p>
        <Link to="/" className="btn btn-primary notfound__btn">
          ← Torna alla home
        </Link>
      </div>
    </div>
  );
}
