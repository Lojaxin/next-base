## 一.环境
node:v20

一.项目创建
#### npx create-next-app@latest
#### 在初始化项目时,需要选择一些配置,其中"/app"属于 App Router,我们这里选择PageRouter;
#### 在查看官网API时,需要根据对应版本和 Router 类型手动切换到对应版本和路由;

这里说关于开发配置的工作目录
nextjs-project/
├── components/ 
├── hooks/
├── pages/
│   ├── _app.tsx  //可以理解为页面的根组件,可以用来添加一些 Layout 和全局的状态等
│   ├── _document.tsx //自定义文档页面
│   ├── _error.tsx //请求错误页面
│   ├──  404.tsx //路由页面找不到时的页面
│   └── index.tsx //初始"/"页面
├── public/
│   ├── images/ 图片资源
│   └── locales/ 多语言配置
│       ├── en/
│       │   └── common.json
│       └── zh/
│           └── common.json
...
└── tsconfig.json


在pages中创建一个.t/jsx的文件,会自动生成一个对应的路由(约定配置),例如:在pages/创建一个login文件夹,该文件夹下包含登录和注册模块,我们可以添加一个这个的页面结构
├── pages/
│   ├── login
│       ├── index.tsx 登录页面,对应路由为"/login"
│       └── signup.tsx 注册页面,对应路由为"/login/signup"
│   ├── _app.tsx 
│   ├──  404.tsx 
│   └── index.tsx

