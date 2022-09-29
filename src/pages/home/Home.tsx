import React from "react";
import "./Home.scss";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Career from "./components/career/Career";
import Contact from "./components/contact/Contact";
import { linkItem, itemContent } from "interfaces/app/interfaces";

type Props = {
    items: linkItem[];
};

const Home = (props: Props) => {
    const itemContents: itemContent[] = [
        {
            url: "portfolio",
            content: <p>react tailwindcss postcss autoprefixer</p>,
        },
        {
            url: "contact",
            content: <></>,
        },
    ];
    props.items.forEach((item) => {
        itemContents.forEach((itemContent) => {
            if (item.url === itemContent.url) {
                item.content = itemContent.content;
            }
        });
    });

    return (
        <>
            <About></About>
            <Skills></Skills>
            <Career></Career>
            <Contact></Contact>
            {/* {props.items.map((menu) => (
                <div className="container" id={menu.url}>
                    <div className="content">
                        <h1 className="content-header">{menu.title}</h1>
                        
                    </div>
                </div>
            ))} */}
        </>
    );
};

export default Home;
