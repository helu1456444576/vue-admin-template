<template>
    <div style="margin-left: 20px;margin-right: 20px;">
      <h1>静态方法</h1>
      <p>静态方法的含义是一个私有IP<b>固定</b>映射一个公有IP地址，提供内网服务器的对外访问服务</p>
      <el-divider></el-divider>
      <div style="margin-left: 20px;">
        <div>
          <h2 id="config">静态方法配置</h2>
          <el-row>
            <el-col :span=12>
              <img src="@/assets/toupu.png" alt="拓扑图" style="width:100%">
            </el-col>

            <el-col :span="12">
             <el-card class="config-code">
               <span>RTB</span>
               <pre>
 ip route 0.0.0.0 0.0.0.0 s0/0/0
 int f0/0
 ip nat inside
 exit
 int s0/0/0
 ip nat outside
 exit
 ip nat inside source static 10.0.0.10 220.110.0.34
               </pre>
             </el-card>
              <div style="margin: 10px auto;width:80%">
                <p>为RTB配置静态NAT，RTB右侧的部分构成了inside，RTA左侧的部分是outside。</p>
              </div>

            </el-col>
          </el-row>
        </div>
       <div>
         <el-divider></el-divider>
         <h2 id="test">
           静态方法测试
         </h2>
         <p>测试采用的方法是从<b>PC2</b> <em>ping</em> <b>PC1</b>此时的外部地址<em>220.110.0.34</em></p>
         <p>如果能够正确的ping通说明<b>PC1</b>此时的外部地址已经被成功映射为<em>220.110.0.34</em></p>
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
