# 项目开发指南

## 一、环境要求
- **Node 版本**：v20
- **pnpm 版本**：10.5

## 二、项目创建
1. 使用以下命令初始化项目：
```bash
npx create-next-app@latest
```
2. 在初始化项目时，会有一些配置选项。其中，`/app` 属于 App Router，这里我们选择 Page Router。
3. 在查看官网 API 时，需要根据对应版本和 Router 类型手动切换到相应版本和路由。

### 项目工作目录结构
```plaintext
nextjs-project/
├── components/ 
│   ├── ui/           # shadcn 组件
│   └── Other/        # 其他自定义组件
├── hooks/
├── pages/
│   ├── _app.tsx      # 可理解为页面的根组件，用于添加 Layout 和全局状态等
│   ├── _document.tsx # 自定义文档页面
│   ├── _error.tsx    # 请求错误页面
│   ├── 404.tsx       # 路由页面找不到时的页面
│   └── index.tsx     # 初始 "/" 页面
├── public/
│   ├── images/       # 图片资源
│   └── locales/      # 多语言配置
│       ├── en/
│       │   └── common.json
│       └── zh-CN/
│           └── common.json
├── store/
│   ├── index.ts
│   └── features/     # 多语言配置
│       ├── slice.ts
│       ├── thunks.ts  
│       └── type.d.ts
├── .prettierrc       # prettier 配置文件
├── .prettierignore   # prettier 忽略不需要格式化的文件
├── eslint.config.mjs # eslint 配置文件
├── next-i18next.config.js # 多语言配置文件
├── postcss.config.mjs # taiwindcss 配置文件
...
└── tsconfig.json
```

### 页面路由约定配置
在 `pages` 目录中创建 `.t/jsx` 文件，会自动生成对应的路由。例如，在 `pages` 下创建 `login` 文件夹，包含登录和注册模块，页面结构如下：
```plaintext
├── pages/
│   ├── login
│       ├── index.tsx  # 登录页面，对应路由为 "/login"
│       └── signup.tsx # 注册页面，对应路由为 "/login/signup"
│   ├── _app.tsx 
│   ├── 404.tsx 
│   └── index.tsx
```

## 三、集成多语言
### 1. 安装依赖
```bash
pnpm add i18next react-i18next next-i18next
```
### 2. 创建多语言文件目录
在根目录创建 `locales` 文件夹，用于存放多语言转换的 JSON 文件。

### 3. 配置 `next-i18next`
创建 `next-i18next.config.js` 文件，内容如下：
```javascript
/** @type {import('next-i18next').UserConfig} */
module.exports = {
    i18n: {
        defaultLocale: 'zh-CN',
        locales: ['en', 'zh-CN'],
    },
};
```

## 四、集成 ESLint 和 Prettier
### 1. 安装依赖
```bash
pnpm add eslint @eslint/eslintrc eslint-config-next eslint-config-prettier eslint-plugin-prettier -S
```
### 2. 配置 Prettier
创建 `.prettierrc` 文件，内容如下：
```json
{
    "semi": true,
    "trailingComma": "all",
    "singleQuote": true,
    "tabWidth": 4,
    "useTabs": false,
    "printWidth": 100,
    "bracketSpacing": true,
    "arrowParens": "avoid"
}
```
### 3. 新增脚本命令
在 `package.json` 中新增以下脚本命令：
```json
"scripts": {
    "eslint": "eslint . --ext .js,.jsx,.ts,.tsx", // 校验所有代码规范
    "format": "prettier --write \"**/*.{js,jsx,ts,tsx,json}\"" // 格式化所有代码
}
```
**注意**：Prettier 的配置和 ESLint 可能会有冲突，在格式化代码方面，我们不用 ESLint 的格式化功能，ESLint 仅用于校验代码风格。

## 五、集成 Redux
### 1. 安装依赖
```bash
pnpm add react-redux @reduxjs/toolkit -D
```
### 2. 配置全局状态
新增 `store` 文件夹，并在 `_app.tsx` 中配置全局状态，结合多语言配置，代码如下：
```typescript
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { appWithTranslation } from 'next-i18next';
import { Provider } from 'react-redux';
import Layout from '@/components/Layout';
import { store } from '@/store';
import '@/styles/global.css'; // 全局 css 中引入 tailwindcss

const App = ({ Component, pageProps }: AppProps) => {
    const router = useRouter();
    const isLogin = router.pathname.startsWith('/login');
    return (
        <Provider store={store}>
            {isLogin ? (
                <Component {...pageProps} />
            ) : (
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            )}
        </Provider>
    );
};

export default appWithTranslation(App);
```

## 六、集成 Shadcn UI/Magic UI
在创建项目时选择了 Tailwind CSS 后，执行以下命令安装 Shadcn UI：
```bash
pnpm dlx shadcn@latest init
```
这条安装命令会自动安装 Shadcn UI，选择对应的风格即可。风格确定后会自动创建 `components.json`，用于安装 Shadcn UI 中的组件。