import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import Search from "../Search/Search";

class Stocks extends Component {
    componentDidMount() {
        this.props.portfolio.map((stock, index) => {
            return this.props.handleLoad(stock);
        });
    }

    render() {
        const { stocks } = this.props;

        return (
            <div className="stocks">
                <Search />

                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell align="right">Symbol</TableCell>
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Change</TableCell>
                                <TableCell align="right">% Change</TableCell>
                                <TableCell align="right">Market Cap.</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {stocks.map((stock, index) => (
                                <TableRow key={index}>
                                    <TableCell
                                        component="th"
                                        scope="row"
                                        align="center"
                                    >
                                        <img
                                            className="stock__img"
                                            src={stock.logo}
                                        />
                                    </TableCell>
                                    <TableCell align="right">
                                        {stock.symbol}
                                    </TableCell>
                                    <TableCell align="right">
                                        {stock.name}
                                    </TableCell>
                                    <TableCell align="right">?</TableCell>
                                    <TableCell align="right">?</TableCell>
                                    <TableCell align="right">?</TableCell>
                                    <TableCell align="right">
                                        {stock.marketCap}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        );
    }
}

export default Stocks;
