import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import { getCovidBrazil } from '../../api/apiProduct';

class Donut extends Component {

  constructor(props) {
    super(props);

    var uf = [];
    var mortes = [];
    var casos = [];

    getCovidBrazil().then(data => {
      for(let i = 0; i < data.length; i++) {
        uf[i] = data[i].uf;
        mortes[i] = data[i].deaths;
        casos[i] = data[i].cases;
      }
      //this.setState({uf: uf,mortes:mortes});
      this.setState({total_mortes: mortes.reduce(function(acc, val) { return acc + val; }, 0)});
      this.setState({casos: casos.reduce(function(acc, val) { return acc + val; }, 0)});
      setTimeout(() => {  this.setState({status: 1}) }, 3000);
     });

    this.state = {
      options: {},
      series: mortes,
      labels: uf
    }
  }

  render() {

    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
      </div>
    );
  }
}

export default Donut;