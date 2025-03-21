import { useEffect } from 'react';
import Link from 'next/link';
import { useAppDispatch } from '@/store';
import { fetchUser } from '@/store/features/user/userThunks';
export default function Blog() {
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(fetchUser());
    }, []);

    return (
        <div>
            Blog
            <Link href="/blog/1">1</Link>
            <Link href="/blog/2">2</Link>
            <Link href="/blog/3">3</Link>
        </div>
    )
}