<template>
    <div id="main" style="width: 900px;height: 600px; left: 200px"></div>
</template>

<script>
    import echarts from 'echarts'
    export default {
        name: "echartest",
        data(){
            return{
                tempcsv:[
                        {
                            "交易日期": "2016/1/4",
                            "前收盘价": "30.72",
                            "开盘价": "30.9",
                            "成交量": "12173004",
                            "成交额": "355712658",
                            "收盘价": "28.22",
                            "最低价": "28.01",
                            "最高价": "31.05",
                            "股票代码": "sh600340",
                            "股票名称": "华夏幸福"
                        },
                        {
                            "交易日期": "2016/1/5",
                            "前收盘价": "28.22",
                            "开盘价": "27.2",
                            "成交量": "19926157",
                            "成交额": "565770649",
                            "收盘价": "28.46",
                            "最低价": "27.2",
                            "最高价": "29.22",
                            "股票代码": "sh600340",
                            "股票名称": "华夏幸福"
                        },
                        {
                            "交易日期": "2016/1/6",
                            "前收盘价": "28.46",
                            "开盘价": "28.81",
                            "成交量": "11782728",
                            "成交额": "336872376",
                            "收盘价": "28.79",
                            "最低价": "28.21",
                            "最高价": "28.98",
                            "股票代码": "sh600340",
                            "股票名称": "华夏幸福"
                        },
                        {
                            "交易日期": "2016/1/7",
                            "前收盘价": "28.79",
                            "开盘价": "28.47",
                            "成交量": "3802400",
                            "成交额": "104154501",
                            "收盘价": "26.42",
                            "最低价": "26.2",
                            "最高价": "28.47",
                            "股票代码": "sh600340",
                            "股票名称": "华夏幸福"
                        },
                        {
                            "交易日期": "2016/1/8",
                            "前收盘价": "26.42",
                            "开盘价": "27.28",
                            "成交量": "16844030",
                            "成交额": "458695310",
                            "收盘价": "27.45",
                            "最低价": "26.0",
                            "最高价": "27.99",
                            "股票代码": "sh600340",
                            "股票名称": "华夏幸福"
                        },
                        {
                            "交易日期": "2016/1/11",
                            "前收盘价": "27.45",
                            "开盘价": "27.0",
                            "成交量": "19363290",
                            "成交额": "529807923",
                            "收盘价": "27.61",
                            "最低价": "26.65",
                            "最高价": "27.87",
                            "股票代码": "sh600340",
                            "股票名称": "华夏幸福"
                        },
                        {
                            "交易日期": "2016/1/12",
                            "前收盘价": "27.61",
                            "开盘价": "27.3",
                            "成交量": "14216149",
                            "成交额": "397754198",
                            "收盘价": "28.01",
                            "最低价": "27.3",
                            "最高价": "28.5",
                            "股票代码": "sh600340",
                            "股票名称": "华夏幸福"
                        }

                ],
                arr:[],

            }
        },
        computed:{
            option:function () {
                return {
                    backgroundColor:'#FFF0F5',
                        title:{
                        text:'折线图',
                            subtext:'模拟数据',
                            x:'center'
                    },
                    legend: {
                        // orient 设置布局方式，默认水平布局，可选值：'horizontal'（水平） ¦ 'vertical'（垂直）
                        orient: 'horizontal',
                            // x 设置水平安放位置，默认全图居中，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
                            x: 'left',
                            // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
                            y: 'top',
                            data: ['预期','实际','假设']
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
                                color: '#912CEE'
                            }
                        },
                        // 设置X轴数据旋转倾斜
                        axisLabel: {
                            rotate: 30, // 旋转角度
                                interval: 0  //设置X轴数据间隔几个显示一个，为0表示都显示
                        },
                        // boundaryGap值为false的时候，折线第一个点在y轴上
                        boundaryGap: false,
                            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },

                    yAxis: {
                        name: '数值',
                            type: 'value',
                            min:0, // 设置y轴刻度的最小值
                            max:1800,  // 设置y轴刻度的最大值
                            splitNumber:9,  // 设置y轴刻度间隔个数
                            axisLine: {
                            lineStyle: {
                                // 设置y轴颜色
                                color: '#87CEFA'
                            }
                        },
                    },
                    dataZoom:{
                        // startValue:''
                        type: 'inside'
                    },

                    series: [
                        {
                            name: '预期',
                            data: [820, 932, 301, 1434, 1290, 1330, 1320],
                            type: 'line',
                            // 设置小圆点消失
                            // 注意：设置symbol: 'none'以后，拐点不存在了，设置拐点上显示数值无效
                            // symbol: 'none',
                            // 设置折线弧度，取值：0-1之间
                            smooth: 0.5,
                        },

                        {
                            name: '实际',
                            data: [620, 732, 941, 834, 1690, 1030, 920],
                            type: 'line',
                            // 设置折线上圆点大小
                            symbolSize:8,
                            itemStyle:{
                                normal:{
                                    // 拐点上显示数值
                                    label : {
                                        show: true
                                    },
                                    borderColor:'red',  // 拐点边框颜色
                                    lineStyle:{
                                        width:5,  // 设置线宽
                                        type:'dotted'  //'dotted'虚线 'solid'实线
                                    }
                                }
                            }
                        },

                        {
                            name: '假设',
                            // data: [120, 232, 541, 134, 290, 130, 120],
                            data:this.tempcsv.map(function (item) {
                                return item['前收盘价'];
                                // console.log(item['前收盘价'])
                            }),
                            // data: this.arr,
                            type: 'line',
                            // 设置折线上圆点大小
                            symbolSize:10,
                            // 设置拐点为实心圆
                            symbol:'circle',
                            itemStyle: {
                                normal: {
                                    // 拐点上显示数值
                                    label : {
                                        show: true
                                    },
                                    lineStyle:{
                                        // 使用rgba设置折线透明度为0，可以视觉上隐藏折线
                                        color: 'rgba(0,0,0,0)'
                                    }
                                }
                            }
                        }
                    ],

                        color: ['#00EE00', '#FF9F7F','#FFD700']
                }
            }
        },
        mounted() {
            this.initArr()
            this.initChart()
        },
        methods:{
            initArr(){
                for (var i=0;i<this.tempcsv.length;i++){
                    this.arr.push(Number(this.tempcsv[i]['前收盘价']))
                }
            },
            initChart(){
                let myChart=echarts.init(document.getElementById('main'))
                myChart.setOption(this.option)
            }

        }
    }
</script>

<style scoped>

</style>
