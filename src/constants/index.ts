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
    },
    {
        id: 1,
        title: 'Astra',
        iconActive: kingActive,
        iconDefault: king,
        status: false,
        to: '/astra-rewards/home',
    },
    {
        id: 2,
        title: 'Tài khoản',
        iconActive: iconFace,
        iconDefault: iconFace,
        status: false,
    },
];
