import axios from '@/api/axios';
import { LOGIN } from '@/api/api-path';

// 登录
function login(username, pass) {
  return axios.get(LOGIN, {
    params: {
      userName: username,
      userPassWord: pass,
      tokenType: 'web',
    },
  })
    .then((value) => {
      // data为后台返回所有的数据
      this.setToken(value.data.token);
      window.localStorage.setItem('token', value.data.token);
      window.localStorage.setItem('roleId', value.data.roleId);
      /* axios.get(PAGE_RESOURCE).then((res) => {
        this.$store.commit(NAVITEMS, res.data);
      }); */
      return value;
    });
}

// 存入token
function setToken(token) {
  axios.defaults.headers.common.Authorization = token;
}

// 退出登录删除token
function logout() {
  delete axios.defaults.headers.common.Authorization;
}

// 查询用户拥有的页面模块
function getPageResource() {
  return axios.get(`/web/role/${window.localStorage.getItem('roleId')}/pageResource`);
}

// 模糊搜索站点
function searchBus(enterpriseName) {
  return axios.get(`/web/role/${window.localStorage.getItem('roleId')}/enterprise`, {
    params: {
      enterpriseName,
    },
  });
}

export default {
  login,
  setToken,
  logout,
  getPageResource,
  searchBus,
};
