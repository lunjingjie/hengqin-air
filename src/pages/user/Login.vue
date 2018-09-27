<template>
  <div>
    <v-layout class="justify-center">
      <v-flex xs12 class="pt-5 pb-3" style="text-align: center;">
        <span class="topLogin">城市移动式空气质量监测大数据分析系统</span>
      </v-flex>
    </v-layout>
    <v-layout class="justify-center pt-1 loginClass mt-5">
      <v-flex class="xs12 sm6 md6 lg4" style="vertical-align: center">
        <v-card class="mx-3" style="margin: 160px 0px;" hover >
          <!--顶栏-->
          <v-card-text class="pt-4">
            <!--账户框-->
            <v-text-field :error="error"
                          @keyup.native.enter="login()"
                          color="loginBtn"
                          v-model="username"
                          label="账号"
                          prepend-icon="mdi-account-circle"
            ></v-text-field>
            <!--密码框-->
            <v-text-field :error="error"
                          @keyup.native.enter="login()"
                          v-model="password"
                          color="loginBtn"
                          label="密码"
                          prepend-icon="mdi-fingerprint"
                          :append-icon="hidePassword ? 'mdi-eye' : 'mdi-eye-off'"
                          :append-icon-cb=" () => hidePassword = !hidePassword "
                          :type="hidePassword ? 'password' : 'text'"
                          hide-details
            ></v-text-field>
            <!--警告框-->
            <div>
              <v-alert error transition="scale-transition" v-model="error" dismissible>
                用户名或密码不正确
              </v-alert>
            </div>
          </v-card-text>
          <!--登陆按钮-->
          <v-card-actions style="padding-left: 180px; padding-right: 180px; padding-bottom: 15px;">
            <v-btn block dark @click="login()" :disabled="loading" style="background-color: #2C61A5">登录</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <login-footer class="loginFooter"/>
  </div>
</template>
<script>

  import UserService from '@/service/user-service';
  import { LOGIN } from '@/store/mutations-type';
  import LoginFooter from './LoginFooter';

  export default {
    components: {
      LoginFooter,
    },
    data() {
      return {
        username: '',
        password: '',
        error: false,
        loading: false,
        hidePassword: true,
      };
    },
    created() {
      if (this.$store.state.username) {
        this.$router.push({ name: 'Current' });
      }
    },

    methods: {
      login() {
        this.loading = true;
        UserService.login(this.username, this.password)
          .then(() => {
            this.loading = false;
            this.$store.commit(LOGIN, this.username);
            this.$router.push({ name: 'Current' });
            /**
             * TODO 退出登录后切换权限，菜单资源不变
             * appLayout只加载一次，当退出登录后并没有重新初始化applayout
             * 每次登录后刷新页面(方法需要改进)
             * */
            window.location.reload();
          })
          .catch(() => {
            this.error = true;
            this.loading = false;
          });
      },
    },
  };
</script>
<style scoped>
  .loginClass {
    height: 100%;
    background-image: url(/static/img/web/login/citybg.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
  }

  .loginFooter {
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  .topLogin {
    font-size: 38px;
    color: #434343;
    font-weight: bold;
    letter-spacing: 5px;
    /*background: linear-gradient(to bottom, #031d4e, #19539c);
    -webkit-background-clip: text;
    color: transparent;*/
  }
</style>

