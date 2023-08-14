/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Image';
import classNames from 'classnames/bind';
import style from './Button.module.scss';
export interface ButtonProps {
    outline?: boolean;
    round?: boolean;
    primary?: boolean;
    hover?: boolean;
    icon?: string;
    iconLarge?: string;
    iconSmall?: string;
    disable?: string;
    to?: string;
    children: React.ReactNode;
    className?: any;
    onClick?: () => void;
    href?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

export default function Button({
    primary,
    round,
    children,
    to,
    onClick,
    disable,
    outline,
    className,
    iconLarge,
    iconSmall,
    large,
    small,
    icon,
    href,
    ...passProps
}: ButtonProps) {
    const cx = classNames.bind(style);
    const props = { onClick, large, small, primary, round, outline, to, href, disable, ...passProps };
    let Comp: any;
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof key === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        Comp = Link;
        props.to = to;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    } else {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        Comp = 'button';
    }
    const classes = cx(
        'wrapper',
        {
            primary,
            round,
            outline,
            [className]: className,
        },
        { link: props.href || props.to },
    );
    const classIcon = cx({
        iconLarge,
        iconSmall,
    });
    return (
        <Comp className={classes} {...props}>
            {icon && <Image className={classIcon} src={icon} />}
            {children}
        </Comp>
    );
}
