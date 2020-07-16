import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import Search from "../Search/index";

class Stocks extends Component {
    constructor(props) {
        super(props);
        this.state = { stocks: [] };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        // load stock data
        this.props.portfolio.map((stock, index) => {
            return this.props.handleLoad(stock);
        });
    }

    handleClick(i) {
        console.log(this.props.stocks);
        let stocks = [...this.props.stocks];
        stocks.splice(i, 1);
        this.props.handleDelete(stocks);
    }

    render() {
        const { stocks } = this.props;

        return (
            <div className="stocks__container">

                <div className="stocks">
                    <Search />

                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right"></TableCell>
                                    <TableCell align="right">Symbol</TableCell>
                                    <TableCell align="right">Name</TableCell>
                                    <TableCell align="right">Price</TableCell>
                                    <TableCell align="right">Change</TableCell>
                                    <TableCell align="right">% Change</TableCell>
                                    <TableCell align="right">Market Cap.</TableCell>
                                    <TableCell align="right"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {stocks.map((stock, i) => (
                                    <TableRow key={i}>
                                        <TableCell align="right">
                                            <img
                                                className="stock__img"
                                                src={stock.logo}
                                                alt="stock logo"
                                            />
                                        </TableCell>
                                        <TableCell align="right">
                                            {stock.symbol}
                                        </TableCell>
                                        <TableCell align="right">
                                            {stock.name}
                                        </TableCell>
                                        <TableCell align="right">
                                            {stock.price}
                                        </TableCell>
                                        <TableCell align="right">
                                            {stock.price - stock.previousPrice}
                                        </TableCell>
                                        <TableCell align="right">
                                            {((stock.price - stock.previousPrice) /
                                                stock.price) *
                                                100}
                                        </TableCell>
                                        <TableCell align="right">
                                            {stock.marketCap}
                                        </TableCell>
                                        <TableCell align="right">
                                            <div>
                                                <Button
                                                    style={{ margin: "0 0 .5rem 1rem" }}
                                                    variant="contained"
                                                    color="secondary"
                                                    onClick={(i) => this.handleClick(i)}
                                                >
                                                    Del
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        );
    }
}

export default Stocks;
