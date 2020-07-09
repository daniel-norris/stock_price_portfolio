import React from "react";
import TextField from "@material-ui/core/TextField";

const Search = () => (
    <form style={{ margin: "1rem 0" }} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Search" variant="outlined" />
    </form>
);

export default Search;
