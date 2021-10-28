<template>
    <div>
        <div style="display:flex;">
            <table align="left" style="margin-left:300px;">
                <tr><td style="width:150px;text-align:right;text-align:justify;text-justify:distribute-all-lines;text-align-last:justify;">保养单号</td><td><input v-model="protectno" type="text" readonly style="border: none;outline: none;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
                <tr><td style="width:150px;text-align:right;text-align:justify;text-justify:distribute-all-lines;text-align-last:justify;">保养时间</td><td><input v-model="protecttime" type="text" readonly style="border: none;outline: none;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
                <tr><td style="width:150px;text-align:right;text-align:justify;text-justify:distribute-all-lines;text-align-last:justify;">保养计划编号</td><td><input v-model="protectcode" type="text" readonly style="border: none;outline: none;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
                <tr><td style="width:150px;text-align:right;text-align:justify;text-justify:distribute-all-lines;text-align-last:justify;">保养内容</td><td><input v-model="protectcontent" type="text" readonly style="border: none;outline: none;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
                <tr><td style="width:150px;text-align:right;text-align:justify;text-justify:distribute-all-lines;text-align-last:justify;">保养状态</td><td><input v-model="protectstatue" type="text" readonly style="border: none;outline: none;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
                <tr><td style="width:150px;text-align:right;text-align:justify;text-justify:distribute-all-lines;text-align-last:justify;">保养人员</td><td><input v-model="protectpeople" type="text" readonly style="border: none;outline: none;;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
                <tr><td style="width:150px;text-align:right;text-align:justify;text-justify:distribute-all-lines;text-align-last:justify;">保养费用</td><td><input v-model="protectprice" type="text" readonly style="border: none;outline: none;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
                <tr><td style="width:150px;text-align:right;text-align:justify;text-justify:distribute-all-lines;text-align-last:justify;">保养描述</td><td><textarea v-model="protectdescribe" style="resize:none;width:600px;height:200px;background:rgba(255, 192, 203, 0);"  cols="30" rows="10"></textarea></td></tr>
            </table>
            <p style="margin-top:600px;"></p>
        </div>
        <p style="margin-left:-100px;margin-top:-50px;">
            <el-button type="primary" @click="handleXg" style="margin-left:500px;margin-top:90px;cursor:pointer;">保养说明提交</el-button>
        </p>
    </div>
</template>

<script>
export default {
    data(){
        return{}
    },
    created(){
        this.protectno = this.$route.query.protectno;
    },
    methods:{
        handleXg(){}
    }
}
</script>