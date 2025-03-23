import { useTrans } from '@/hooks';
import { getStaticPropsWithTranslation } from '@/utils';

export default function Login() {
    const t = useTrans();
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            {t('hello')}
            <p className='text-2xl text-red-500'>login</p>
        </div>
    );
}

export const getStaticProps = getStaticPropsWithTranslation(['common']);
