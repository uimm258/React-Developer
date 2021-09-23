import React from "react";
import Main from  "./MainBody/Main"
import About from "./MainBody/About";
import Summary from "./MainBody/Summary";
import Projects from "./MainBody/Projects";
import Contact from "./MainBody/Contact";

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