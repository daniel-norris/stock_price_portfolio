import moment from 'moment';

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

export const apex = (data) => {

    let timestamps = data.t.map(() => data.t.splice(0, 1));
    let open = data.o.map(() => data.o.splice(0, 1));
    let high = data.h.map(() => data.h.splice(0, 1));
    let low = data.l.map(() => data.l.splice(0, 1));
    let current = data.c.map(() => data.c.splice(0, 1));

    let result = timestamps.map((timestamp, index) => {
        return timestamp.concat(open[index], high[index], low[index], current[index]);
    })

    result = result.splice(1, 190);

    console.log(result);

    return {
        type: "LOAD_CANDLE",
        candle: result,
    };
};

export const loadCandle = (data) => {

    let time = data.t.map((timestamp) => moment.unix(timestamp).format("h:mmA"));

    console.log(time);

    return {
        type: "LOAD_CANDLE",
        timestamps: time,
        price: data.c
    };
};
