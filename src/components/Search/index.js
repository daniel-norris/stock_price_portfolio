import { connect } from "react-redux";
import { getSymbols } from "../../data/actions/api";

import Search from "./Search";

const mapStateToProps = (state) => {
    return {
        symbols: state.symbols,
    };
};

const mapDispatchToProps = (dispatch) => ({
    handleLoad: () => dispatch(getSymbols()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
