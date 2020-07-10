import { connect } from "react-redux";
import { getSymbols, getStock } from "../../data/actions/api";

import Search from "./Search";

const mapStateToProps = (state) => {
    return {
        symbols: state.search,
    };
};

const mapDispatchToProps = (dispatch) => ({
    handleLoadSymbols: () => dispatch(getSymbols()),
    handleLoadStock: (stock) => dispatch(getStock(stock)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
