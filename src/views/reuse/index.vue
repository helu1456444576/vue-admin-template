<template>
  <div style="margin-left: 20px;margin-right: 20px;">
    <h1>地址复用方法</h1>
    <p>可将多个内部地址映射为一个合法公网地址，但以不同的协议<b>端口号</b>与不同的内部地址相对应，也就是与之间的转换</p>
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
ip nat pool natpool 192.168.1.1 192.168.1.2 netmask 255.255.255.0
access-list 3 permit host 220.110.0.61
ip nat inside source list 3 pool natpool overload
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
        <p>从<b>PC1</b><em>ping 220.110.0.61</em>，能够在RTA使用<em>show ip nat tr</em>，可以发现<em>inside global</em>端口不断发生变化</p>

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
