import React from "react";
import AboutUs from "./components/Aboutus";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Members from "./components/Members";
import BackToTopButton from "./components/BackToTopButton";

function App() {

    return (
        <div className="" >
            <Header />
            <Introduction />
            <AboutUs />
            <Events />
            <Members />
            <Footer />
            <BackToTopButton />
        </div>
    );
}

export default App;