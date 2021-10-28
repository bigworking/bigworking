<template>
    <div>
        <div style="margin-left:350px;">
            <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
            prop="repairpeople"
            label="维修人员"
            width="150">
            </el-table-column>
            <el-table-column
            prop="repairdescipt"
            label="维修描述"
            width="800">
            </el-table-column>
            <el-table-column
            prop="repairstatus"
            label="是否验证通过"
            width="150">
            <template slot-scope="scope">
                <el-switch v-model="scope.repairstatus"></el-switch>
            </template>
            </el-table-column>
        </el-table>
        </div>
        <div style="margin-left:-100px;">
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
                repairpeople:'1',
                repairdescipt:'a',
                repairstatus:true
            },
            {
                repairpeople:'2',
                repairdescipt:'b',
            }
        ],
        total:50,
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
    },
  }
</script>