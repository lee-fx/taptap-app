<p align="center">
  <h2>
	TAPTAP-APP
  </h2>
</p>


## 简介

 - [taptap-app](https://github.com/lee-fx/taptap-app) 是一个页面前端解决方案，它基于 [vue](https://github.com/vuejs/vue) 和 UNIAPP实现。
 - 可以实现打包出多平台代码（h5、apk、ios）。
 - 后续强大的技术支持，预计包括但不限于（聊天、在线电影、电子书...）。


## 框架目录

```
- components  // 外部组件目录
- pages       // 项目界面
  - chat        // 聊天界面
  - components  // 页面级别组件抽象目录
  - contact     // 开发简介
  - dynamic     // 游戏动态
  - game-detail // 游戏简介
  - games       // 游戏列表
  - index       // 首页
  - login       // 登录
  - mine        // 我的
  - rank        // 排行榜
  - recommend   // 推荐游戏
  - register    // 注册
- static     // 静态资源目录
  - font        // 字体库
  - image       // 图片
- unpackage  // 打包目录
- tuil       // 工具目录
  - api.js      // 发送请求封装
- pages.json // 导航栏
- uni.scss   // 公共样式
- README.md  // 说明
```

## 开发

```bash
# 克隆项目
git clone https://github.com/lee-fx/taptap-app.git
```


Copyright (c) 2021-present Lee-Fx LiHuiYi