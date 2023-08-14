import { useState, useEffect } from 'react';
function useDebounce(value: string, delay: number) {
    const [debounce, setDebounce] = useState(value);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebounce(value);
        }, delay);
        return () => {
            clearTimeout(timerId);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    return debounce;
}

export default useDebounce;
