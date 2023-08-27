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
                fill="rgb(13,92,182)"
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

export const ArrowLeft = forwardRef<SVGSVGElement, PropsArrow>(({ className = '' }: PropsArrow, ref) => {
    return (
        <svg
            ref={ref}
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="30"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
        </svg>
    );
});

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
            <g fill="none" fill-rule="evenodd">
                <g transform="translate(1 1)">
                    <use fill="#fff" xlinkHref="#yqtrzm486a" />
                </g>
            </g>
        </svg>
    );
};

export const SearchSvg = () => {
    return (
        <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        </svg>
    );
};
