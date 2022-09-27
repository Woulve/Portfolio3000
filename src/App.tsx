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

    console.log(window.location);
    let component;
    switch (window.location.pathname) {
        case "/":
            component = (
                <>
                    <Navbar items={items}></Navbar>
                    <Home items={items}></Home>
                </>
            );
            break;
        case "/contact":
            component = (
                <>
                    <Navbar items={items}></Navbar>
                    <h1 style={{ marginTop: "40px" }}>AAAAAAAAAAAAAAAAAAAAAAA</h1>;
                </>
            );
            break;
    }

    return (
        <>
            <div className="App">{component}</div>
        </>
    );
}

export default App;
