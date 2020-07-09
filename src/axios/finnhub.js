// import the library version of axios
import axios from "axios";

// create a version of axios with useful defaults
export default axios.create({
    baseURL: "https://finnhub.io/api/v1",
    headers: {
        // make sure we get JSON back
        Accept: "application/json",
        Authorization: "Bearer bs0fsbfrh5rbvs9fmsqg",
    },
});
