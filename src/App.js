import React from "react";
import "./App.css";

import Stocks from "./components/Stocks/index";

function App() {
    return (
        <div className="container">
            <header>Header</header>
            <section>Chart</section>
            <Stocks />
            <footer>Footer</footer>
        </div>
    );
}

export default App;
