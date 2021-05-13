import React from "react";
import ReactDom from 'react-dom';
import BasicChart from './BasicChart';
import LineBasic from './LineBasic';

class Chart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series : [{
                name : "숫자",
                data : []
            }]
            ,
            options : {
                chart : {
                    height : 350
                ,   type : 'line'
                ,   zoom : {
                        enabled : false
                    }
                }
                ,
                dataLabels : {
                    enabled : false
                }
                ,
                stroke : {
                    curve : 'straight'
                }
                ,
                title : {
                    text : '직업 분포도'
                ,   align : 'center'
                }
                ,
                grid : {
                    row : {
                        colors : ['#f3f3f3', 'transparent']
                    ,   opacity : 0.5
                    }
                }
                ,
                xaxis : {
                    categories : []
                }
            },
        };
    }

    componentWillMount() {
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
        //return <BasicChart options={this.state.options} series={this.state.series} />;
        return <LineBasic />;
    }
}

ReactDom.render(<Chart />, document.getElementById('root'));

export default Chart;