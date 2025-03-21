import { Button } from "@/components";
import { useTranslation } from 'next-i18next';
import { getStaticPropsWithTranslation } from '@/utils';

export default function Home() {

    console.log('%c [ Home ]-7', 'font-size:13px; background:pink; color:#bf2c9f;')
    const { t } = useTranslation('common');
    return (
        <div>
            <Button/>
            {
                t('hello')
            }
        </div>
    )
}

export const getStaticProps = getStaticPropsWithTranslation(['common']);