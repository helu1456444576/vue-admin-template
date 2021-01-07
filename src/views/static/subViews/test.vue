<template>
  <div class="box">
    <el-row style="margin-left: 20px;margin-right: 20px;margin-top:20px">
      <el-col :span="12">
        <el-button type="primary"  style="float:left" @click="startTest">开始测试</el-button>
      </el-col>
      <el-col :span="12" style="text-align:center">
        <el-button type="text"  style="float:right" @click="toHelp">
          测试说明
          <span class="iconfont">&#xe600;</span>
        </el-button>
      </el-col>
    </el-row>
    <el-row style="width:80%;margin:20px auto;">
      <el-col :span="15" :offset="4">
        <route-sub-view class='component-sub'
                        name="路由RTA"
                        :content="rta">
        </route-sub-view>
      </el-col>
<!--      <el-col :span="11" offset="1">-->
<!--        <route-sub-view class='component-sub'-->
<!--                        name="电脑PC1"-->
<!--                        :content="pc1">-->
<!--        </route-sub-view>-->
<!--      </el-col>-->
    </el-row>

  </div>
</template>

<script>

import RouteSubView from '@/components/RouteSubView'
import {startTest} from "@/api/static";
import {Loading} from 'element-ui'

export default {
  name: "test",
  components:{RouteSubView},
  data(){
    return{
      rta:'无',
      pc1:"无"
    }
  },
  methods:{
    /**
     * @Description:跳转到说明页面
     * @param:
     * @return
     */
    toHelp(){
      this.$router.push({
        path:'/static/index',
        query:{
          value:'test'
        }
      });
    },
    /**
     * @Description: 开始测试静态方法
     * @param:
     * @return
    */
    startTest(){
      const loadingInstance=Loading.service({
        text: '测试中',
        target:document.querySelector('.box')
      });
      startTest().then(res=>{
        this.$message.success("访问成功！")
        this.rta=res.msg;
      }).catch(err=>{
        this.$message.error("访问失败！")
      }).finally(()=>{
        loadingInstance.close();
      })
    }
  },
}
</script>

<style scoped>

</style>
