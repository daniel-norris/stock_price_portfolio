import { connect } from "react-redux";
import { getCandle } from "../../data/actions/api";

import CandleStickChart from "./ChartComponent";

const mapStateToProps = (state) => {
    return {
        t: state.t,
        o: state.o,
        h: state.h,

    };
};

const mapDispatchToProps = (dispatch) => ({
    handleCandleLoad: () => dispatch(getCandle()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CandleStickChart);
