<template>
  <div style="margin-left:100px;">
    <div id="main" style="width: 1500px;height:600px;"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data(){
    return{}
  },
  mounted(){
    this.bigchart();
  },
  methods:{
    bigchart(){
      var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'a' },
        { value: 735, name: 'b' },
        { value: 580, name: 'c' },
        { value: 484, name: 'd' },
        { value: 300, name: 'e' }
      ]
    }
  ]
};
myChart.setOption(option);
    }
  }
}
</script>