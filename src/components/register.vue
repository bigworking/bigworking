<template>
<div class="reg">
        <div class="fig">欢迎来到登录页面</div>
        <!-- <form action="http://172.16.8.232:8080/denglu"> -->
        <div class="zh">
            <input type="text" name="userName" autocomplete="on" v-model="userName" placeholder="  账号" style="width:448px;height:47px;">
        </div>
        <div class="mm">
            <input type="password" name="passWord" autocomplete="on" v-model="passWord" placeholder="  密码" style="width:448px;height:47px;">
        </div>
        <div class="dl">
            <!-- <router-link :to="{ path: '/repairpeople'}">
                <button class="dlan" type="primary"> -->
                <button class="dlan" type="primary" @click="handledl">
                    登录
                </button>
                <!-- </button> -->
            <!-- </router-link> -->
        </div>
        <!-- </form> -->
    </div>
</template>

<script>
// import {mapState,mapMutations,mapAction } from 'vuex'
export default {
    data(){
        return{
            userName:'',
            passWord:'',
            // userToken:'',
        }
    },
    methods:{
        // ...mapMutations(['changeLogin']),
        handledl(){debugger
        let data={
            userName:this.userName,
            passWord:this.passWord,
        }
        if (this.userName === '' || this.passWord === '') {
        alert('账号或密码不能为空');
        } else 
        if(this.userName==1){
        // {
        // this.$http.post(this.$api.asdfgsfefsv,data).then(res=>{debugger
        //     // var data=JSON.parse(res.data);
        //     console.log(res.data);
        //     console.log(res.code);
        //     if(res.code == 20000){

            // this.userToken = res.data;
            // // 将用户token保存到vuex中
            // this.changeLogin({ 
            //     Authorization: this.userToken,
            //     userName:this.userName
            // });
            this.$router.push('/admin');
            alert('登陆成功');}
            // }).catch(error => {
            //     alert('账号或密码错误');
            //     console.log(error);
            // if(res.data.code == 20000){
            // this.$router.push('/neaw');
            // }else{
            //     return false;
            // }
            // if(data.status==1){debugger
            //     localStorage.setItem('token',data.token);
            //     localStorage.setItem('userName',data.userName);
            //     localStorage.setItem('passWord',data.passWord);
            //     if(this.$route.query.redirect){
            //         let redirect=this.$route.query.redirect;
            //         this.$route.push(redirect);
            //     }else{
            //         this.$route.push({name:'/neaw'});
            //     }
            // }
            // else{
            //     return false;
            // }
        // })

        else if(this.userName==2){
            this.$router.push('/repairpeople');
            alert('登陆成功');
        }
        else if(this.userName==3){
            this.$router.push('/protectpeople');
            alert('登陆成功');
        }
        else{
                alert('账号或密码错误');
                // console.log(error);
            }
            // })
        // }


        // if(res.data.code == 20000){debugger
        //     this.$route.push({name:'neaw'});
        // }else{
        //     return false;
        // }
    }
    }
}
</script>

<style>
/* .reg{
    background-image:url("../pic/bg.png");
} */
.reg{
    background:url("../pic/bg.png") no-repeat center center;
    background-size:cover;
    background-attachment:fixed;
    position: fixed;
    top: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    /* margin: 0px;
    padding:0px; */
}
.fig{
    font-size: 46px;
    margin-top: 300px;
    height: 40px;
    font-weight: bold;
    color:#EEEEEE;
}
.zh{
    margin-top: 50px;
}
.mm{
    margin-top: 20px;
}
.dl{
    margin-top: 20px;
}
.dlan{
    width: 450px;
    height: 40px;
    border-radius: 6px;
    background-color: #6495ED;
    color: white;
    font-size: 14px;
    cursor:pointer;
}
input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {
    background-color: rgb(189, 255, 238);
    background-image: none;
    color: rgb(0, 0, 0);
}
</style>