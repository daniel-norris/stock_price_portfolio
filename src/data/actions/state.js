export const loadStock = (data) => {
    console.log(data);
    return {
        type: "LOAD_STOCK",
        stock: data,
    };
};
