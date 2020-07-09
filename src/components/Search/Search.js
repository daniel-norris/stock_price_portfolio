import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

class Search extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.handleLoad();
    }

    render() {
        const { symbols } = this.props;

        return (
            <div style={{ width: 300 }}>
                <Autocomplete
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    options={symbols.map((stock) => stock.symbol)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Search"
                            margin="normal"
                            variant="outlined"
                            InputProps={{
                                ...params.InputProps,
                                type: "search",
                            }}
                        />
                    )}
                />
            </div>
        );
    }
}

export default Search;
