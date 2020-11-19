import React, { Component } from "react";
//import Chart from "react-apexcharts";
import { getCovidCountries } from '../../api/apiProduct';
import 'chart.js'
import { css } from "@emotion/core";
import MoonLoader from "react-spinners/MoonLoader";
import { Chart } from "react-google-charts";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class AwesomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    return (
      <div className="">
      <p style={{marginTop: '20px', marginBottom: '40px', textAlign: 'center'}}>Atualizando as informações.. Por favor aguarde alguns segundos</p>
      <div className="sweet-loading">
        <MoonLoader
          css={override}
          size={250}
          color={"deepskyblue"}
          loading={this.state.loading}
        />
      </div></div>
    );
  }
}

class ChartCountry extends Component {
  constructor(props) {
    super(props);
    var uf = [];
    var mortes = [];
    var casos = [];

    var array = [
      ['País', 'Mortes']
    ];
    getCovidCountries().then(data => {
      console.log(data);
      var teste = [];
      for(let i = 0; i < data.length; i++) {
        teste = [data[i].country, data[i].deaths];
        array.push(teste);
        uf[i] = data[i].uf;
        mortes[i] = data[i].deaths;
        casos[i] = data[i].cases;
      }
      /*for(let i = 0; i < data.length; i++) {
        teste = [data[i].country, data[i].deaths];
        array.push(teste);
      }
      for(let i = 0; i < data.length; i++) {
        uf[i] = data[i].uf;
        mortes[i] = data[i].deaths;
        casos[i] = data[i].cases;
      }*/
      this.setState({total_mortes: mortes.reduce(function(acc, val) { return acc + val; }, 0)});
      this.setState({casos: casos.reduce(function(acc, val) { return acc + val; }, 0)});
      this.setState({dados_api_pais: array});
      
      setTimeout(() => {  this.setState({status: 1}) }, 3000);
     });
     
     this.state = {
      status: 0,
      dados_api_pais: [],
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: uf
        }
      },
      series: [
        {
          name: "Número de mortes",
          data: mortes
        }
      ]
    };
  }
  render() {  
    var data = new Date();
    return (
     
      <div className="app">
        {this.state.status == 0 && <AwesomeComponent />}
        <div className="row">
          <div className="mixed-chart">
            {this.state.status == 1 && 
          /*<Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="900"
            />*/
            <Chart
  width={'950px'}
  height={'500px'}
  chartType="GeoChart"
  data={
    this.state.dados_api_pais
    
  }
  // Note: you will need to get a mapsApiKey for your project.
  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
  mapsApiKey="YOUR_KEY_HERE"
  rootProps={{ 'data-testid': '1' }}
/>
            }
           {this.state.status == 1 && <div>
          <br />
           <span>Total de mortes: {this.state.total_mortes}</span> <br />
           <span>Total de casos: {this.state.casos}</span> <br />
          <span>Informações atualizadas: {data.getHours()} horas e {data.getMinutes()} minutos do horário de Brasília</span></div>}
          </div>
        </div>
      </div>
    );
  }
}

export default ChartCountry;