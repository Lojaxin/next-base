module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            animation: {
                grid: 'grid 1s linear infinite',
            },
            keyframes: {
                grid: {
                    '0%': {
                        transform: 'translateY(-50%)',
                        opacity: '0', // 添加初始透明度
                    },
                    '100%': {
                        transform: 'translateY(0)',
                        opacity: '1', // 添加结束透明度
                    },
                },
            },
        },
    },
};
