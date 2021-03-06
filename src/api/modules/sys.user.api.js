import { find, assign } from 'lodash'

const users = [
  { username: 'admin', password: 'admin', uuid: 'admin-uuid', name: 'Admin' },
  { username: 'editor', password: 'editor', uuid: 'editor-uuid', name: 'Editor' },
  { username: 'user1', password: 'user1', uuid: 'user1-uuid', name: 'User1' }
]

export default ({ service, request, serviceForMock, requestForMock, mock, faker, tools }) => ({
  /**
   * @description 登录
   * @param {Object} data 登录携带的信息
   */
  SYS_USER_LOGIN(data = {}) {
    // 接口请求
    return request({
      url: '/employee/user/login?username=' + data.username + '&password=' + data.password,

      method: 'post',
      data
    })
  },
  SYS_USER_LOGIN_INFO() {
    // 接口请求
    return request({
      url: '/api/v1/car/users/loginuser',
      method: 'post'
    })
  },
  // 菜单
  SYS_USER_MENUS() {
    return request({
      url: '/api/v1/car/users/find/menu',
      method: 'post',
    })
  },
  // 注册
  SYS_USER_REGISTER(data = {}) {
    return request({
      url: '/api/v1/car/users/register',
      method: 'post',
      data
    })
  },
  // 注册
  SYS_USER_IMG(data = {}) {
    return request({
      url: '/files/sys_head_img/20210115122756f1257c44918a2cce786f80ed7c.png',
      method: 'get',
      responseType: 'arraybuffer'
      }).then(function (response)  {
      return 'data:image/png;base64,' + btoa(
        new Uint8Array(response).reduce((data, byte) => data + String.fromCharCode(byte), '')
      );
    })




  },
  // username验证
  SYS_USER_CHECK(data = {}) {
    return request({
      url: '/api/v1/car/users/check/username',
      method: 'post',
      data
    })
  },
  // 查询性别字典
  SYS_USER_ALL_SEX(data = { "code": "sex" }) {
    return request({
      url: '/api/v1/car/dictionary/find/code',
      method: 'post',
      data
    })
  },
  // -----------------------------------------------------
  // 用户管理接口

  // 用户分页
  SYS_USER_PAGE(data = { "code": "sex" }) {
    return request({
      url: '/api/v1/car/dictionary/find/code',
      method: 'post',
      data
    })
  },
  // 员工信息分页
  SYS_EMPLOYEE_PAGE(data = {}) {
    return request({
      url: '/api/v1/car/users/manager/find/employee/page',
      method: 'post',
      data
    })
  },
  // 用户信息分页
  SYS_USER_PAGE(data = {}) {
    return request({
      url: '/api/v1/car/users/manager/find/customer/page',
      method: 'post',
      data
    })
  },
  // 用户分配角色
  SYS_USER_ROLE(data = {}) {
    return request({
      url: '/api/v1/car/dictionary/find/code',
      method: 'post',
      data
    })
  },
  // 筛选用户
  SYS_USER_FILTER(data = {}) {
    return request({
      url: '/api/v1/car/dictionary/find/code',
      method: 'post',
      data
    })
  },


})
