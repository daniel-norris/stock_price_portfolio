
// import candleData from '../../json/candle.json';

import React, { Component } from "react";
import Chart from "react-apexcharts";

class CandleStickChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: ""
                }
            },
            series: [{
                data: [
                    [1538856800000, 6593.34, 6600, 6582.63, 6600],
                    [1538856900000, 6595.16, 6604.76, 6590.73, 6593.86],
                    [1538857000000, 6595.16, 6604.76, 6590.73, 6593.86],
                    [1538857100000, 6595.16, 6604.76, 6590.73, 6593.86],
                    [1538857200000, 6595.16, 6604.76, 6590.73, 6593.86],
                    [1538857300000, 6595.16, 6604.76, 6590.73, 6593.86],
                    [1538857400000, 6595.16, 6604.76, 6590.73, 6593.86],
                    [1538857500000, 6595.16, 6604.76, 6590.73, 6593.86],
                    [1538857600000, 6595.16, 6604.76, 6590.73, 6593.86],
                    [1538857700000, 6595.16, 6604.76, 6590.73, 6593.86],
                    [1538857800000, 6595.16, 6604.76, 6590.73, 6593.86],
                    [1538857900000, 6595.16, 6604.76, 6590.73, 6593.86],
                    [1538858000000, 6595.16, 6604.76, 6590.73, 6593.86],
                    [1538858100000, 6595.16, 6604.76, 6590.73, 6593.86],
                    [1538858200000, 6595.16, 6604.76, 6590.73, 6593.86],
                    [1538858300000, 6595.16, 6604.76, 6590.73, 6593.86],
                    [1538858400000, 6595.16, 6604.76, 6590.73, 6593.86],
                ]
            }]
        };
    }

    componentDidMount() {
        this.props.handleCandleLoad();
    }

    render() {

        return (
            <Chart
                options={this.state.options}
                series={this.state.series}
                type="candlestick"
                width="500"
            />
        );
    }
}

export default CandleStickChart;