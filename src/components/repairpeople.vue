<template>
    <div style="display:flex;">
        <div class="leftmenu">
            <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
            <el-submenu index="1">
                <template slot="title">
                <span>维修管理</span>
                </template>
                <el-menu-item-group>
                <router-link :to="{name: 'repairinstruct'}"><el-menu-item index="1-1">维修说明</el-menu-item></router-link>
                </el-menu-item-group>
            </el-submenu>
            </el-menu>
        </div>
        <div class="registermain">
            <router-link :to="{ path: '/'}" >退出后台</router-link>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
.registermain{
    position: absolute;
    top: 5px;
    right: 5px;
}
.leftmenu{
    width: 200px;
    margin-top: -60px;
}
.el-menu-item{
  text-align:justify;
  text-justify:distribute-all-lines;
  text-align-last:justify;
}

.router-link-active {
    text-decoration: none;
}
a{
    text-decoration: none; 
}
</style>