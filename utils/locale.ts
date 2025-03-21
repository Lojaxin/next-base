import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

/**
 * 获取静态页面翻译
 * @param additionalNamespaces
 * @returns
 */
export const getStaticPropsWithTranslation = (additionalNamespaces: string[] = []) => {
    return async function getStaticProps({ locale }: { locale: string }) {
        return {
            props: {
                ...(await serverSideTranslations(locale, ['common', ...additionalNamespaces])),
            },
        };
    };
};
