import React, { Component, useState } from "react";
import Chart from "react-apexcharts";
import { getCovidBrazil } from '../../api/apiProduct';
import 'chart.js'
import { css } from "@emotion/core";
import MoonLoader from "react-spinners/MoonLoader";
import { FormControlLabel, FormControl, FormLabel, RadioGroup, Radio } from '@material-ui/core';
import Donut from './Donut';

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

class ChartBrazil extends Component {
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
      status: 0,
      uf: '',
      mortes: '',
      checked: 'line',
      seriesdonut: mortes,
      chartOptions: {
        labels: uf
      },
      fill: {
        type: 'gradient',
      },
      dados_api_pais: [],
      optionsdonut: {},
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
      ],
    };
  }
  
  handleChange = (event) => {
    this.setState({checked: event.target.value});;
    console.log(event.target.target)
  };

  render() {  
    var data = new Date();
    return (
      <div className="app">
        {this.state.status == 0 && <AwesomeComponent />}
        {this.state.status == 1 && <div style={{float: 'right'}}className="row">
        <div>
        <FormControl component="fieldset">
            <FormLabel component="legend">Tipo do gráfico</FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={this.state.checked} onChange={this.handleChange}>
                <FormControlLabel value="line" control={<Radio />} label="Gráfico em Linha" />
                <FormControlLabel value="donut" control={<Radio />} label="Gráfico em Rosquinha" />
                <FormControlLabel value="bar" control={<Radio />} label="Gráfico em Barra" />
            </RadioGroup>
        </FormControl>
        </div>
        </div>}
        <div className="row">

          {this.state.status == 1 && this.state.checked == 'line' &&
          <div className="mixed-chart"> && 
          <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="850"
            />
            <div>
            <br />
             <span>Total de mortes: {this.state.total_mortes}</span> <br />
             <span>Total de casos: {this.state.casos}</span> <br />
            <span>Informações atualizadas: {data.getHours()} horas e {data.getMinutes()} minutos do horário de Brasília</span>
            </div>
            </div>
          }
          {this.state.status == 1 && this.state.checked == 'donut' &&
            <div className="donut">
            <Chart options={this.state.chartOptions} series={this.state.seriesdonut} type="donut" width="700" />
            </div>
          }
          {this.state.status == 1 && this.state.checked == 'bar' &&
                 <div className="mixed-chart">
                 <Chart
                   options={this.state.options}
                   series={this.state.series}
                   type="bar"
                   width="900"
                 />
               </div>
          }
        </div>
      </div>
    );
  }
}

export default ChartBrazil;
