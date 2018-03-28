## 前言
* Vue开发饿了吗全站

### 技术栈
vue2 + vuex + vue-router + axios + webpack + ES6 + styls
### 项目运行

```
$ git clone https://github.com/PosyMo/vue-ele-app.git
$ cd vue-ele-app
$ npm install
$ npm run dev
```

## 说明
### 涉及的技术点
1. 

## 效果演示
## 项目布局
```
.
├── build                                       // webpack配置文件
├── config                                      // 项目打包路径
├── src                                         // 源码目录
│   ├── api                                     // api相关封装
│   ├── base                                    // 基础组件
│   │   ├── toast                               // 文字提示组件
│   ├── common                                  // 公共资源文件
│   │   ├── fonts                               // 字体文件
│   │   ├── image                               // 公共图片
│   │   ├── js                                  // 公用函数封装
│   │   └── stylus                              // 基础样式文件
│   ├── components                              // 业务逻辑组件
│   │   ├── disc                                
│   │   ├── m-header                            // App头部
│   │   └── top-list                            // 
│   ├── router                                  // 路由相关
│   │   └── index.js
│   ├── sotre                                   // vuex状态管理
│   │   ├── actions.js                          // 配置actions
│   │   ├── getter.js                           // 配置getter
│   │   ├── index.js                            // 引用vuex，创建sotre
│   │   ├── mutation-types.js                   // 定义muations常量
│   │   ├── mutations.js                        // 配置mutations
│   │   └── state.js                            // 定义state状态
│   ├── app.vue                                 // 页面入口文件
│   └── main.js                                 // 程序入口文件
├── index.html                                  // 入口html文件
.
```