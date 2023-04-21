import { NavLink } from "react-router-dom";
import logo from "../images/logo.svg";


export default function Nav() {
  return (
    <nav className="globalnavigation sidepadding">
      <div className="logodiv">
        <NavLink to="/"><img className="logo" src={logo} alt="logo"/></NavLink>
          <p>REBOOT</p>
      </div>
      
      <div className="menupunkter">
        <a href="#værktøjer">Services</a>
        <a href="#gartnere">Om os</a>
        <a className="knap knap_brun" href="#prisberegner">Prisberegner</a>
        <a className="knap knap_sort" href="#kontakt">Book nu</a>
      </div>

    </nav>
  );
}
