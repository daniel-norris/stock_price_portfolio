import { connect } from "react-redux";
import { getCandle } from "../../data/actions/api";

import CandleStickChart from "./ChartComponent";

const mapStateToProps = (state) => {

    console.log(state.t);

    return {
        series: [{
            data: [
                [
                    state.t.map((timescale) => timescale),
                    state.o.map((open) => open),
                    state.h.map((high) => high),
                    state.l.map((low) => low),
                    state.c.map((close) => close)
                ],
            ]
        }]
    };
};

const mapDispatchToProps = (dispatch) => ({
    handleCandleLoad: () => dispatch(getCandle()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CandleStickChart);
