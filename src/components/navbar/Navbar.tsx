import React, { useContext } from "react";
import "./Navbar.scss";
import { Link } from "react-scroll";
import { linkItem } from "interfaces/app/interfaces";
import { LanguageContext } from "App";

type Props = {};

const items: linkItem[] = [
  {
    key: 1,
    url: "About",
    titleger: "Über mich",
    titleen: "About me",
  },
  {
    key: 2,
    url: "Skills",
    titleger: "Skills",
    titleen: "Skills",
  },
  {
    key: 3,
    url: "Contact",
    titleger: "Kontakt",
    titleen: "Contakt",
  },
];

const Navbar = (props: Props) => {
  const { language } = useContext(LanguageContext);
  return (
    <nav className="nav">
      <ul id="navItems">
        {items.map((menu) => (
          <li key={menu.key}>
            <Link
              to={menu.url}
              smooth={true}
              hashSpy={true}
              spy={true}
              duration={500}
            >
              {language === "ger" ? menu.titleger : menu.titleen}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
