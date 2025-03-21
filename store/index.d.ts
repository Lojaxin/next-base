// 定义一个通用的 RootState 类型
export type RootState<T> = {
    data: T | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
};
