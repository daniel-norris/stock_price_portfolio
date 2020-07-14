import { loadStock, loadSymbols, loadCandle } from "./state";

import companyInfoA from "../../json/companyInfoA.json";
import companyInfoB from "../../json/companyInfoB.json";
import stockQuote from "../../json/stockQuote.json";
import stockSymbols from "../../json/stockSymbols.json";
import candleData from "../../json/candle.json";

export const getStock = (stock) => {
    return (dispatch) => {
        /**
         * GET /query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo
         */
        switch (stock) {
            case "AAPL":
                return dispatch(loadStock({ ...companyInfoA, stockQuote }));
            case "SPOT":
                return dispatch(loadStock({ ...companyInfoB, stockQuote }));
            default:
                return dispatch(loadStock({ ...companyInfoA, stockQuote }));
        }
    };
};

export const getSymbols = () => {
    return (dispatch) => {
        /**
         * GET /
         */
        dispatch(loadSymbols(stockSymbols));
    };
};

export const getCandle = () => {
    return (dispatch) => {
        /**
         * GET /
         */
        dispatch(loadCandle(candleData));
    };
};
