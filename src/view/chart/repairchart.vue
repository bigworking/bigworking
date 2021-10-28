<template>
    <div>
        <div style="margin-left:300px;">
            <div id="app" :style ="note" style="margin-top:40px;">
                <div id="main" style="width: 1000px;height:400px;background-color: rgba(16,32,60,0.5);border-radius: 10px;"></div>
            </div>
        </div>
    </div>
</template>

<script>
import * as echarts from "echarts";
export default {
    name: 'App',
    data(){
        return{
            note: {
            // backgroundImage: "url(" + require("@/assets/logo.png") + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize:'100% 100%',
            marginTop: "5px",
          },
        }
    },
    mounted(){
        this.histogram();
    },
    methods:{
        histogram(){
        let myChart = echarts.init(document.getElementById('main'));
        // 指定图表的配置项和数据
        var option = {
            title: {
            text: '{big|●} {vcolor|ABCD}',
            textStyle: {
              rich: {
                big: {
                  fontSize: 48,
                  color: '#8DEAFB',
                },
                vcolor: {
                  fontSize: 24,
                  color: '#8DEAFB',
                  fontFamily: 'SimSun',
                }
              }
            }
            },
			legend: {
			  right: 100,
            top: 0,
            textStyle: {
              color: '#EFF0F1',
            },
            data: [
              {
                name: 'A',
                icon: 'circle',
              },
              {
                name: 'B',
                icon: 'circle',
              },
              {
                name: 'C',
                icon: 'circle',
              },
              {
                name: 'D',
                icon: 'circle',
              },
            ],
			},
			color: [
            new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#72ddd2'
            }, {
              offset: 1,
              color: '#55b8df'
            }]),
            new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#ae99f3'
            }, {
              offset: 1,
              color: '#73cbfd'
            }]),
            new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#f199ef'
            }, {
              offset: 1,
              color: '#a690fb'
            }]),
            new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#a98ffb'
            }, {
              offset: 1,
              color: '#9357ff'
            }])
          ],
            tooltip: {},

			dataset: {
			// 提供一份数据。
			dimensions: ['城市名称', 'A', 'B', 'C', 'D'],
			source: [
       
            ['永动机',this.randomnum(),this.randomnum(),this.randomnum(),this.randomnum()],
            ['永动机实验型', this.randomnum(),this.randomnum(),this.randomnum(),this.randomnum()],
            ['奶茶机', this.randomnum(),this.randomnum(),this.randomnum(),this.randomnum()],
            ['创可贴生产机', this.randomnum(),this.randomnum(),this.randomnum(),this.randomnum()],
			['水果机', this.randomnum(),this.randomnum(),this.randomnum(),this.randomnum()],
			['豆浆机', this.randomnum(),this.randomnum(),this.randomnum(),this.randomnum()],
            ['充电器', this.randomnum(),this.randomnum(),this.randomnum(),this.randomnum()]
				]
			},
            xAxis: {
			type: 'category',
			axisLine: {
              show: false,
              lineStyle: {
                color: '#46EEF4'
              }
            },
			axisLabel: {
              show: true,
              interval: 0,
              color: '#00f4fc',
              fontSize: 14,
            },
            axisTick: {
              show: false
            },
            triggerEvent: true //将x轴的标签声明为可点击 触发事件
            },
            yAxis: [{
            type: 'value',
            // splitNumber: 5,
            // interval: 400,

            splitLine: {
              show: true,
              lineStyle: {
                color: '#3cb5fc',
                opacity: 0.5
              }
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: 'rgba(60,181,252,0.5)',
              }
            },
            axisTick: {
              show: false
            }
          },
            //右边的y轴
            {
                type: 'value',
                scale: true,
                max: 100,
                min: 0,
                boundaryGap: [0.2, 0.2],
                axisLabel: {
                    formatter: '{value}%'
                },
                splitNumber: 5,
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#46EEF4'
                    }
                },
                axisLine: {
                    show: false,
                    // fontWeight: 'bold',
                    lineStyle: {
                        color: '#2B58A1'
                    }
                },
                axisTick: {
                    show: false
                }
            }
			
			],
            series: [
						{
			type: 'bar',
			itemStyle: {
                barBorderRadius: 6
              },
			},
			{
			type: 'bar',
			itemStyle: {
                barBorderRadius: 6
              },
			},
			{
			type: 'bar',
			itemStyle: {
                barBorderRadius: 6
              },
			},
			{
			type: 'line',
			itemStyle: {
                barBorderRadius: 6
              },
			}
			]
        };
        // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
            // mychart.setoption({},true);
        },
        randomnum(){
          return Math.floor(Math.random()*15);
        },
        }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>