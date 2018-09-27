import UserApi from '@/api/user-api';

// 登录
function login(username, password) {
  return UserApi.login(username, password)
    .then(() => {
      const expire = new Date().getTime() + (1000 * 60 * 120);
      window.localStorage.setItem('username', username);
      window.localStorage.setItem('expire', expire.toString());
    });
}

// 是否已登录
function hadLogin() {
  if (window.localStorage.getItem('expire') > new Date().getTime()) {
    UserApi.setToken(window.localStorage.getItem('token'));
    return window.localStorage.getItem('username');
  }
  this.logout();
  return null;
}

// 注销登录
function logout() {
  window.localStorage.removeItem('username');
  window.localStorage.removeItem('token');
  window.localStorage.removeItem('expire');
  UserApi.logout();
}

// 获取用户页面资源
function getPageResource() {
  const navItems = [];
  UserApi.getPageResource().then((data) => {
    const resources = data.data.children;
    let itemArr = [];
    resources.forEach((resource) => {
      const navItemsObj = {};
      navItemsObj.title = resource.resourceName;
      resource.children.forEach((item) => {
        const itemObj = {};
        itemObj.title = item.resourceName;
        itemObj.route = item.resourcePath;
        itemArr.push(itemObj);
      });
      navItemsObj.children = itemArr;
      itemArr = [];
      navItems.push(navItemsObj);
    });
  }).catch(() => {
  });
  return navItems;
}

// 模糊搜索站点
function searchBus(enterpriseName) {
  return UserApi.searchBus(enterpriseName);
}

export default {
  login,
  hadLogin,
  logout,
  getPageResource,
  searchBus,
};
