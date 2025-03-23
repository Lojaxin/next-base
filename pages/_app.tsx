import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { appWithTranslation } from 'next-i18next';
import { Provider } from 'react-redux';
import Layout from '@/components/Layout';
import { ThemeProvider } from '@/components/ThemeProvider';
import { store } from '@/store';
import '@/styles/global.css';
/**
 * 全局组件
 * @param param0
 * @returns
 */
// const NOT_USE_LAYOUT_PATH = ['/login'];

const App = ({ Component, pageProps }: AppProps) => {
    const router = useRouter();
    const isLogin = router.pathname.startsWith('/login');
    return (
        <Provider store={store}>
            <ThemeProvider>
                {isLogin ? (
                    <Component {...pageProps} />
                ) : (
                <Layout>
                        <Component {...pageProps} />
                    </Layout>
                )}
            </ThemeProvider>
        </Provider>
    );
};

export default appWithTranslation(App);
