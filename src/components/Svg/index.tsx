import { forwardRef } from 'react';

interface PropsArrow {
    className: string;
}
export function Arrow({ className }: PropsArrow) {
    return (
        <svg
            width="6"
            height="11"
            viewBox="0 0 6 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L6.35355 5.64645C6.54882 5.84171 6.54882 6.15829 6.35355 6.35355L1.35355 11.3536C1.15829 11.5488 0.841709 11.5488 0.646447 11.3536C0.451184 11.1583 0.451184 10.8417 0.646447 10.6464L5.29289 6L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z"
            ></path>
        </svg>
    );
}

export const ArrowDown = forwardRef<SVGSVGElement, PropsArrow>(({ className }: PropsArrow, ref) => {
    return (
        <svg
            ref={ref}
            height="20"
            width="20"
            viewBox="0 0 20 20"
            aria-hidden="true"
            focusable="false"
            className={className}
        >
            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
        </svg>
    );
});

export const ArrowLeft = forwardRef<SVGSVGElement, PropsArrow>(
    ({ className = '' }: PropsArrow, ref) => {
        return (
            <svg
                ref={ref}
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="30"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
                className={className}
            >
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
            </svg>
        );
    },
);

export const CartSvg = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <defs>
                <path
                    id="yqtrzm486a"
                    d="M6.5 18c.828 0 1.5.672 1.5 1.5S7.328 21 6.5 21 5 20.328 5 19.5 5.672 18 6.5 18zm12 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zM3.857.2c.401 0 .74.297.793.694l.542 4.068H21c.505 0 .883.462.784.957l-1.904 9.524c-.075.374-.403.643-.785.643H5.762c-.401 0-.74-.297-.793-.695L3.157 1.8H1C.558 1.8.2 1.442.2 1 .2.558.558.2 1 .2zm16.167 6.362H5.406l1.056 7.924H18.44l1.585-7.924z"
                />
            </defs>
            <g fill="none" fillRule="evenodd">
                <g transform="translate(1 1)">
                    <use fill="#fff" xlinkHref="#yqtrzm486a" />
                </g>
            </g>
        </svg>
    );
};

export const SearchSvg = ({ className = '' }: PropsArrow) => {
    return (
        <svg
            stroke="currentColor"
            className={className}
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        </svg>
    );
};

export const AvatarDefault = ({ className }: PropsArrow) => {
    return (
        <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className={className}
            height="40"
            width="40"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
        </svg>
    );
};

export const ArrowRight = ({ className }: PropsArrow) => {
    return (
        <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
        </svg>
    );
};
export const HomeIcon = () => {
    return (
        <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="25"
            width="25"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: '32px' }}
        >
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
        </svg>
    );
};
export const ListIcon = () => {
    return (
        <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="25"
            width="25"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: '32px' }}
        >
            <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"></path>
        </svg>
    );
};
export const AccountIcon = () => {
    return (
        <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="25"
            width="25"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: '32px' }}
        >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
        </svg>
    );
};

export const BellIcon = () => {
    return (
        <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="25"
            width="25"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: '32px' }}
        >
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path>
        </svg>
    );
};

export const LocationIcon = () => {
    return (
        <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="2.4rem"
            width="2.4rem"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
        </svg>
    );
};
export const ManageOrder = () => {
    return (
        <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="2.4rem"
            width="2.4rem"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z"></path>
        </svg>
    );
};

export const PersonIcon = () => {
    return (
        <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="2.4rem"
            width="2.4rem"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
        </svg>
    );
};

export const ArrowDownThin = ({ className }: PropsArrow) => {
    return (
        <svg
            className={className}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.30806 6.43306C3.55214 6.18898 3.94786 6.18898 4.19194 6.43306L10 12.2411L15.8081 6.43306C16.0521 6.18898 16.4479 6.18898 16.6919 6.43306C16.936 6.67714 16.936 7.07286 16.6919 7.31694L10.4419 13.5669C10.1979 13.811 9.80214 13.811 9.55806 13.5669L3.30806 7.31694C3.06398 7.07286 3.06398 6.67714 3.30806 6.43306Z"
                fill="#808089"
            ></path>
        </svg>
    );
};

export const Plus = ({ className }: PropsArrow) => {
    return (
        <svg
            className={className}
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
        </svg>
    );
};

