import React, { Component } from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {readChart} from '../js/actions/index';
import {connect} from "react-redux";
const mapToStateProps = state =>{
    return{ 
        chartData: state.chartData
    };
};
function mapDispatchToProps(dispatch)
  {
    return {
        readChart: (payload) => dispatch(readChart(payload))  
    };
  }
class SalesCharts extends Component {
    constructor(props)
    {
        super(props);
        let aSales = [];
        let aCategories = [];
        if(props.chartData.products !== undefined){
        for (let i = 0; i<props.chartData.products.length; i++)
        {
            aSales.push(props.chartData.products[i].sales);
            aCategories.push(props.chartData.products[i].category);
        }
        }
        this.state = {
            barOptions : {
                chart: {
                  type: 'bar'
                },
                title: {
                  text: 'Bar chart'
                },
                xAxis: {
                    categories: aCategories
                },
                series: [
                  {
                    data: aSales
                  }
                ]
              },
              pieOptions : {
                chart: {
                  type: 'pie'
                },
                title: {
                  text: 'Pie chart'
                },
                xAxis: {
                    categories: aCategories
                },
                plotOptions: {
                    dataLabels: {
                        formatter: function() {
                          var sliceIndex = this.point.index;
                          var sliceName = this.series.chart.axes[0].categories[sliceIndex];
                          return sliceName
                        }
                      }
                    },
                series: [
                  {
                    data: aSales
                  }
                ]
              }
        }
    }

    render() {
        return (
            <div>
               <HighchartsReact highcharts={Highcharts} options={this.state.barOptions} />
               <HighchartsReact highcharts={Highcharts} options={this.state.pieOptions} /> 
            </div>
        )
    }
}
const SalesChart = connect(mapToStateProps,mapDispatchToProps)(SalesCharts);
export default SalesChart;
