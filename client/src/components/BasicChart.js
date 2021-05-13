import React from 'react';
import ReactApexChart from 'react-apexcharts';

class BasicChart extends React.Component {
    render() {
        return <ReactApexChart options={this.props.options} series={this.props.series} type="line" height={350} />
    }
}

export default BasicChart;