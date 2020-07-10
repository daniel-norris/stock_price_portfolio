import React from "react";
// import Chip from "@material-ui/core/Chip";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class Tags extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stock: {},
        };
        this.handleStockSelect = this.handleStockSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.handleLoadSymbols();
    }

    handleStockSelect = (event, value) => {
        this.setState(
            {
                stock: value,
            },
            () => {
                // This will output an array of objects
                // given by Autocompelte options property.
                console.log(this.state.stock);
            }
        );
    };

    handleSubmit() {
        this.props.handleLoadStock();
    }

    render() {
        const { symbols } = this.props;

        return (
            <div
                style={{
                    width: 150,
                    display: "flex",
                    alignItems: "flex-end",
                }}
            >
                <Autocomplete
                    options={symbols}
                    getOptionLabel={(option) => option.symbol}
                    // defaultValue={symbols[13]}
                    onChange={this.handleStockSelect}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="standard"
                            label="Search"
                            placeholder=""
                            margin="normal"
                            fullWidth
                        />
                    )}
                />
                <div>
                    <Button
                        style={{ margin: "0 0 .5rem 1rem" }}
                        variant="contained"
                        // color="primary"
                        onClick={this.handleSubmit}
                    >
                        Add
                    </Button>
                </div>
             
            </div>
        );
    }
}
