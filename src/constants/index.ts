import home from '~/assets/image/home.png';
import homeActive from '~/assets/image/home-active.png';
import iconFace from '~/assets/image/icon.png';
import king from '~/assets/image/king.png';
import kingActive from '~/assets/image/king-active.png';
export const HEADER_SEARCH = [
    'Bạn tìm gì hôm nay',
    'Tiki Rẻ mỗi ngày',
    'Rẻ mỗi ngày, không chỉ một ngày',
    'Rẻ mỗi ngày, không cần săn sales',
];

export const LIST_MENU_SHORT_USER = [
    {
        id: 0,
        title: 'Trang chủ',
        iconActive: homeActive,
        iconDefault: home,
        status: true,
        to: '/',
        isHover: false,
    },
    {
        id: 1,
        title: 'Astra',
        iconActive: kingActive,
        iconDefault: king,
        status: false,
        to: '/astra-rewards/home',
        isHover: false,
    },
    {
        id: 2,
        title: 'Tài khoản',
        iconActive: iconFace,
        iconDefault: iconFace,
        status: false,
        isHover: true,
    },
];
export const HEADER_LINKS = [
    { id: 0, title: 'trái cây', path: '/' },
    { id: 1, title: 'thịt, trứng', path: '/' },
    { id: 2, title: 'rau củ quả', path: '/' },
    { id: 3, title: 'sữa, bơ, phô mai', path: '/' },
    { id: 4, title: 'hải sản', path: '/' },
    { id: 5, title: 'gạo, mì ăn liền', path: '/' },
    { id: 6, title: 'đồ uống, bia rượu', path: '/' },
    { id: 7, title: 'bánh kẹo', path: '/' },
];
