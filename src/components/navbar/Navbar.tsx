import React from "react";
import "./Navbar.scss";
import { Link } from "react-scroll";
import { linkItem } from "interfaces/app/interfaces";

type Props = {
  items: linkItem[];
};

const Navbar = (props: Props) => {
  return (
    <nav className="nav">
      <ul id="navItems">
        {props.items.map((menu) => (
          <li key={menu.key}>
            <Link
              to={menu.url}
              smooth={true}
              hashSpy={true}
              spy={true}
              duration={500}
            >
              {menu.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
