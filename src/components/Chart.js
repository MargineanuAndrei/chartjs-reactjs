import React, { Component } from 'react'
import { Bar,Line,Pie } from 'react-chartjs-2';

class Chart extends Component {

  constructor(props){
    super(props);
    this.state = {
      chartData: this.props.chartData,
      location: this.props.location
    }
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'bottom',
    fontSize: 25
  }

  render() {
    const { displayLegend, displayTitle, legendPosition, fontSize, location } = this.props;
    const { chartData } = this.state;
    return (
      <div className='chart'>
        <Bar 
          data={chartData}
          options={{
            scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
            },
            title: {
              display: displayTitle,
              text: 'Orase mari in '+location,
              fontSize: fontSize
            },
            legend: {
              display: displayLegend,
              position: legendPosition
            }
          }}
        />

        <Pie 
          data={chartData}
          options={{
            title: {
              display: displayTitle,
              text: 'Orase mari in Modova',
              fontSize: fontSize
            },
            legend: {
              display: displayLegend,
              position: legendPosition
            }
          }}
        />


        <Line 
          data={chartData}
          options={{
            title: {
              display: displayTitle,
              text: 'Orase mari in Modova',
              fontSize: fontSize
            },
            legend: {
              display: displayLegend,
              position: legendPosition
            }
          }}
        />
      </div>
    );
  }
}

export default Chart;