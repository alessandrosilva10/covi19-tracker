import { API } from '../config';

export const getCovidCountries = async() => {
    return await fetch("http://localhost:8080/api/covidcountries", {
      method: 'GET',
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then(res => res.json())
    .then(res => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    })
}

export const getCovidBrazil = async() => {
  return await fetch("http://localhost:8080/api/covidbrazil", {
    method: 'GET',
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  })
  .then(res => res.json())
  .then(res => {
    return res.data;
  })
  .catch((err) => {
    console.log(err);
  })
}