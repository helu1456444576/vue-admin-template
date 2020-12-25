<template>
  <div style="margin-left: 20px;margin-right: 20px;">
    <h1>动态方法</h1>
    <p>私有IP映射地址池中的公有IP，映射关系是<b>动态的</b>、<b>临时的</b></p>
    <el-divider></el-divider>
    <div style="margin-left: 20px;">
      <div>
        <h2 id="config">动态配置</h2>
        <el-row>
          <el-col :span=12>
            <img src="@/assets/toupu.png" alt="拓扑图" style="width:100%">
          </el-col>

          <el-col :span="12">
            <el-card class="config-code">
              <span>RTA</span>
              <pre>
ip route 0.0.0.0 0.0.0.0 s0/0/0
int f0/0
ip nat inside
exit
int s0/0/0
ip nat outside
exit
access-list 1 permit 192.168.1.0 0.0.0.255
ip nat pool globalXYZ 220.110.0.33 220.110.0.57 netmask 255.255.255.0
ip nat inside source list 1 pool globalXYZ overload
               </pre>
            </el-card>
            <div style="margin: 10px auto;width:80%">
              <p>为RTA配置动态NAT，RTA左侧的部分构成了一个子网也就是inside，RTA右侧的部分是outside。</p>
              <ul>
                <li>不开启permit就是unreachable</li>
                <li>开启permit但是不启用overload一句就是<em>192.168.1.10</em></li>
                <li>只有用了最后一句，在<em>ping 192.168.1.10 </em>的时候reply的才是<em>220.110.0.33</em></li>
                <li><em>nat pool</em>那一行表示为访问分配的地址池</li>
              </ul>
            </div>

          </el-col>
        </el-row>
      </div>
      <div>
        <el-divider></el-divider>
        <h2 id="test">
          动态方法测试
        </h2>
        <p>从<b>PC1发起</b><em>ping 192.168.1.10</em>，显示<em>reply from 220.110.0.33</em>，表明<b>PC1</b>的地址发生的转换</p>

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
