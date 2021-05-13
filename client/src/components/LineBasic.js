import React from 'react';
import ReactDOM from 'react-dom';
import ReactApexChart from 'react-apexcharts';

class LineBasic extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: "Desktops",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'line',
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },
                title: {
                    text: 'Product Trends by Month',
                    align: 'left'
                },
                grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                }
            }
        };
    }

    componentWillMount = () => {
        this.callApi();
    }

    
    callApi = async () => {
        const response = await fetch('/api/customerChart');
        const body = await response.json();

        this.makeData(body);

        return body;
    }

    makeData = (item) => {
        const arr = item.reduce((acc, cur) => {
        const findItem = acc.find(a => a.ID === cur.ID && a.JOB === cur.JOB && a.COUNT === cur.COUNT);

        if(!findItem) {
            acc.push({
                ID : cur.ID
            ,   JOB : cur.JOB
            ,   COUNT : cur.COUNT
            });
        }
        if(findItem && findItem.COUNT !== cur.COUNT) {
            findItem.ID = cur.ID;
            findItem.JOB = cur.JOB;
            findItem.COUNT = cur.COUNT;
        }
        
        return acc;
        }, [])

        let options = this.state.options;
        options.xaxis.categories = arr.map(c => `${c.JOB}`);
        let series = this.state.series;
        series.data = arr.map(c => `${c.COUNT}`);

        this.setState({
            options : options
        ,   series : series
        })
    }

    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
            </div>
        );
    }
}

ReactDOM.render(React.createElement(LineBasic), document.getElementById('root'));

export default LineBasic;