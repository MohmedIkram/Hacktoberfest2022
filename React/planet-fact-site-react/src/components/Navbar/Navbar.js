import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import PlanetData from "../../data/planets";
import Hamburger from '../../assets/icon-hamburger.svg';

import { createRef } from "react";

export default function Navbar() {
  const menu = createRef();

  const showMenu = () => {
    if(menu.current.classList.contains('show-menu')) {
      menu.current.classList.remove('show-menu');
    } else {
      menu.current.classList += ' show-menu';
    }
  };
  
  const change = item => {
    menu.current.classList.remove('show-menu');
  }

  return (
    <nav>
      <div className="logo">
        <Link to="/earth">THE PLANETS</Link>
      </div>
      <div className="hamburger-menu" onClick={showMenu}>
        <img src={Hamburger} alt="" />
      </div>
      <div className={`planets-nav`} ref={menu}>
        <ul>
          {PlanetData.map((item, index) => {
            return (
              <li key={index}>
                <NavLink onClick={() => change(item.name)} activeClassName={`${item.name}`} to={`/${item.name}`} className={`nav-link ${item.name}-hover `}>
                  {item.name.toUpperCase()}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
