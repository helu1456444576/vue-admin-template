<template>
  <div>
    <el-row style="margin-left: 20px;margin-right: 20px;margin-top:20px">
      <el-col :span="12">
        <el-button type="primary"  style="float:left">开始测试</el-button>
      </el-col>
      <el-col :span="12" style="text-align:center">
        <el-button type="text"  style="float:right" @click="toHelp">
          测试说明
          <span class="iconfont">&#xe600;</span>
        </el-button>
      </el-col>
    </el-row>
    <el-row style="width:80%;margin:20px auto;">
      <el-col :span="11">
        <route-sub-view class='component-sub'
                        name="路由RTA"
                        content="rta">
        </route-sub-view>
      </el-col>
      <el-col :span="11" offset="1">
        <route-sub-view class='component-sub'
                        name="电脑PC1"
                        content="pc1">
        </route-sub-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import RouteSubView from '@/components/RouteSubView'
import {startTest} from "@/api/load";

export default {
  name: "test",
  components:{RouteSubView},
  methods:{
    /**
     * @Description:跳转到说明页面
     * @param:
     * @return
     */
    toHelp(){
      this.$router.push({
        path:'/load/index',
        query:{
          value:'test'
        }
      });
    },
    /**
     * @Description: 开始测试动态方法
     * @param:
     * @return
    */
    startTest(){
      startTest().then(res=>{
        this.$message.success("访问成功！")
        console.log(res);
      }).catch(err=>{
        this.$message.error("访问失败！")
        console.log(err.response);
      })
    }
  },
}
</script>

<style scoped>

</style>
