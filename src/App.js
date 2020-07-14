import React from "react";
import "./App.css";

import Stocks from "./components/Stocks/index";
import CandleStickChart from "./components/ChartComponent/index";

function App() {
    return (
        <div className="container">
            <header>Header</header>
            <CandleStickChart />
            <Stocks />
            <footer>Footer</footer>
        </div>
    );
}

export default App;
