import React from "react";
import "./App.css";

import Stocks from "./components/Stocks/index";
import CandleStickChart from "./components/ChartComponent/index";
import Header from "./components/Header/Header.js";

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
            <footer>Footer</footer>
        </div>
    );
}

export default App;