export const Start = () => {
    return (
        <svg
            width="12"
            height="12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: '12px', height: '12px', display: 'inline-book' }}
        >
            <g clipPath="url(#a)">
                <path
                    d="M6.448 2.029a.5.5 0 0 0-.896 0L4.287 4.59l-2.828.41a.5.5 0 0 0-.277.854l2.046 1.994-.483 2.816a.5.5 0 0 0 .726.528L6 9.863l2.53 1.33a.5.5 0 0 0 .725-.527l-.483-2.817 2.046-1.994a.5.5 0 0 0-.277-.853L7.713 4.59 6.448 2.029Z"
                    fill="#FFC400"
                ></path>
            </g>
            <defs>
                <clipPath id="a">
                    <path fill="#fff" transform="translate(1 1.5)" d="M0 0h10v10H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
};

export const DecreaseIcon = ({ className }: PropsArrow) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            className={className}
        >
            <defs>
                <path
                    id="ajeife9ema"
                    d="M11.667 1.667L6.672 1.667 4.994 1.667 0 1.667 0 0 4.994 0 11.667 0z"
                />
            </defs>
            <g fill="none" fill-rule="evenodd">
                <g>
                    <g>
                        <g>
                            <g>
                                <g transform="translate(-334 -5910) translate(80 5570) translate(214 340) translate(40) translate(4.167 9.167)">
                                    <use fill="#787878" />
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

export const IncreaseIcon = ({ className }: PropsArrow) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            className={className}
        >
            <defs>
                <path
                    id="jfmgrwavha"
                    d="M11.667 6.655L6.672 6.655 6.672 11.667 4.994 11.667 4.994 6.655 0 6.655 0 5.011 4.994 5.011 4.994 0 6.672 0 6.672 5.011 11.667 5.011z"
                />
            </defs>
            <g fill="none" fill-rule="evenodd">
                <g>
                    <g>
                        <g>
                            <g>
                                <g>
                                    <g>
                                        <g>
                                            <g transform="translate(-447 -3846) translate(80 3626) translate(299 140) translate(0 44) translate(0 32) translate(64) translate(4 4) translate(4.167 4.167)">
                                                <mask id="4rqhsoutfb" fill="#fff"></mask>
                                                <use fill="#787878" />
                                                <g fill="#787878" mask="url(#4rqhsoutfb)">
                                                    <path
                                                        d="M0 0H20V20H0z"
                                                        transform="translate(-4.167 -4.167)"
                                                    />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

export const DeleteIcon = ({ className }: PropsArrow) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            className={className}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.64775 1.5C5.64775 1.15482 5.92757 0.875 6.27275 0.875H11.7273C12.0725 0.875 12.3523 1.15482 12.3523 1.5V3.60225H16.5C16.8452 3.60225 17.125 3.88208 17.125 4.22725C17.125 4.57243 16.8452 4.85225 16.5 4.85225H11.7321C11.7305 4.85227 11.7289 4.85227 11.7273 4.85227C11.7257 4.85227 11.7241 4.85227 11.7225 4.85225H6.27758C6.27597 4.85227 6.27436 4.85227 6.27275 4.85227C6.27113 4.85227 6.26952 4.85227 6.26791 4.85225H1.5C1.15482 4.85225 0.875 4.57243 0.875 4.22725C0.875 3.88208 1.15482 3.60225 1.5 3.60225H5.64775V1.5ZM6.89775 3.60225H11.1023V2.125H6.89775V3.60225ZM3.50098 6.33115C3.84528 6.30656 4.14432 6.56574 4.1689 6.91004L4.76004 15.1887C4.7733 15.375 4.8567 15.5496 4.99342 15.6769C5.13013 15.8042 5.31002 15.875 5.49685 15.875H12.5032C12.6901 15.875 12.8699 15.8042 13.0067 15.6769C13.1434 15.5496 13.2268 15.3752 13.24 15.1888L13.8312 6.91004C13.8558 6.56574 14.1548 6.30656 14.4991 6.33115C14.8434 6.35573 15.1026 6.65477 15.078 6.99907L14.4869 15.2776C14.4869 15.2776 14.4869 15.2775 14.4869 15.2776C14.4511 15.7792 14.2266 16.2489 13.8586 16.5916C13.4905 16.9344 13.0062 17.125 12.5032 17.125H5.49687C4.99388 17.125 4.50958 16.9344 4.1415 16.5916C3.77346 16.2489 3.54896 15.7794 3.51322 15.2777C3.51321 15.2777 3.51322 15.2778 3.51322 15.2777L2.92208 6.99907C2.89749 6.65477 3.15668 6.35573 3.50098 6.33115ZM7.33333 7.54167C7.67851 7.54167 7.95833 7.82149 7.95833 8.16667V12.3333C7.95833 12.6785 7.67851 12.9583 7.33333 12.9583C6.98816 12.9583 6.70833 12.6785 6.70833 12.3333V8.16667C6.70833 7.82149 6.98816 7.54167 7.33333 7.54167ZM10.6667 7.54167C11.0118 7.54167 11.2917 7.82149 11.2917 8.16667V12.3333C11.2917 12.6785 11.0118 12.9583 10.6667 12.9583C10.3215 12.9583 10.0417 12.6785 10.0417 12.3333V8.16667C10.0417 7.82149 10.3215 7.54167 10.6667 7.54167Z"
                fill="#787878"
            />
        </svg>
    );
};

export const SuccessIcon = ({ className }: PropsArrow) => {
    return (
        <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
        </svg>
    );
};
