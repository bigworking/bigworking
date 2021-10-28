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
                <router-link :to="{name: 'repair'}"><el-menu-item index="1-1">维修单管理</el-menu-item></router-link>
                <router-link :to="{name: 'information'}"><el-menu-item index="1-2">维修说明验证</el-menu-item></router-link>
                <router-link :to="{name: 'write'}"><el-menu-item index="1-3">维修单填写</el-menu-item></router-link>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                <span>保养管理</span>
                </template>
                <el-menu-item-group>
                <router-link :to="{name: 'protectinformation'}"><el-menu-item index="2-1">保养信息设定</el-menu-item></router-link>
                <router-link :to="{name: 'protectprove'}"><el-menu-item index="2-2">保养说明验证</el-menu-item></router-link>
                <router-link :to="{name: 'protectmanager'}"><el-menu-item index="2-3">保养信息管理</el-menu-item></router-link>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                <span>维保系统</span>
                </template>
                <el-menu-item-group>
                <router-link :to="{name: 'devicechart'}"><el-menu-item index="3-1">设备完好率统计</el-menu-item></router-link>
                <router-link :to="{name: 'repairchart'}"><el-menu-item index="3-2">维修情况统计</el-menu-item></router-link>
                <router-link :to="{name: 'protectchart'}"><el-menu-item index="3-3">保养完成率统计</el-menu-item></router-link>
                <router-link :to="{name: 'pricechart'}"><el-menu-item index="3-4">费用占比统计</el-menu-item></router-link>
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