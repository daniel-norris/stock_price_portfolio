import React from "react";
// import Chip from "@material-ui/core/Chip";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

export default class Tags extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
        };
        this.handleStockSelect = this.handleStockSelect.bind(this);
    }

    componentDidMount() {
        this.props.handleLoad();
    }

    handleStockSelect = (event, values) => {
        this.setState(
            {
                tags: values,
            },
            () => {
                // This will output an array of objects
                // given by Autocompelte options property.
                console.log(this.state.tags);
            }
        );
    };

    render() {
        const { symbols } = this.props;

        return (
            <div style={{ width: 250 }}>
                <Autocomplete
                    options={symbols}
                    getOptionLabel={(option) => option.symbol}
                    defaultValue={symbols[13]}
                    onChange={this.handleStockSelect}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="standard"
                            label="Add"
                            placeholder="Choose a new stock..."
                            margin="normal"
                            fullWidth
                        />
                    )}
                />
            </div>
        );
    }
}
