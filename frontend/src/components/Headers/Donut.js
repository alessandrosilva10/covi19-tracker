import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import { getProducts } from '../../api/apiProduct';

class Donut extends Component {

  constructor(props) {
    super(props);
    var paises = [];
    var mortes = []
    getProducts().then(data => {
      for(let i = 0; i < data.length; i++) {
        paises[i] = data[i].uf;
        mortes[i] = data[i].deaths;
      }
     });
     console.log(paises)
    this.state = {
      options: {},
      series: mortes,
      labels: paises
    }
  }

  render() {
   
    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series} type="donut" width="400" />
      </div>
    );
  }
}

export default Donut;