import reducer, { loadStock } from "./reducer";
import initial from "./initial";

const initialState = {
    stocks: [],
};

it("saves a stock to state", () => {
    // create player creation tests here

    let result = loadStock(initialState, {
        stock: {
            name: "Apple Inc",
            symbol: "AAPL",
        },
    });

    expect(result.stocks[0]).toEqual({
        name: "Apple Inc",
        symbol: "AAPL",
    });

    expect(result.stocks).not.toBe(initialState.stocks);
});

it("reduces", () => {
    // reducer tests here
});
