import { useTranslation } from 'next-i18next';
import { getStaticPropsWithTranslation } from '@/utils';

export default function Home() {
    console.log('%c [ Home ]-7', 'font-size:13px; background:pink; color:#bf2c9f;');
    const { t } = useTranslation('common');
    return (
        <div>
            {t('hello')}
            <div className="animate-grid bg-red-500 h-20 w-full">123</div>
        </div>
    );
}

export const getStaticProps = getStaticPropsWithTranslation(['common']);
