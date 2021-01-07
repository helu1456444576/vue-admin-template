<template>
  <div>
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span>{{name}}</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="showDetail(1)" v-if="ifShowDetail">展开查看</el-button>
          </div>
          <div class="route-content">
<pre>
  <code>
{{content}}
  </code>

</pre>

          </div>
        </el-card>
    <el-dialog
      :title="name"
      :visible.sync="dialogVisible"
      width="50%">
      <div class="route-content">
<pre>
 <code>
 {{content}}
 </code>
</pre>
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
    name:{
      type:String,
      default:''
    },
    content: {
      type: String,
      default: ''
    },
    ifShowDetail:{
      type:Boolean,
      default:true
    }
  },
  data(){
    return{
      dialogVisible:false
    }
  },
  methods:{
    /**
     * @Description:放大查看信息详情
     * @param:
     * @return
    */
    showDetail(){
      this.dialogVisible=true;
    }
  }
}
</script>

<style scoped>
.route-content{
  background: rgba(229, 233, 242,0.5);
  height: 400px;
  padding: 10px;
}

pre{
  margin: 0px;
}
</style>
