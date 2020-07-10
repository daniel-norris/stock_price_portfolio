export const loadStock = (data) => {
    return {
        type: "LOAD_STOCK",
        stock: data,
    };
};

export const loadSymbols = (data) => {
    return {
        type: "LOAD_SYMBOLS",
        symbols: data,
    };
};

export const deleteStock = (data) => {
    return {
        type: "DELETE_STOCK",
        stock: data,
    };
};
