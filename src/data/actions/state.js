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

export const loadCandle = (data) => {
    return {
        type: "LOAD_CANDLE",
        t: data.t,
        o: data.o,
        h: data.h,
        l: data.l,
        c: data.c,
    };
};
