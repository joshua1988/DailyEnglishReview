'use strict';

var React = require('react-native');
// var RC2 = require('react-chartjs2');
var Button = require('react-native-button');

var {
  Component,
  View,
  StyleSheet
} = React;

var styles = StyleSheet.create({
  // container: {
  //     flex: 1,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     backgroundColor: 'white',
  // },
  // chart: {
  //     width: 200,
  //     height: 200,
  // }
});

class Analysis_Chart extends Component {

  // componentDidMount() {
  //   this.myChart = this.refs['canvas'].getChart();
  //   this.myChart.data.datasets[0].points[2] = 50;
  //   this.myChart.update();
  // }
  // render() {
  //   return <RC2 ref='canvas' data={chartData} options={chartOptions} type='bar' />;
  // }
}

module.exports = Analysis_Chart;
