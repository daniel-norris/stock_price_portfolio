const loadStock = (state, { stock }) => ({
    ...state,
    stocks: [...state.stocks, { stock }],
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
