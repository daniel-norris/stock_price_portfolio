import { connect } from "react-redux";
import { getCandle } from "../../data/actions/api";

import CandleStickChart from "./ChartComponent";

const mapStateToProps = (state) => {

    console.log(state.series)
    return {
        series: state.series
    };
};

const mapDispatchToProps = (dispatch) => ({
    handleCandleLoad: () => dispatch(getCandle()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CandleStickChart);
