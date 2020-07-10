import { connect } from "react-redux";
import { getStock } from "../../data/actions/api";
import { deleteStock } from "../../data/actions/state";

import Stocks from "./Stocks";

const mapStateToProps = (state) => {
    return {
        stocks: state.stocks,
        portfolio: state.portfolio,
    };
};

const mapDispatchToProps = (dispatch) => ({
    handleLoad: (stock) => dispatch(getStock(stock)),
    handleDelete: (stock) => dispatch(deleteStock(stock)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Stocks);
