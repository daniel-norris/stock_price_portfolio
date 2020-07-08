import reducer, { loadStock } from "./reducer";
import initial from "./initial";

const initialState = {
    stocks: [],
};

let result = {};

describe("reducers", () => {
    it("should return the initial state", () => {
        expect(reducer(initialState, {})).toEqual({
            stocks: [],
        });
    });

    it("should handle LOAD_STOCK", () => {
        result = reducer(initialState, {
            type: "LOAD_STOCK",
            stock: {
                "01. symbol": "AAPL",
                "05. price": "119.7000",
                "09. change": "1.1600",
                "10. change percent": "0.9786%",
            },
        });

        expect(result.stocks[0]).toEqual({
            symbol: "AAPL",
            price: "119.7000",
            change: "1.1600",
            changePercent: "0.9786%",
        });

        expect(result.stocks).not.toBe(initialState.stocks);
    });

    it("should handle multiple LOAD_STOCK", () => {
        result = reducer(result, {
            type: "LOAD_STOCK",
            stock: {
                "01. symbol": "IBM",
                "05. price": "119.7000",
                "09. change": "1.1600",
                "10. change percent": "0.9786%",
            },
        });

        expect(result.stocks[0]).toEqual({
            symbol: "AAPL",
            price: "119.7000",
            change: "1.1600",
            changePercent: "0.9786%",
        });

        expect(result.stocks[1].symbol).toEqual("IBM");

        expect(result.stocks).not.toBe(initialState.stocks);
    });
});
