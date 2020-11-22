<template>
    <div id="main" style="width: 900px;height: 600px; left: 200px ; "></div>
</template>

<script>
    import echarts from 'echarts'
    import axios from "axios";
    export default {
        name: "echartest",
        data(){
            return{
                tempcsv:[],
                temparr:[],
                arr:[],

            }
        },
        computed:{
            option:function () {
                return {
                    backgroundColor:'#f3f3f3',
                        title:{
                        text:'K线图',
                            // subtext:'模拟数据',
                            x:'center'
                    },
                    legend: {
                        // orient 设置布局方式，默认水平布局，可选值：'horizontal'（水平） ¦ 'vertical'（垂直）
                        orient: 'horizontal',
                            // x 设置水平安放位置，默认全图居中，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
                            x: 'left',
                            // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
                            y: 'top',
                            data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30']
                    },

                    //  图表距边框的距离,可选值：'百分比'¦ {number}（单位px）
                    grid: {
                        top: '16%',   // 等价于 y: '16%'
                            left: '3%',
                            right: '8%',
                            bottom: '3%',
                            containLabel: true
                    },

                    // 提示框
                    tooltip: {
                        trigger: 'axis'
                    },

                    //工具框，可以选择
                    // toolbox: {
                    //     feature: {
                    //         saveAsImage: {} //下载工具
                    //     }
                    // },

                    xAxis: {
                        name: '日期',
                            type: 'category',
                            axisLine: {
                            lineStyle: {
                                // 设置x轴颜色
                                color: '#093933'
                            }
                        },
                        // 设置X轴数据旋转倾斜
                        axisLabel: {
                            rotate: 30, // 旋转角度
                                interval: 30 //设置X轴数据间隔几个显示一个，为0表示都显示
                        },
                        // boundaryGap值为false的时候，折线第一个点在y轴上
                        boundaryGap: false,
                            // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                        data:this.tempcsv.map(function (item) {
                            return item['交易日期'];
                            // console.log(item['前收盘价'])
                        })
                    },

                    yAxis: {
                        name: '数值',
                            type: 'value',
                            // splitNumber:9,  // 设置y轴刻度间隔个数
                            axisLine: {
                            lineStyle: {
                                // 设置y轴颜色
                                color: '#2c1877'
                            }
                        },
                    },
                    dataZoom:[
                        {
                            type: 'inside',
                            start: 50,
                            end: 100
                        },
                        {
                            show: true,
                            type: 'slider',
                            top: '90%',
                            start: 50,
                            end: 100
                        }
                    ],

                    series: [
                        {
                            name: '日K',
                            type: 'candlestick',
                            data: this.arr,
                            itemStyle: {
                                color: '#ec0000',
                                color0: '#00da3c',
                                borderColor: '#8A0000',
                                borderColor0: '#008F28'
                            },
                            markPoint: {
                                data: [
                                    //最大值
                                    {
                                        name: 'highest value',
                                        type: 'max',
                                        valueDim: 'highest'
                                    },
                                    //最小值
                                    {
                                        name: 'lowest value',
                                        type: 'min',
                                        valueDim: 'lowest'
                                    },
                                    //平均值
                                    {
                                        name: 'average value on close',
                                        type: 'average',
                                        valueDim: 'close'
                                    }
                                ],
                                tooltip: {
                                    formatter: function (param) {
                                        return param.name + '<br>' + (param.data.coord || '');
                                    }
                                }
                            },
                            markLine: {
                                symbol: ['none', 'none'],
                                data: [
                                    [
                                        {
                                            name: 'from lowest to highest',
                                            type: 'min',
                                            valueDim: 'lowest',
                                            symbol: 'circle',
                                            symbolSize: 10,
                                            label: {
                                                show: false
                                            },
                                            emphasis: {
                                                label: {
                                                    show: false
                                                }
                                            }
                                        },
                                        {
                                            type: 'max',
                                            valueDim: 'highest',
                                            symbol: 'circle',
                                            symbolSize: 10,
                                            label: {
                                                show: false
                                            },
                                            emphasis: {
                                                label: {
                                                    show: false
                                                }
                                            }
                                        }
                                    ],
                                    //最低端最小值平行线
                                    {
                                        name: 'min line on close',
                                        type: 'min',
                                        valueDim: 'close'
                                    },
                                    //最大值平行线
                                    {
                                        name: 'max line on close',
                                        type: 'max',
                                        valueDim: 'close'
                                    }
                                ]
                            }
                        },
                        {
                            name: 'MA5',
                            type: 'line',
                            data: this.calculateMA(5),
                            smooth: true,
                            lineStyle: {
                                opacity: 0.5
                            }
                        },
                        {
                            name: 'MA10',
                            type: 'line',
                            data: this.calculateMA(10),
                            smooth: true,
                            lineStyle: {
                                opacity: 0.5
                            }
                        },
                        {
                            name: 'MA20',
                            type: 'line',
                            data: this.calculateMA(20),
                            smooth: true,
                            lineStyle: {
                                opacity: 0.5
                            }
                        },
                        {
                            name: 'MA30',
                            type: 'line',
                            data: this.calculateMA(30),
                            smooth: true,
                            lineStyle: {
                                opacity: 0.5
                            }
                        },


                    ],

                        color: ['#00EE00', '#FF9F7F','#FFD700']
                }
            }
        },
        mounted() {
            this.initChart()
        },
        methods:{
            initChart(){
                //请求数据放在tempcsv中
                const path = 'http://127.0.0.1:5000/postdata';
                axios.post(path,{
                    "path":"sh600303.csv"
                })
                    .then((res) => {
                        this.tempcsv = res.data
                        // console.log(res.data)
                        // console.log(this.tempcsv[0]['开盘价'])
                        for (var i=0;i<this.tempcsv.length;i++){
                            this.temparr=[]
                            this.temparr.push(this.tempcsv[i]['开盘价'])
                            this.temparr.push(this.tempcsv[i]['收盘价'])
                            this.temparr.push(this.tempcsv[i]['最低价'])
                            this.temparr.push(this.tempcsv[i]['最高价'])
                            this.arr.push(this.temparr)
                        }
                        let myChart=echarts.init(document.getElementById('main'))
                        myChart.setOption(this.option)

                    })
                    .catch((error) => {
                        // eslint-disable-next-line
                        console.error(error)
                    });
            },
            calculateMA(dayCount) {
                let result = [];
                for (let i = 0, len = this.arr.length; i < len; i++) {
                    if (i < dayCount) {
                        result.push('-')
                        continue;
                    }
                    let sum = 0;
                    for (let j = 0; j < dayCount; j++) {
                        sum += Number(this.arr[i - j][1])
                    }
                    result.push(sum / dayCount);

        }
        return result;
    }


        }
    }
</script>

<style scoped>

</style>
