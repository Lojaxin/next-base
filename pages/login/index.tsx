import { useTrans } from '@/hooks';
import { getStaticPropsWithTranslation } from '@/utils';

export default function Login() {
    const t = useTrans();
    return (
        <div>
            {t('hello')}
            login
        </div>
    );
}

export const getStaticProps = getStaticPropsWithTranslation(['common']);
