import { connect } from "react-redux";
import { getCandle } from "../../data/actions/api";

import CandleStickChart from "./ChartComponent";

const mapStateToProps = (state) => {

    return {
        chartData: state.chartData,
        selectedStock: state.selectedStock,
    };
};

const mapDispatchToProps = (dispatch) => ({
    handleCandleLoad: () => dispatch(getCandle()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CandleStickChart);
