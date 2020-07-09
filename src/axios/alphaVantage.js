// import the library version of axios
import axios from "axios";

// create a version of axios with useful defaults
export default axios.create({
    baseURL: "https://www.alphavantage.co",
    headers: {
        // make sure we get JSON back
        Accept: "application/json",
        Authorization: "Bearer L8LCCP3KOTLVEQ6A",
    },
});
