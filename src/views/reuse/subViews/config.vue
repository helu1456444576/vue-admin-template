<template>
  <div>
    <el-row style="margin-left: 20px;margin-right: 20px;margin-top:20px">
      <el-col :span="12">
        <el-button type="primary"  style="float:left" @click="startNatConfig">开始配置</el-button>
      </el-col>
      <el-col :span="12" style="text-align:center">
        <el-button type="text"  style="float:right" @click="toHelp">
          配置说明
          <span class="iconfont">&#xe600;</span>
        </el-button>
      </el-col>
    </el-row>
    <el-row style="width:95%;margin-left: 35px;margin-top: 20px;">
      <el-col :span="7">
        <route-sub-view class='component-sub'
                        name="配置路由RTA"
                        if-show-detail="true"
                        :content="rta">
        </route-sub-view>
      </el-col>
      <el-col :span="7" :offset="1">
        <route-sub-view class='component-sub'
                        name="配置路由RTB"
                        if-show-detail="true"
                        :content="rtb">
        </route-sub-view>
      </el-col>
      <el-col :span="7" :offset="1">
        <route-sub-view class='component-sub'
                        name="配置路由RTC"
                        if-show-detail="true"
                        :content="rtc">
        </route-sub-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import RouteSubView from '@/components/RouteSubView'
import {startConfig} from "@/api/reuse";

export default {
  name: "config",
  components:{RouteSubView},
  data(){
    return{
      rta:'无',
      rtb:"无",
      rtc:"无"
    }
  },
  methods:{
    /**
     * @Description:跳转到配置说明页面
     * @param:
     * @return
    */
    toHelp(){
      this.$router.push({
        path:'/dynamic/index',
        query:{
          value:'config'
        }
      });
    },

    /**
     * @Description: 开始动态方法的配置
     * @param:
     * @return
    */
    startNatConfig(){
      startConfig().then(res=>{
        this.$message.success("访问成功！")
        this.rta=res.msg
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
