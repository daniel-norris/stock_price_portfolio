import { loadStock } from "./state";

import companyInfoA from "../../json/companyInfoA.json";
import stockQuote from "../../json/stockQuote.json";

export const getStock = (stock) => {
    return (dispatch) => {
        /**
         * GET /query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo
         */
        let data = { ...companyInfoA, stockQuote };
        dispatch(loadStock(data));
    };
};
