import React from "react";
import Main from  "./Main"
import About from "./About";
import Summary from "./Summary";
import Projects from "./Projects";
import Contact from "./Contact";

function MainBody() {
    return (
        <div>
            <Main />
            <About />
            <Summary />
            <Projects />
            <Contact />
        </div>
    )
};

export default MainBody;