<template>
    <div>
        <div>
            <table align="left" style="margin-left:300px;">
                <tr><td style="width:150px;text-align:right;text-align:justify;text-justify:distribute-all-lines;text-align-last:justify;">保养单号</td><td><input v-model="protectno" type="text" readonly style="border: none;outline: none;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
                <tr><td style="width:150px;text-align:right;text-align:justify;text-justify:distribute-all-lines;text-align-last:justify;">保养时间</td><td><input v-model="protecttime" type="text" readonly style="border: none;outline: none;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
                <tr><td style="width:150px;text-align:right;text-align:justify;text-justify:distribute-all-lines;text-align-last:justify;">保养计划编号</td><td><input v-model="protectcode" type="text" readonly style="border: none;outline: none;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
                <tr><td style="width:150px;text-align:right;text-align:justify;text-justify:distribute-all-lines;text-align-last:justify;">保养内容</td><td><input v-model="protectcontent" type="text" readonly style="border: none;outline: none;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
                <tr><td style="width:150px;text-align:right;text-align:justify;text-justify:distribute-all-lines;text-align-last:justify;">保养状态</td><td><input v-model="protectstatue" type="text" readonly style="border: none;outline: none;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
                <tr><td style="width:150px;text-align:right;text-align:justify;text-justify:distribute-all-lines;text-align-last:justify;">保养人员</td><td><input v-model="protectpeople" type="text" readonly style="border: none;outline: none;;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
                <tr><td style="width:150px;text-align:right;text-align:justify;text-justify:distribute-all-lines;text-align-last:justify;">保养费用</td><td><input v-model="protectprice" type="text" readonly style="border: none;outline: none;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
                <tr><td style="width:150px;text-align:right;text-align:justify;text-justify:distribute-all-lines;text-align-last:justify;">保养描述</td><td><input v-model="protectdescribe" type="text" readonly style="border: none;outline: none;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
                <tr><td style="width:150px;text-align:right;text-align:justify;text-justify:distribute-all-lines;text-align-last:justify;">保养完成时间</td><td><input v-model="protectfinishtime" type="text" readonly style="border: none;outline: none;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
                <tr><td style="width:150px;text-align:right;text-align:justify;text-justify:distribute-all-lines;text-align-last:justify;">验证描述</td><td><input v-model="prodescribe" type="text" readonly style="border: none;outline: none;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
                <tr><td style="width:150px;text-align:right;text-align:justify;text-justify:distribute-all-lines;text-align-last:justify;">验证通过时间</td><td><input type="text" v-model="progoto" readonly style="border: none;outline: none;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
            </table>
        </div>
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
    }
}
</script>