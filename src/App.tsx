import React, { useCallback } from "react";
import "./App.scss";
import Home from "pages/home/Home";
import Navbar from "components/navbar/Navbar";
import { item } from "interfaces/app/interfaces";
import type { Engine } from "tsparticles-engine";
import { ISourceOptions } from "tsparticles-engine";
import Particles from "react-tsparticles";
import particlesOptions from "./particles.json";
import { loadFull } from "tsparticles";

function App() {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

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
                <Particles id="tsparticles" options={particlesOptions as ISourceOptions} init={particlesInit} />
                <Navbar items={items}></Navbar>
                <Home items={items}></Home>
            </div>
        </>
    );
}

export default App;
