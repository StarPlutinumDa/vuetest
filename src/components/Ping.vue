<template>
    <div class="container">
        <div class="side">
            <div class="file-list">
                <ul>
                    <li class="fileName" v-for="{path} in msg"
                        @click="dealclick(path)"
                        :key="path">
                        {{path}}
                    </li>
                </ul>
            </div>
        </div>
        <div class="chart line-chart">
            <normalline v-if="flag" ref="linechart" :csvpath="thispath"/>
        </div>
        <div class="chart k-chart">
            <echartest v-if="flag" ref="klinechart" :csvpath="thispath"/>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import normalline from "./normalline";
    import echartest from "./echartest";

    export default {
        name: 'Ping',
        components: {echartest, normalline},
        data() {
            return {
                msg:"sh600297.csv",
                thispath:"sh600297.csv",
                flag:true
            };
        },
        methods: {
            getMessage() {
                const path = 'http://127.0.0.1:5000/getfilelist';
                axios.get(path)
                    .then((res) => {
                        this.msg = res.data;
                    })
                    .catch((error) => {
                        // eslint-disable-next-line
                        console.error(error);
                    });
            },
            dealclick(path){
                this.flag=false
                this.thispath = path
                setTimeout(()=>{
                    this.flag=true
                    // this.$refs['linechart'].initChart()
                    // this.$refs['klinechart'].initChart()
                },3)
            }
        },
        created() {
            this.getMessage();
        },
    };
</script>
<style scoped>
    .container {
        display: flex;
    }
    .side {
        flex: 2;
        overflow: scroll;
        height: 600px;
    }
    .chart {
        display: block;
        flex: 6;
    }
    .file-list {
        margin: auto;
    }
    ul {
        padding: 0;
    }


    .fileName {
        display: block;
        color: #5a5a5a;
        padding: 2px 0;
        cursor: pointer;
    }

    .fileName:hover {
        color: rgba(238, 130, 238, 0.99);
    }

    .side::-webkit-scrollbar {
        /*滚动条整体样式*/
        width : 6px;  /*高宽分别对应横竖滚动条的尺寸*/
        height: 0;
    }
    .side::-webkit-scrollbar-thumb {
        /*滚动条里面小方块*/
        border-radius   : 10px;
        background-color: skyblue;
        background-image: -webkit-linear-gradient(
                45deg,
                rgba(255, 255, 255, 0.2) 25%,
                transparent 25%,
                transparent 50%,
                rgba(255, 255, 255, 0.2) 50%,
                rgba(255, 255, 255, 0.2) 75%,
                transparent 75%,
                transparent
        );
    }
    .side::-webkit-scrollbar-track {
        /*滚动条里面轨道*/
        box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
        background   : #ededed;
        border-radius: 10px;
    }



</style>
