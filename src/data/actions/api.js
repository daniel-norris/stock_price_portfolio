import { loadStock, loadSymbols } from "./state";

import companyInfoA from "../../json/companyInfoA.json";
import companyInfoB from "../../json/companyInfoB.json";
import stockQuote from "../../json/stockQuote.json";
import stockSymbols from "../../json/stockSymbols.json";

export const getStock = (stock) => {
    return (dispatch) => {
        /**
         * GET /query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo
         */
        let data =
            stock === "AAPL"
                ? { ...companyInfoA, stockQuote }
                : { ...companyInfoB, stockQuote };
        dispatch(loadStock(data));
    };
};

export const getSymbols = () => {
    return (dispatch) => {
        /**
         * GET /query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo
         */
        dispatch(loadSymbols(stockSymbols));
    };
};
