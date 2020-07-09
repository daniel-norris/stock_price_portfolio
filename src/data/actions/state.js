export const loadStock = (data) => {
    return {
        type: "LOAD_STOCK",
        stock: data,
    };
};

export const loadStockPrice = (data) => {
    return {
        type: "LOAD_STOCK_PRICE",
        stock: data,
    };
};
