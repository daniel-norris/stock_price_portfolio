import React from "react";
import "./App.css";

import Stocks from "./components/Stocks/index";
import CandleStickChart from "./components/ChartComponent/index";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";

function App() {
    return (
        <div className="container">
            <Header />
            <div className="chart__container">
                <section className="chart">
                    <CandleStickChart />
                </section>
            </div>
            <Stocks />
            <Footer />
        </div>
    );
}

export default App;
