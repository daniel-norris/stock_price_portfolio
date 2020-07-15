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

    let timestamps = data.t.map(() => data.t.splice(0, 1));
    let open = data.o.map(() => data.o.splice(0, 1));
    let high = data.h.map(() => data.h.splice(0, 1));
    let low = data.l.map(() => data.l.splice(0, 1));
    let current = data.c.map(() => data.c.splice(0, 1));

    let result = timestamps.map((timestamp, index) => {
        return timestamp.concat(open[index], high[index], low[index], current[index]);
    })

    console.log(result);

    return {
        type: "LOAD_CANDLE",
        candle: result,
    };
};
