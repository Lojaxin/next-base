import { useRouter } from 'next/router';
import { useAppSelector } from '@/store';

/**
 * 页面详情组件
 * @returns
 */
export default function BlogId() {
    const router = useRouter();
    const user = useAppSelector(state => state.user);
    console.log('%c [ user ]-11', 'font-size:13px; background:pink; color:#bf2c9f;', user);
    return (
        <>
            <p>Post: {router.query.id}</p>
            {user.data?.name}
        </>
    );
}
