import { loadStock, loadStockPrice } from "./state";

import companyInfoA from "../../json/companyInfoA.json";
import companyInfoB from "../../json/companyInfoB.json";

export const getStock = (stock) => {
    return (dispatch) => {
        /**
         * GET /query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo
         */

        dispatch(loadStock(companyInfoA));
    };
};

export const getStockPrice = (stock) => {
    return (dispatch) => {
        /**
         * GET /query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo
         */

        dispatch(loadStockPrice(companyInfoA));
    };
};
