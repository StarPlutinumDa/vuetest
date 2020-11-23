<template>
    <div class="container">
        <div class="side">
            <div>
                <ul>
                    <li class="fileName" v-for="{path} in msg"
                        @click="dealclick(path)"
                        :key="path">
                        {{path}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Ping',
        data() {
            return {
                msg:[]
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
                console.log(path)
            }
        },
        created() {
            this.getMessage();
        },
    };
</script>
<style scoped>

    .fileName {
        display: block;
        color: #5a5a5a;
        padding: 2px 0;
        cursor: pointer;
    }

    .fileName:hover {
        color: violet;
    }

    .side {
        overflow: hidden;
    }


</style>
