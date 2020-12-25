<template>
  <div>
    <el-row style="margin-left: 20px;margin-right: 20px;margin-top:20px">
      <el-col :span="12">
        <el-button type="primary"  style="float:left" @click="startNatConfig">开始配置</el-button>
      </el-col>
      <el-col :span="12" style="text-align:center">
        <el-button type="text"  style="float:right" @click="toHelp">
          配置说明
          <span class="iconfont">&#xe501;</span>
        </el-button>
      </el-col>
    </el-row>
    <route-sub-view class='component-sub'
                    rta="配置RTA"
                    rtb="rtb"
                    rtc="rtc">
    </route-sub-view>
  </div>
</template>

<script>

import RouteSubView from '@/components/RouteSubView'
import {startConfig} from "@/api/static";

export default {
  name: "config",
  components:{RouteSubView},
  methods:{
    /**
     * @Description:跳转到配置说明页面
     * @param:
     * @return
    */
    toHelp(){
      this.$router.push({
        path:'/static/index',
        query:{
          value:'config'
        }
      });
    },

    /**
     * @Description: 开始静态方法的配置
     * @param:
     * @return
    */
    startNatConfig(){
      startConfig().then(res=>{
        this.$message.success("访问成功！")
        console.log(res);
      }).catch(err=>{
        this.$message.error("访问失败！")
        console.log(err.response);
      })
    },

  },
}
</script>

<style scoped>

</style>
