export const loadStock = (state, { stock }) => ({
    ...state,
    stocks: [
        ...state.stocks,
        {
            symbol: stock["01. symbol"],
            price: stock["05. price"],
            change: stock["09. change"],
            changePercent: stock["10. change percent"],
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
