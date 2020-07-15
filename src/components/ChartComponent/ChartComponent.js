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
                    [1538856000000, 6593.34, 6600, 6582.63, 6600],
                    [1538856100000, 6593.34, 6600, 6582.63, 6600],
                    [1538856200000, 6593.34, 6600, 6582.63, 6600],
                    [1538856300000, 6593.34, 6600, 6582.63, 6600],
                    [1538856400000, 6593.34, 6600, 6582.63, 6600],
                    [1538856500000, 6593.34, 6600, 6582.63, 6600],
                    [1538856600000, 6593.34, 6600, 6582.63, 6600],
                    [1538856700000, 6593.34, 6600, 6582.63, 6600],
                    [1538856800000, 6593.34, 6600, 6582.63, 6600],
                    [1538856900000, 6593.34, 6600, 6582.63, 6600],
                    [1538857000000, 6593.34, 6600, 6582.63, 6600],
                    [1538857100000, 6593.34, 6600, 6582.63, 6600],
                    [1538857200000, 6593.34, 6600, 6582.63, 6600],
                    [1538857300000, 6595.16, 6604.76, 6590.73, 6593.86]
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
                series={this.props.series}
                type="candlestick"
                width="800"
            />
        );
    }
}

export default CandleStickChart;