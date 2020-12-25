<template>
  <div style="margin-left: 20px;margin-right: 20px;">
    <h1>负载均衡方法</h1>
    <p>随着访问量的上升，当一台服务器难以胜任是，就必须采用<b>负载均衡技术</b>，将大量的访问合理地分配至多台服务器上。</p>
    <el-divider></el-divider>
    <div style="margin-left: 20px;">
      <div>
        <h2 id="config">负载均衡配置</h2>
        <el-row>
          <el-col :span=12>
            <img src="@/assets/toupu.png" alt="拓扑图" style="width:100%">
          </el-col>

          <el-col :span="12">
            <el-card class="config-code">
              <span>RTA</span>
              <pre>
ip http server

ip nat pool tcppool 192.168.1.1 192.168.1.2 netmask 225.255.255.0 type rotary
access-list 2 permit host 220.110.0.60
ip nat inside destination list 2 pool tcppool

debug ip nat
               </pre>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div>
        <el-divider></el-divider>
        <h2 id="test">
          负载均衡方法测试
        </h2>
        <p>从<b>PC1</b><em>ping 220.110.0.60</em>，能够在RTA观察到交替通过<em>192.168.1.1</em> 和 <em>192.168.1.2</em></p>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  mounted(){
    if (this.$route.query.value != null || this.$route.query.value != undefined) {
      console.log(this.$route.query.value)
      this.$nextTick(()=>{
        this.goAnchor(this.$route.query.value);//跳转到锚点
      })
    }
  },
  methods:{
    /**
     * @Description:跳转到锚点
     * @param:
     * @return
     */
    goAnchor(value){
      document.querySelector("#"+value).scrollIntoView(true);
    }
  }
}
</script>

<style scoped>
.config-code{
  width:80%;
  margin: 20px auto;
}
</style>
