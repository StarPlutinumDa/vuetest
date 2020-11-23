<template>
    <div id="main" style="width: 100%;height: 600px;"></div>
</template>

<script>
    import echarts from 'echarts'
    import axios from "axios";

    export default {
        props: ['csvpath'],
        name: "normalline",
        data() {
            return {
                tempcsv: [],
                arr: [],

            }
        },
        computed: {
            option: function () {
                return {
                    backgroundColor: '#f3f3f3',
                    title: {
                        text: '折线图',
                        // subtext:'成交量',
                        x: 'center'
                    },
                    legend: {
                        // orient 设置布局方式，默认水平布局，可选值：'horizontal'（水平） ¦ 'vertical'（垂直）
                        orient: 'horizontal',
                        // x 设置水平安放位置，默认全图居中，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
                        x: 'left',
                        // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
                        y: 'top',
                        data: ['成交量', '成交额', '假设']
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
                        data: this.tempcsv.map(function (item) {
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
                    dataZoom: [
                        // startValue:''
                        {
                            type: 'inside'
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
                            name: '成交量',
                            data: this.tempcsv.map(function (item) {
                                return item['成交量'];
                                // console.log(item['前收盘价'])
                            }),
                            type: 'line',
                            // 设置小圆点消失
                            // 注意：设置symbol: 'none'以后，拐点不存在了，设置拐点上显示数值无效
                            // symbol: 'none',
                            // 设置折线弧度，取值：0-1之间
                            smooth: 0.5,
                            markPoint: {
                                symbol: 'pin',
                                symbolSize: 15,
                                data: [
                                    {
                                        name: '最大值',
                                        type: 'max'
                                    },
                                    {
                                        name: '最小值',
                                        type: 'min'
                                    },

                                ]
                            }
                        },

                        {
                            name: '成交额',
                            data: this.tempcsv.map(function (item) {
                                return item['成交额'];
                                // console.log(item['前收盘价'])
                            }),
                            type: 'line',
                            // 设置折线上圆点大小
                            // symbolSize:1,
                            itemStyle: {
                                normal: {
                                    // 拐点上显示数值
                                    // label : {
                                    //     show: true
                                    // },
                                    borderColor: 'red',  // 拐点边框颜色
                                    lineStyle: {
                                        width: 3,  // 设置线宽
                                        // type:'dotted'  //'dotted'虚线 'solid'实线
                                    }
                                }
                            }
                        },

                    ],

                    color: ['#ff3838', '#FF9F7F', '#FFD700']
                }
            }
        },
        mounted() {
            this.initChart()
        },
        methods: {
            initChart() {
                //请求数据放在tempcsv中

                const path = 'http://127.0.0.1:5000/postdata';
                axios.post(path, {
                    "path": this.csvpath
                })
                    .then((res) => {
                        this.tempcsv = res.data;
                        // console.log(res.data)
                        let myChart = echarts.init(document.getElementById('main'))
                        myChart.setOption(this.option)

                    })
                    .catch((error) => {
                        // eslint-disable-next-line
                        console.error(error);
                    });

            }

        }
    }
</script>

<style scoped>

</style>
