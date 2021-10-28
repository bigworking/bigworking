<template>
    <div>
        <div style="display:flex;">
            <table align="left" style="margin-left:300px;">
                <tr><td style="width:150px;text-align:right;text-align:justify;text-justify:distribute-all-lines;text-align-last:justify;">维修单号</td><td><input v-model="orderno" type="text" readonly style="border: none;outline: none;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
                <tr><td style="width:150px;text-align:right;text-align:justify;text-justify:distribute-all-lines;text-align-last:justify;">维修填报时间</td><td><input v-model="ordertime" type="text" style="border-radius: 6px;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
                <tr><td style="width:150px;text-align:right;text-align:justify;text-justify:distribute-all-lines;text-align-last:justify;">维修上报人</td><td><input v-model="ordername" type="text" style="border-radius: 6px;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
                <tr><td style="width:150px;text-align:right;text-align:justify;text-justify:distribute-all-lines;text-align-last:justify;">故障设备</td><td><input v-model="repairdevice" type="text" style="border-radius: 6px;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
                <tr><td style="width:150px;text-align:right;text-align:justify;text-justify:distribute-all-lines;text-align-last:justify;">故障描述</td><td><input v-model="issuedescipt" type="text" style="border-radius: 6px;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
                <tr><td style="width:150px;text-align:right;text-align:justify;text-justify:distribute-all-lines;text-align-last:justify;">维修状态</td><td><input v-model="repairstatus" type="text" style="border-radius: 6px;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
                <tr><td style="width:150px;text-align:right;text-align:justify;text-justify:distribute-all-lines;text-align-last:justify;">维修人员</td><td><input v-model="repairpeople" type="text" style="border-radius: 6px;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
                <tr><td style="width:150px;text-align:right;text-align:justify;text-justify:distribute-all-lines;text-align-last:justify;">维修费用</td><td><input v-model="repairtotal" type="text" style="border-radius: 6px;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
                <tr><td style="width:150px;text-align:right;text-align:justify;text-justify:distribute-all-lines;text-align-last:justify;">维修描述</td><td><textarea v-model="repairdescipt" style="resize:none;width:600px;height:200px;background:rgba(255, 192, 203, 0);"  cols="30" rows="10"></textarea></td></tr>
            </table>
            <p style="margin-top:350px;"></p>
        </div>
        <p style="margin-left:-100px;margin-top:-50px;">
            <el-button type="primary" @click="handleXg" style="margin-left:500px;margin-top:90px;cursor:pointer;">维修说明上报</el-button>
        </p>
    </div>
</template>

<script>
export default {
    data(){
        return{}
    },
    created(){
        this.orderno = this.$route.query.orderno;
    },
    methods:{
        handleXg(){}
    }
}
</script>