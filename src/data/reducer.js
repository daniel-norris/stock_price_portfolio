export const isPreviousPrice = (state, symbol) => {
    return state.stocks.some((stock) => stock.symbol === symbol);
};

export const checkPreviousPrice = (state, symbol) => {
    let stock = state.stocks.find((stock) => stock.symbol === symbol);
    return stock.price;
};

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

const reducer = (state, action) => {
    switch (action.type) {
        case "LOAD_STOCK":
            return loadStock(state, action);
        default:
            return state;
    }
};

export default reducer;
