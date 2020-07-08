import { loadStock } from "./state";
// import below when we have API routes
// import axios from '../../axios';

import data from "../../stock.json";

export const getStock = () => {
    return (dispatch) => {
        /**
         * GET
         */
        dispatch(loadStock(data));
    };
};
