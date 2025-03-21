import { useEffect } from 'react';

/**
 * 布局组件
 * @param param0
 * @returns
 */
export default function Layout({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        console.log(
            '%c [ Layout ]-10',
            'font-size:13px; background:pink; color:#bf2c9f;',
            'Layout',
        );
    }, []);

    return (
        <>
            this is Layout
            {children}
        </>
    );
}
