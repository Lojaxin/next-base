import { useTranslation } from 'next-i18next';

export const useTrans = (namespace?: string) => {
    const { t } = useTranslation(namespace || 'common');
    return t;
};
