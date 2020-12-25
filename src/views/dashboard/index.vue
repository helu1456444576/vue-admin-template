<template>
  <div class="dashboard-container">
    <div class="box">
      <div class="left-icon">
        <img src="@/assets/Router.png" alt="router">
      </div>
      <div class="right-content">
        <h2 style="color:rgb(64, 158, 255);">NAT自动化配置</h2>
        <div class="bottom-detail">
          <div class="intro-box">
            <span>内容介绍</span>
          </div>
          <div class="content">
            <p style="text-indent: 30px">
              随着接入Internet的计算机数量的不断猛增，IP地址资源也就愈加显得捉襟见肘。
              借助于NAT，私有（保留）地址的"内部"网络通过路由器发送数据包时，
              私有地址被转换成合法的IP地址，
              一个局域网只需使用少量IP地址（甚至是1个）即可实现私有地址网络内所有计算机与Internet的通信需求。</p>
            <p style="margin-top: 12px;text-indent: 30px">本系统旨在通过可视化的方式自动实现NAT配置与测试，NAT提供了四种实现方式，分别是静态分配、动态分配、负载均衡以及地址复用。
              </p>
            <p style="margin-top: 12px;text-indent: 30px">
              本系统在自主设计的拓扑图的基础上对上述的四种方式都进行实现并且设计了方法对四种方式进行测试。
            </p>
            <p style="margin: 35px auto;text-align: center;font-weight: bold;font-size: 13pt">
              <em>开始使用吧！</em>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Dashboard',
  computed: {
  }
}
</script>

<style lang="scss" scoped>
*{
  margin: 0px;
  padding: 0px;
}
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}

.box{
  margin: 120px auto;
  height:450px;
  width:80%;
  position: relative;
}

.left-icon{
  padding: 12px;
  position: absolute;
  background-color: rgba(229, 233, 242,0.5);
  text-align: center;
}


.right-content{
  position: absolute;
  right: 0px;
  width: 77%;
}
.bottom-detail{
  margin-top: 30px;
  position: relative;
  height: 380px;
  border:1px solid rgb(229, 233, 242);
  border-radius: 3px;

}

.intro-box{
  position: absolute;
  top: -10px;
  left:10px;
  width: 80px;
  text-align: center;
  font-weight: bold;
  color:rgb(144, 147, 153);

  background-color: rgb(255,255,255);
}

.content{
  padding: 40px;
  line-height: 1.5;
  color:rgb(96, 98, 102);

}

</style>
