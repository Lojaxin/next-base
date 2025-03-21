## 一.项目创建
#### npx create-next-app@latest
#### 在初始化项目时,建议选择非"src/app"
#### 打开官网后,需要手动切换到对应版本和路由;(这里的路由我们选择pages Router,简单稳定)

pages/_app.tsx 用于创建一个全局组件,例如我们需要给所有的页面添加一个Layout,那就可以用
<!-- export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            this is Layout
            <Component {...pageProps} />
        </>
    )
} -->