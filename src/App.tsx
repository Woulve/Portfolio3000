import React from "react";
import "./App.scss";
import Home from "pages/home/Home";
import Navbar from "components/navbar/Navbar";
import { item } from "interfaces/app/interfaces";

function App() {
    const items: item[] = [
        {
            id: 1,
            url: "home",
            title: "Home",
        },
        {
            id: 2,
            url: "portfolio",
            title: "Portfolio",
        },
        {
            id: 3,
            url: "contact",
            title: "Kontakt",
        },
    ];

    return (
        <>
            <div className="App">
                <Navbar items={items}></Navbar>
                <Home items={items}></Home>
            </div>
        </>
    );
}

export default App;
