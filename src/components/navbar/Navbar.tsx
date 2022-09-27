import React from "react";
import "./Navbar.scss";
import { Link } from "react-scroll";
import { item } from "interfaces/app/interfaces";

type Props = {
    items: item[];
};

const Navbar = (props: Props) => {
    return (
        <nav className="nav">
            <a href="/" className="site-title">
                Elias Cecetka
            </a>
            <ul>
                {props.items.map((menu) => (
                    <li>
                        <Link to={menu.url} smooth={true} hashSpy={true} offset={-80} spy={true} duration={500}>
                            {menu.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
