import React, { Component } from 'react';
import Chart from './Chart.js';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      chartData: {}
    };
  }

  componentWillMount(){
    this.getChart();
  }

  getChart(){
    this.setState({
      chartData: {
        labels: ['Drochia', 'Chisinau', 'Lipcani', 'Anenii Noi', 'Balti', 'Soroca', 'Leova'],
        datasets: [
          {
            label: 'Populatie',
            data: [
              100000,
              550000,
              80000,
              130000,
              280000,
              150000,
              300000
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(153, 102, 255, 0.6)',
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div>
        <Chart location="Moldova" chartData={this.state.chartData}/>
      </div>
    );
  }
}

export default App;
