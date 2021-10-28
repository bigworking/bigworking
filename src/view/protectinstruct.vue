<template>
    <div>
        <div style="margin-left:350px;">
            <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
            prop="protectno"
            label="保养单号"
            width="150">
            </el-table-column>
            <el-table-column
            prop="protecttime"
            label="保养时间"
            width="150">
            </el-table-column>
            <el-table-column
            prop="protectcode"
            label="保养计划编号"
            width="150">
            </el-table-column>
            <el-table-column
            prop="protectstatue"
            label="保养状态"
            width="150">
            </el-table-column>
            <el-table-column
            prop="protectpeople"
            label="保养人员"
            width="150">
            </el-table-column>
            <el-table-column
            label="操作"
            width="180">
            <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">保养说明填写</el-button>
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
                protectno:'1',
                protecttime:'a',
                protectcode:'a',
                protectstatue:'a',
                protectpeople:'1',
            },
            {
                protectno:'2',
                protecttime:'b',
                protectcode:'b',
                protectstatue:'b',
                protectpeople:'2',
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
        this.$router.push({name:'protectwrite',query:{protectno:row.protectno}})
      },
      handleSc(row) {
        // this.$router.push({name:'look',query:{orderNo:row.orderNo}})
      }
    },
  }
</script>