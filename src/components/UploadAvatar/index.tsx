import { images } from '~/assets/image';
import { default as CompImage } from '../Image';
import style from './UploadAvatar.module.scss';
import classNames from 'classnames/bind';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Slider } from '@mui/material';
export interface UploadAvatarProps {
    onClick: () => void;
    onSubmit: (value: string) => void;
}
export default function UploadAvatar({ onClick, onSubmit }: UploadAvatarProps) {
    const cx = classNames.bind(style);
    const inputRef = useRef<HTMLInputElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imgRef = useRef<HTMLImageElement>();
    const [isShowEditImage, setIsShowEditImage] = useState(false);
    const [file, setFile] = useState('');
    const handleClickChooseImg = (e: ChangeEvent<HTMLInputElement>) => {
        setIsShowEditImage(true);
        if (e.target.files) {
            setFile(URL.createObjectURL(e.target.files[0]));
        }
    };
    const handleChangeUrlImg = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const img = new Image();
            const ctx = canvasRef.current?.getContext('2d');
            setFile(URL.createObjectURL(e.target.files[0]));
            img.src = URL.createObjectURL(e.target.files[0]);
            img.onload = function () {
                if (canvasRef.current && ctx) {
                    const wrh = img.width / img.height;
                    let newWidth = canvasRef.current?.width || 0;
                    let newHeight = newWidth / wrh;
                    if (newHeight > canvasRef.current.height) {
                        newHeight = canvasRef.current?.height;
                        newWidth = newHeight * wrh;
                    }
                    const xOffset = (canvasRef.current.width - newWidth) / 2;
                    const yOffset = (canvasRef.current.height - newHeight) / 2;
                    const scale = 1; // Đặt tỷ lệ thu nhỏ/giãn thành 1 để không làm thay đổi kích thước ảnh
                    ctx?.scale(scale, scale);
                    ctx?.drawImage(img, xOffset, yOffset, newWidth, newHeight);
                    //drawImageScaled(img, ctx);
                }
            };
            imgRef.current = img;
        }
    };
    const handleScaleImage = (event: Event, value: number | number[]) => {
        console.log(event);
        const newValue = value as number;
        const ctx = canvasRef.current?.getContext('2d');
        if (canvasRef.current && ctx && imgRef.current) {
            const imgWidth = imgRef.current.width;
            const imgHeight = imgRef.current.height;
            const newWidth = imgWidth * newValue;
            const newHeight = imgHeight * newValue;
            const xOffset = (canvasRef.current.width - newWidth) / 2;
            const yOffset = (canvasRef.current.height - newHeight) / 2;
            ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            ctx.drawImage(imgRef.current, xOffset, yOffset, newWidth, newHeight);
        }
    };
    useEffect(() => {
        const img = new Image();
        img.src = file;
        const ctx = canvasRef.current?.getContext('2d');
        img.onload = function () {
            if (canvasRef.current && ctx) {
                const wrh = img.width / img.height;
                let newWidth = canvasRef.current?.width || 0;
                let newHeight = newWidth / wrh;
                if (newHeight > canvasRef.current.height) {
                    newHeight = canvasRef.current?.height;
                    newWidth = newHeight * wrh;
                }
                const xOffset = (canvasRef.current.width - newWidth) / 2;
                const yOffset = (canvasRef.current.height - newHeight) / 2;
                const scale = 1;
                ctx?.scale(scale, scale);
                ctx?.drawImage(img, xOffset, yOffset, newWidth, newHeight);
            }
        };
        imgRef.current = img;
    }, [file]);
    const handleClickClose = () => {
        onClick();
    };
    const handleSaveImage = () => {
        if (imgRef.current) {
            onSubmit(imgRef.current?.src);
        }
        onClick();
    };
    return (
        <div>
            <div className={cx('overlay')}>
                <div className={cx('container')}>
                    <div className={cx('container-wrapper')}>
                        <div className={cx('header')}>
                            <div className={cx('title')}>Cập nhật ảnh đại diện</div>
                            <div onClick={handleClickClose}>
                                <CompImage src={images.close} className={cx('icon-close')} />
                            </div>
                        </div>

                        {isShowEditImage ? (
                            <>
                                <div className={cx('img-preview')}>
                                    <div className={cx('img-edit')}>
                                        <canvas
                                            ref={canvasRef}
                                            width="600"
                                            height="600"
                                            className={cx('editor-canvas')}
                                            id="avatar-canvas"
                                            style={{
                                                width: '400px',
                                                height: '400px',
                                                cursor: 'grab',
                                                touchAction: 'none',
                                                transform: 'translate(-50px, -50px)',
                                            }}
                                        ></canvas>
                                    </div>
                                    <div className={cx('reload')}>
                                        <div className={cx('upload-img')}>
                                            <input
                                                onChange={handleChangeUrlImg}
                                                ref={inputRef}
                                                type="file"
                                                accept="image/*"
                                                style={{ display: 'none' }}
                                            />
                                            <div
                                                onClick={() => {
                                                    inputRef.current?.click();
                                                }}
                                                className={cx('img-select')}
                                            >
                                                <span>Nhấn để chọn hoặc kéo thả hình ảnh vào khung này.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('range-bar')}>
                                    <div>
                                        <CompImage className={cx('zoom-out')} src={images.zoomIn} />
                                    </div>
                                    <Slider
                                        onChange={handleScaleImage}
                                        min={0.3}
                                        defaultValue={0.3}
                                        max={0.7}
                                        step={0.05}
                                        size="small"
                                    />
                                    <div>
                                        <CompImage className={cx('zoom-in')} src={images.zoomOut} />
                                    </div>
                                </div>
                                <div className={cx('bottom')}>
                                    <button onClick={handleClickClose} className={cx('left')}>
                                        Huỷ bỏ
                                    </button>
                                    <button onClick={handleSaveImage} className={cx('right')}>
                                        Lưu thay đổi
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className={cx('img-upload')}>
                                    <input
                                        onChange={handleClickChooseImg}
                                        ref={inputRef}
                                        type="file"
                                        accept="image/*"
                                        style={{ display: 'none' }}
                                    />

                                    <div
                                        onClick={() => {
                                            inputRef.current?.click();
                                        }}
                                        className={cx('img-select-wrapper')}
                                    >
                                        <div className={cx('img-select')}>
                                            <span>Nhấn để chọn hoặc kéo thả hình ảnh vào khung này.</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
