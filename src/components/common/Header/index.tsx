import { Link } from "react-router-dom";
import { pages } from "../../../constants";

import "./styles.scss";

const Header = () => {
  return (
    <header className="header-container">
      <nav>
        <ul>
          <li>
            <Link to={pages.home}>Inicio</Link>
          </li>

          <li>
            <Link to={pages.aboutUs}>Sobre nós</Link>
          </li>

          <li>
            <Link to={pages.rooms}>Quartos</Link>
          </li>

          <li>
            <Link to={pages.contact}>Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
