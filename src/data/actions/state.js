export const loadStock = (data) => {
    return {
        type: "LOAD_STOCK",
        stock: data["Global Quote"],
    };
};
