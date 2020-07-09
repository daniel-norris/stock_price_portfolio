import { connect } from "react-redux";
import { getStock, getStockPrice } from "../../data/actions/api";

import Stocks from "./Stocks";

const mapStateToProps = (state) => {
    return {
        stocks: state.stocks,
        portfolio: state.portfolio,
    };
};

const mapDispatchToProps = (dispatch) => ({
    handleLoad: (stock) => dispatch(getStock(stock)),
    handleLoad: (stock) => dispatch(getStockPrice(stock)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Stocks);
