import * as echarts from 'https://cdn.staticfile.org/echarts/4.3.0/echarts.min.js';

var chartDom = document.getElementsByClassName('current');
var myChart = echarts.init(chartDom);
var option;

option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
    }]
};

option && myChart.setOption(option);