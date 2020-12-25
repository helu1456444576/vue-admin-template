<template>
  <div class="dashboard-container">
    <h1>telnet自动化</h1>
    <p>telnet自动化系统旨在通过可视化的方式自动实现telnet的配置与通信</p>
    <el-divider></el-divider>
    <div style="margin-left: 20px;">
      <div>
        <h2>拓扑设计</h2>
        <img class="tuopu-image" src="@/assets/toupu.png" alt="拓扑图">
      </div>
      <div>
        <el-divider></el-divider>
        <h2>初始配置ip</h2>
        <div>
          <h3>配置路由</h3>
          <h4>配置路由器RTA</h4>
          <pre class="code-content">
            hostname RTA
            enable
            configure terminal

            interface f0/0
            ip address 192.168.1.1 255.255.255.0
            no shutdown
            exit

            interface s0/0/0
            ip address 220.110.0.2 255.255.255.0
            clock rate 9600
            no shutdown
            exit

            ip route 10.0.0.0 255.0.0.0 220.110.0.1

            line vty 0 4
            password CISCO
            login
            exit
            enable password CISCO
          </pre>
          <h4>配置路由器RTB</h4>
          <pre class="code-content">
            hostname RTB
            enable
            configure terminal

            interface f0/0
            ip address 10.0.0.1 255.0.0.0
            no shutdown
            exit

            interface s0/0/0
            ip address 220.110.0.1 255.255.255.0
            clock rate 9600
            no shutdown
            exit

            ip route 192.168.1.0 255.255.255.0 220.110.0.2

            line vty 0 4
            password CISCO
            login
            exit
            enable password CISCO
          </pre>
          <h4>配置路由器RTC</h4>
          <pre class="code-content">
            hostname RTC
            enable
            configure terminal

            interface f0/0
            ip address 192.168.1.2 255.255.255.0
            no shutdown
            exit

            ip http server

            line vty 0 4
            password CISCO
            login
            exit
            enable password CISCO
          </pre>
        </div>
        <div>
          <h3>配置电脑</h3>
          <h4>配置PC1</h4>
          <pre class="code-content">
            IP ADDRESS: 10.0.0.10
            SUBNET MASK: 255.0.0.0
            DEFAULT GATEWAY: 10.0.0.1
          </pre>
          <h4>配置PC2</h4>
          <pre class="code-content">
            IP ADDRESS: 192.168.1.10
            SUBNET MASK: 255.255.255.0
            DEFAULT GATEWAY: 192.168.1.1
          </pre>
          <h4>配置PC3</h4>
          <pre class="code-content">
            IP ADDRESS: 192.168.1.20
            SUBNET MASK: 255.255.255.0
            DEFAULT GATEWAY: 192.168.1.1
          </pre>
          <p>一开始从PC1和PC2互相ping对方都是unreachable</p>
        </div>
      </div>
      <div>
        <el-divider></el-divider>
        <h2>脚本说明</h2>
        <div>
          <h3>配置路由</h3>
          <h4>telnet连接</h4>
          <p>在这一过程中，我们会将ip、用户名和密码作为参数，调用<em>login_host()</em>方法，并对连接结果进行判断，如果返回True，可以进行下一步路由配置。</p>
          <pre class="code-content">
            def login_host(self, host_ip, username, password):
            try:
            self.tn.open(host_ip, port=23)
            except:
            logging.warning('%s网络连接失败' % host_ip)
            return False
            # 等待login出现后输入用户名，最多等待10秒
            self.tn.read_until(b'login: ', timeout=10)
            self.tn.write(username.encode('ascii') + b'\n')
            # 等待Password出现后输入用户名，最多等待10秒
            self.tn.read_until(b'Password: ', timeout=10)
            self.tn.write(password.encode('ascii') + b'\n')
            # 延时两秒再收取返回结果，给服务端足够响应时间
            time.sleep(2)
            # 获取登录结果
            command_result = self.tn.read_very_eager().decode('ascii')
            if 'Login incorrect' not in command_result:
            print(host_ip + "登陆成功")
            return True
            else:
            print(host_ip + "登录失败，用户名或密码错误")
            return False
          </pre>
          <h4>执行配置命令</h4>
          <p>在这一过程中，我们会根据传入的配置命令，调用<em>execute_command()</em>方法，并返回每行执行结果。</p>
          <pre class="code-content">
            def execute_command(self, command):
            result = ""
            for i in range(len(command)):
                # 执行命令
                self.tn.write(command[i].encode('ascii') + b'\n')
                time.sleep(3)
                # 获取命令结果
                command_result = self.tn.read_very_eager().decode('ascii')
                # print(command_result)
                # logging.warning('命令执行结果：\n%s' % command_result)
                result += command[i] + command_result
            return result
          </pre>
          <h4>断开telnet连接</h4>
          <p>结束路由配置后，断开telnet连接。</p>
          <pre class="code-content">
            def logout_host(self):
            self.tn.write(b"exit\n")
          </pre>
          <h3>ping</h3>
          <p>该模块可以ping相应PC，以检测是否配置成功。</p>
          <h3>OpenWeb</h3>
          <p>该模块可以打开浏览器，输入相应ip地址，然后在输出台查看NAT转换信息。</p>
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
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}


.tuopu-image{
  width:60%
}
</style>
