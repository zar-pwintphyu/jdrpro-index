import axios from 'axios';
import moment from 'moment';
export const API_URL = 'https://api.coindesk.com/v1/bpi';

export default class Bitcoin {
  static fetchPrice(callback) {
    return axios.get(API_URL + '/currentprice.json')
      .then(response => {
        callback(Math.round(response.data.bpi.USD.rate_float * 100) / 100);
        
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  static fetchPrice1(callback) {
    return axios.get(API_URL + '/currentprice.json')
      .then(response => {
        callback(Math.max(response.data.bpi.USD.rate_float * 100) / 100);
        
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  static fetchPrice2(callback) {
    return axios.get(API_URL + '/currentprice.json')
      .then(response => {
        callback(Math.min(response.data.bpi.USD.rate_float * 100) / 100);
        
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  static fetchPrice3(callback) {
    return axios.get(`https://api.coindesk.com/v1/bpi/historical/currentprice.json?start=${moment(new Date( )).subtract(1, 'days')
    .format('YYYY-MM-DD')}&end=${moment(new Date()).format('YYYY-MM-DD')}`)
    .then(response => {
      callback(response.data.bpi);
    })
    .catch(function (error) {
      console.log(error);
    });
}
  

  static fetchHistory(callback) {
    return axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${moment(new Date( )).subtract(1, 'week')
      .format('YYYY-MM-DD')}&end=${moment(new Date()).format('YYYY-MM-DD')}`)
      .then(response => {
        callback(response.data.bpi);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
