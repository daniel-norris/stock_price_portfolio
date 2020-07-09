export const loadStock = (state, { stock }) => ({
    ...state,
    stocks: [
        ...state.stocks,
        {
            logo: stock.logo,
            symbol: stock.ticker,
            name: stock.name,
            price: 0,
            change: 0,
            changePercent: 0,
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
