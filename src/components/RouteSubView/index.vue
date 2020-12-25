<template>
  <div>
    <el-row>
      <el-col :span="7">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span>路由器RTA</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="showDetail(1)">展开查看</el-button>
          </div>
          <div class="route-content">
            {{rta}}
          </div>

        </el-card>
      </el-col>
      <el-col :span="7" :offset="1">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span>路由器RTB</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="showDetail(2)">展开查看</el-button>
          </div>
          <div class="route-content">
            {{rtb}}
          </div>

        </el-card>
      </el-col>
      <el-col :span="7" :offset="1">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span>路由器RTC</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="showDetail(3)">展开查看</el-button>
          </div>
          <div class="route-content">
            {{rtc}}
          </div>

        </el-card>
      </el-col>
    </el-row>

    <el-dialog
      :title="routerTitle"
      :visible.sync="dialogVisible"
      width="50%">
      <div class="route-content">
        {{detail}}
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="dialogVisible = false">关闭</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "RouteSubView",
  props: {
    rta: {
      type: String,
      default: ''
    },
    rtb: {
      type: String,
      default: ''
    },
    rtc: {
      type: String,
      default: ''
    }
  },
  data(){
    return{
      dialogVisible:false,
      routerTitle:'',
      detail:''
    }
  },
  methods:{
    /**
     * @Description:放大查看信息详情
     * @param:
     * @return
    */
    showDetail(type){
      switch (type){
        case 1:
          this.routerTitle='路由器RTA';
          this.detail=this.rta;
          break;
        case 2:
          this.routerTitle='路由器RTB';
          this.detail=this.rtb;
          break;
        case 3:
          this.routerTitle='路由器RTC';
          this.detail=this.rtc;
          break;
        default:
          break;
      }
      this.dialogVisible=true;


    }
  }
}
</script>

<style scoped>
.route-content{
  background: rgba(229, 233, 242,0.5);
  height: 400px;
}
</style>
