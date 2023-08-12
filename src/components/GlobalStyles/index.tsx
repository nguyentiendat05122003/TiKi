import { ReactNode } from 'react';
import './GlobalStyles.scss';
export interface GlobalStylesProps {
    children: ReactNode;
}

export default function GlobalStyles({ children }: GlobalStylesProps) {
    return <div>{children}</div>;
}
