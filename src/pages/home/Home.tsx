import React from "react";
import "./Home.scss";
import { item } from "interfaces/app/interfaces";

type Props = {
    items: item[];
};

const Home = (props: Props) => {
    return (
        <>
            {props.items.map((menu) => (
                <div className="content">
                    <h1 className="content-header" id={menu.url}>
                        {menu.title}
                    </h1>
                </div>
            ))}
        </>
    );
};

export default Home;
