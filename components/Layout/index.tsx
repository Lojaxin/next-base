import { useEffect } from 'react';
import { useTheme } from "next-themes"

/**
 * 布局组件
 * @param param0
 * @returns
 */
export default function Layout({ children }: { children: React.ReactNode }) {
    const { theme, setTheme } = useTheme()
    console.log('%c [ theme ]-11', 'font-size:13px; background:pink; color:#bf2c9f;', theme)

    useEffect(() => {
        console.log(
            '%c [ Layout ]-10',
            'font-size:13px; background:pink; color:#bf2c9f;',
            'Layout',
        );
    }, []);

    return (
        <>
            <div className="flex flex-row gap-2">
                <span onClick={() => {
                    console.log(theme)
                    setTheme("light")
                }}>
                    Light
                </span>
                <span onClick={() => {
                    console.log(theme)
                    setTheme("dark")
                }}>
                    Dark
                </span>
                <span onClick={() => setTheme("system")}>
                    System
                </span>
            </div>
            {children}
        </>
    );
}
