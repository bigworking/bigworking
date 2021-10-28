<template>
    <div>
        <div style="margin-left:350px;">
            <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
            prop="orderno"
            label="维修单号"
            width="150">
            </el-table-column>
            <el-table-column
            prop="ordername"
            label="维修上报人"
            width="150">
            </el-table-column>
            <el-table-column
            prop="repairdevice"
            label="故障设备"
            width="150">
            </el-table-column>
            <el-table-column
            prop="repairpeople"
            label="维修人员"
            width="150">
            </el-table-column>
            <el-table-column
            prop="repairstatus"
            label="维修状态"
            width="150">
            </el-table-column>
            <el-table-column
            label="操作"
            width="180">
            <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button @click="handleXg(scope.row)" type="text" size="small">修改</el-button>
                <el-button @click="handleSc(scope.row)" type="text" size="small">删除</el-button>
            </template>
            </el-table-column>
        </el-table>
        </div>
        <div style="margin-left:100px;">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[5, 10, 20, 50]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total">
            </el-pagination>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [
            {
                orderno:'1',
                ordername:'a',
                repairdevice:'a',
                repairpeople:'a',
                repairstatus:'1',
            },
            {
                orderno:'2',
                ordername:'b',
                repairdevice:'b',
                repairpeople:'b',
                repairstatus:'2',
            }
        ],
        total:100,
        currentPage:1,
        pageSize:2,
      }
    },
    methods: {
      handleSizeChange(pageSize){
          this.pageSize = pageSize
        //   this.getList()
      },
      handleCurrentChange(currentPage){
          this.currentPage = currentPage
        //   this.getList()
      },
      handleClick(row) {
        this.$router.push({name:'look',query:{orderno:row.orderno}})
      },
      handleXg(row) {
        this.$router.push({name:'fix',query:{orderno:row.orderno}})
      },
      handleSc(row) {
        // this.$router.push({name:'look',query:{orderNo:row.orderNo}})
      }
    },
  }
</script>