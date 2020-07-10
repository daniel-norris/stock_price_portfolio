export const isPreviousPrice = (state, symbol) => {
    return state.stocks.some((stock) => stock.symbol === symbol);
};

export const checkPreviousPrice = (state, symbol) => {
    let stock = state.stocks.find((stock) => stock.symbol === symbol);
    return stock.price;
};

// needs to identify if stock already exists and if it does then overwrite existing price and previousPrice data
export const loadStock = (state, { stock }) => ({
    ...state,
    stocks: [
        ...state.stocks,
        {
            logo: stock.logo,
            symbol: stock.ticker,
            name: stock.name,
            price: stock.stockQuote.c,
            previousPrice: isPreviousPrice(state, "AAPL")
                ? checkPreviousPrice(state, "AAPL")
                : 0,
            marketCap: stock.marketCapitalization,
        },
    ],
});

export const loadSymbols = (state, { symbols }) => ({
    ...state,
    search: [...symbols],
});

export const deleteStock = (state, { stock }) => ({
    ...state,
    stocks: [...stock]
});

const reducer = (state, action) => {
    switch (action.type) {
        case "LOAD_STOCK":
            return loadStock(state, action);
        case "LOAD_SYMBOLS":
            return loadSymbols(state, action);
        case "DELETE_STOCK":
            return deleteStock(state, action);
        default:
            return state;
    }
};

export default reducer;
