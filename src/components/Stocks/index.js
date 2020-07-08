import { connect } from "react-redux";
import { getStock } from "../../data/actions/api";

import Stocks from "./Stocks";

const mapStateToProps = (state) => {
    return {
        stocks: state.stocks,
    };
};

const mapDispatchToProps = (dispatch) => ({
    handleLoad: () => dispatch(getStock()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Stocks);
