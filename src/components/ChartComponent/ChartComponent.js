import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: false,
        legendPosition: 'top',
        location: 'City'
    }

    componentDidMount() {
        this.props.handleCandleLoad();
    }

    render() {

        console.log(this.props.chartData);

        return (
            <div className="chart">

                <Line
                    data={this.props.chartData}
                    height={500}
                    options={{
                        maintainAspectRatio: false,
                        title: {
                            display: this.props.displayTitle,
                            text: 'Stock Prices for ' + this.props.selectedStock,
                            fontSize: 25
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        },
                        layout: {
                            padding: {
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0
                            }
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    // Include a dollar sign in the ticks
                                    callback: function (value, index, values) {
                                        return '$' + value;
                                    }
                                }
                            }],
                            xAxes: [{
                                ticks: {
                                    maxTicksLimit: 20
                                }
                            }]
                        }
                    }}

                />

            </div>
        )
    }
}

export default Chart;