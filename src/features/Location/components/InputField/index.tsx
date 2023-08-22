import { RefObject, forwardRef, useImperativeHandle, useRef } from 'react';
import classNames from 'classnames/bind';
import style from '../LocationForm/LocationForm.module.scss';
import { ArrowDown } from '~/components/Svg';
interface InputFieldProps {
    label: string;
    placeholder: string;
    handleClickProvince: () => void;
    handleBlur: () => void;
    isShowMenu: boolean;
}
export interface InputFieldRefs {
    ref1: HTMLInputElement;
    ref2: RefObject<HTMLDivElement>;
}
const InputField = forwardRef<InputFieldRefs, InputFieldProps>(
    ({ label, placeholder, handleBlur, handleClickProvince, isShowMenu }, forwardedRef) => {
        const cx = classNames.bind(style);
        const localRef1 = useRef<HTMLInputElement | null>(null);
        const localRef2 = useRef<HTMLDivElement | null>(null);

        // Forward the refs to the parent component using forwardedRef
        useImperativeHandle(forwardedRef, () => ({
            ref1: localRef1,
            ref2: localRef2,
        }));
        return (
            <div className={cx('row')}>
                <p className={cx('title')}>{label}</p>
                <div onClick={handleClickProvince} className={cx('content')}>
                    <input onBlur={handleBlur} ref={localRef1} placeholder={placeholder} className={cx('input')} />
                    <div className={cx('icon-wrapper')}>
                        <span className={cx('separator')}></span>
                        <div ref={localRef2} className={cx('icon')}>
                            <ArrowDown className={cx('arrow')} />
                        </div>
                    </div>
                    {isShowMenu && (
                        <div onMouseDown={(e) => e.preventDefault()} className={cx('menu')}>
                            <div className={cx('menu-wrapper')}>
                                {provinceList.map((item, idx: number) => {
                                    return (
                                        <div key={idx} className={cx('menu-item')}>
                                            {item.name}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    },
);
export default InputField;
