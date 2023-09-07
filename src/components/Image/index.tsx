/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { images } from '~/assets/image';
export interface ImagesProps {
    src: string;
    alt?: string;
    className?: string;
    fallback?: string;
    [key: string]: any;
}
export default function Image({ src, alt = '', fallback: customFallback = images.noImage, ...props }: ImagesProps) {
    const [fallback, setFallBack] = useState('');
    const handleError = () => {
        setFallBack(customFallback);
    };
    return <img src={fallback || src} alt={alt} {...props} onError={handleError} />;
}
