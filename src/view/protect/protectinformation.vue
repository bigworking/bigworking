<template>
    <div>
        <div style="display:flex;">
            <table align="left" style="margin-left:300px;">
                <tr><td style="width:150px;text-align:right;text-align:justify;text-justify:distribute-all-lines;text-align-last:justify;">保养类型</td><td><input v-model="protecttype" type="text" style="border-radius: 6px;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
                <tr><td style="width:150px;text-align:right;text-align:justify;text-justify:distribute-all-lines;text-align-last:justify;">保养开始时间</td><td><input v-model="protecttime" type="text" style="border-radius: 6px;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
                <tr><td style="width:150px;text-align:right;text-align:justify;text-justify:distribute-all-lines;text-align-last:justify;">保养设备</td><td><input v-model="protectdevice" type="text" style="border-radius: 6px;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
                <tr><td style="width:150px;text-align:right;text-align:justify;text-justify:distribute-all-lines;text-align-last:justify;">保养内容</td><td><input v-model="protectcontent" type="text" style="border-radius: 6px;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
                <tr><td style="width:150px;text-align:right;text-align:justify;text-justify:distribute-all-lines;text-align-last:justify;">保养人员</td><td><input v-model="protectpeople" type="text" style="border-radius: 6px;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
                <tr><td style="width:150px;text-align:right;text-align:justify;text-justify:distribute-all-lines;text-align-last:justify;">保养描述</td><td><input v-model="protectdescribe" type="text" style="border-radius: 6px;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
            </table>
            <p style="margin-top:320px;">
            </p>
        </div>
        <p style="margin-left:-100px;margin-top:-50px;">
            <el-button type="primary" @click="handleadd" style="margin-left:500px;margin-top:90px;cursor:pointer;">添加</el-button>
        </p>
    </div>
</template>

<script>
export default {
    data(){
        return{}
    },
    methods:{
        handleadd(){},
    }
}
</script>