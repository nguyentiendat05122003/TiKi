import { FormatPrice } from '~/utils/formatPrice';
/* eslint-disable @typescript-eslint/no-unused-vars */
import { filterParamsType } from './../types/product';
import home from '~/assets/image/home.png';
import homeActive from '~/assets/image/home-active.png';
import iconFace from '~/assets/image/icon.png';
import king from '~/assets/image/king.png';
import kingActive from '~/assets/image/king-active.png';
import huggies from '~/assets/image/huggies.jpg';
import trend1 from '~/assets/image/trend1.jpg';
import trend2 from '~/assets/image/trend2.jpg';
import trend3 from '~/assets/image/trend3.jpg';
import trend4 from '~/assets/image/trend4.jpg';
import trend5 from '~/assets/image/trend5.jpg';
import trend6 from '~/assets/image/trend6.jpg';
import category1 from '~/assets/image/category1.png';
import category2 from '~/assets/image/category2.png';
import category3 from '~/assets/image/category3.jpg';
import category4 from '~/assets/image/category4.jpg';
import category5 from '~/assets/image/category5.jpg';
import category6 from '~/assets/image/category6.png';
import category7 from '~/assets/image/category7.jpg';
import category8 from '~/assets/image/category8.png';
import homeActiveMobile from '~/assets/image/home-active-mobile.png';
import homeMobile from '~/assets/image/home-mobile.png';
import menuMobile from '~/assets/image/menu-mobile.png';
import menuActiveMobile from '~/assets/image/menu-active-mobile.png';
import fireMobile from '~/assets/image/fire-mobile.png';
import chatMobile from '~/assets/image/chat-mobile.png';
import accountMobile from '~/assets/image/account-mobile.png';
import sliderProduct1 from '~/assets/image/sliderProduct1.webp';
import sliderProduct2 from '~/assets/image/sliderProduct2.webp';
import sliderProduct3 from '~/assets/image/sliderProduct3.webp';
import sliderProduct4 from '~/assets/image/sliderProduct4.webp';
import sliderProduct5 from '~/assets/image/sliderProduct5.webp';
import sliderProduct6 from '~/assets/image/sliderProduct6.webp';
import sliderProduct7 from '~/assets/image/sliderProduct7.webp';
import sliderProduct8 from '~/assets/image/sliderProduct8.webp';
import sliderProduct9 from '~/assets/image/sliderProduct9.webp';
import sliderProduct10 from '~/assets/image/sliderProduct10.webp';
import sliderProductMini1 from '~/assets/image/sliderProductMini1.webp';
import sliderProductMini2 from '~/assets/image/sliderProductMini2.webp';
import sliderProductMini3 from '~/assets/image/sliderProductMini3.webp';
import sliderProductMini4 from '~/assets/image/sliderProductMini4.webp';
import sliderProductMini5 from '~/assets/image/sliderProductMini5.webp';
import sliderProductMini6 from '~/assets/image/sliderProductMini6.webp';
import sliderProductMini7 from '~/assets/image/sliderProductMini7.webp';
import sliderProductMini8 from '~/assets/image/sliderProductMini8.webp';
import sliderProductMini9 from '~/assets/image/sliderProductMini9.webp';
import sliderProductMini10 from '~/assets/image/sliderProductMini10.webp';

import { SuggestSearchType } from '~/types';
import {
    AccountIcon,
    BellIcon,
    HomeIcon,
    ListIcon,
    LocationIcon,
    ManageOrder,
    PersonIcon,
} from '~/components/Svg';
import { images } from '~/assets/image';

export const HEADER_SEARCH = [
    'Bạn tìm gì hôm nay',
    'Tiki Rẻ mỗi ngày',
    'Rẻ mỗi ngày, không chỉ một ngày',
    'Rẻ mỗi ngày, không cần săn sales',
];

export const LIST_SLIDER_PRODUCT = [
    sliderProduct1,
    sliderProduct2,
    sliderProduct3,
    sliderProduct4,
    sliderProduct5,
    sliderProduct6,
    sliderProduct7,
    sliderProduct8,
    sliderProduct9,
    sliderProduct10,
];
export const LIST_SLIDER_PRODUCT_MINI = [
    sliderProductMini1,
    sliderProductMini2,
    sliderProductMini3,
    sliderProductMini4,
    sliderProductMini5,
    sliderProductMini6,
    sliderProductMini7,
    sliderProductMini8,
    sliderProductMini9,
    sliderProductMini10,
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

export const SEARCH_SUGGEST: SuggestSearchType[] = [
    { id: 0, to: '/', name: 'tai nghe bluetooth' },
    { id: 1, to: '/', name: 'xứ sở miên man' },
    { id: 2, to: '/', name: 'một đời như kẻ tìm đường' },
    { id: 3, to: '/', name: 'huggies', thumbnail: huggies },
    { id: 4, to: '/', name: 'cây cam ngọt của tôi' },
    { id: 5, to: '/', name: 'muôn kiếp nhân sinh' },
    { id: 6, to: '/', name: 'iphone 14 pro max' },
    { id: 7, to: '/', name: 'muôn kiếp nhân sinh 3' },
    { id: 8, to: '/', name: 'friso gold 4' },
];

export const TrendingSearch: SuggestSearchType[] = [
    { id: 0, to: '/', thumbnail: trend1, name: 'túi đựng laptop' },
    { id: 1, to: '/', thumbnail: trend3, name: 'iphone 14' },
    { id: 2, to: '/', thumbnail: trend2, name: 'sữa ensure' },
    { id: 3, to: '/', thumbnail: trend5, name: 'dielac alpha 4' },
    { id: 4, to: '/', thumbnail: trend4, name: 'muong an yaua' },
    { id: 5, to: '/', thumbnail: trend6, name: 'bao laptop 14 inch' },
];

export const Categories: SuggestSearchType[] = [
    { id: 0, to: '/', thumbnail: category1, name: 'Đồ Chơi - Mẹ & Bé' },
    { id: 1, to: '/', thumbnail: category2, name: 'Túi chống sốc' },
    { id: 2, to: '/', thumbnail: category3, name: 'Điện thoại Smartphone' },
    { id: 3, to: '/', thumbnail: category4, name: 'Sữa cho bé trên 24 tháng' },
    {
        id: 4,
        to: '/',
        thumbnail: category5,
        name: 'Balo, cặp, túi chống sốc laptop',
    },
    { id: 5, to: '/', thumbnail: category6, name: 'Balo và Vali' },
    { id: 6, to: '/', thumbnail: category7, name: 'Đũa, muỗng, nĩa' },
    {
        id: 7,
        to: '/',
        thumbnail: category8,
        name: 'Điện Thoại - Máy Tính Bảng',
    },
];

export const ListItemBottomNavigator = [
    {
        id: 0,
        title: 'Trang chủ',
        iconActive: homeActiveMobile,
        iconDefault: homeMobile,
        status: true,
        to: '/',
    },
    {
        id: 1,
        title: 'Danh Mục',
        iconActive: menuActiveMobile,
        iconDefault: menuMobile,
        status: false,
        to: '/',
    },
    {
        id: 2,
        title: 'Lướt',
        iconActive: fireMobile,
        iconDefault: fireMobile,
        status: false,
        to: '/',
    },
    {
        id: 3,
        title: 'Chat',
        iconActive: chatMobile,
        iconDefault: chatMobile,
        status: false,
        to: '/',
    },
    {
        id: 4,
        title: 'Cá Nhân',
        iconActive: accountMobile,
        iconDefault: accountMobile,
        status: false,
        to: '/',
    },
];

export const NavbarItemMobile = [
    {
        id: 0,
        title: 'Trang chủ',
        icon: HomeIcon,
        to: '/',
    },
    {
        id: 1,
        title: 'Danh sách ngành hàng',
        icon: ListIcon,
        to: '/',
    },
    {
        id: 2,
        title: 'Quản lý tài khoản',
        icon: AccountIcon,
        to: '/',
    },
    {
        id: 3,
        title: 'Thông báo',
        icon: BellIcon,
        to: '/',
    },
];

export const InfoAccountList = [
    {
        id: 0,
        to: '/customer/account/edit',
        title: 'Thông tin tài khoản',
        icon: PersonIcon,
    },
    {
        id: 1,
        to: '/sales/order/history',
        title: 'Quản lý đơn hàng',
        icon: ManageOrder,
    },
    {
        id: 2,
        to: '/customer/address',
        title: 'Sổ địa chỉ',
        icon: LocationIcon,
    },
];

export const days = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
    26, 27, 28, 29, 30, 31,
];
export const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const years = [0];
const nowYear = new Date().getFullYear();
for (let index = nowYear; index > 1899; index--) {
    years.push(index);
}

export const TabsOrder = [
    { id: 0, title: 'Tất cả đơn', status: true },
    { id: 1, title: 'Chờ thanh toán', status: false },
    { id: 2, title: 'Đang xử lý', status: false },
    { id: 3, title: 'Đang vận chuyển', status: false },
    { id: 4, title: 'Đã giao', status: false },
    { id: 5, title: 'Đã huỷ', status: false },
];

export const SLIDER = [
    { id: 0, src: images.slider1 },
    { id: 1, src: images.slider2 },
    { id: 2, src: images.slider2 },
    { id: 3, src: images.slider3 },
    { id: 4, src: images.slider4 },
    { id: 5, src: images.slider5 },
    { id: 6, src: images.slider6 },
    { id: 7, src: images.slider7 },
    { id: 8, src: images.slider8 },
    { id: 9, src: images.slider9 },
];
const categoriesList = [
    { id: 1, name: 'Thời trang' },
    { id: 2, name: 'Khẩu trang' },
    { id: 3, name: 'Làm đẹp' },
    { id: 4, name: 'Laptop' },
    { id: 5, name: 'Ổ cứng' },
    { id: 6, name: 'Điện thoại' },
];
export const OPTIONS = [
    { id: 1, title: 'Giá cao đến thấp', status: true, value: 'salePrice:DESC' },
    { id: 2, title: 'Giá thấp đến cao', status: false, value: 'salePrice:ASC' },
];

export const FILTERS = [
    {
        id: 0,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        title: (_filters: filterParamsType) => 'Giao hàng miễn phí',
        isActive: (filters: filterParamsType) => filters.isFreeShip,
        isVisible: (_filters: filterParamsType) => true,
        isRemove: false,
        isToggle: true,
        onRemove: (_filters: filterParamsType) => {
            return;
        },
        onToggle: (filters: filterParamsType) => {
            return { ...filters, isFreeShip: !filters.isFreeShip };
        },
    },
    {
        id: 1,
        title: (_filters: filterParamsType) => 'Có khuyến mãi',
        isActive: (_filters: filterParamsType) => true,
        isVisible: (filters: filterParamsType) => filters.isPromotion,
        isRemove: true,
        isToggle: false,
        onRemove: (filters: filterParamsType) => {
            return { ...filters, isPromotion: !filters.isPromotion };
        },
        onToggle: (_filters: filterParamsType) => {
            return;
        },
    },
    {
        id: 2,
        title: (filters: filterParamsType) => {
            if (Number(filters.salePrice_gte) === 380000) {
                return `Trên ${FormatPrice(filters.salePrice_gte)}`;
            } else if (Number(filters.salePrice_lte) === 60000) {
                return `Dưới ${FormatPrice(filters.salePrice_lte)}`;
            } else {
                return `${FormatPrice(filters.salePrice_gte)}-${FormatPrice(
                    filters.salePrice_lte,
                )}`;
            }
        },
        isActive: (_filters: filterParamsType) => true,
        isVisible: (filters: filterParamsType) => filters.salePrice_gte || filters.salePrice_lte,
        isRemove: true,
        isToggle: false,
        onRemove: (filters: filterParamsType) => {
            delete filters.salePrice_gte;
            delete filters.salePrice_lte;
            return { ...filters };
        },
        onToggle: (_filters: filterParamsType) => {
            return;
        },
    },
    {
        id: 3,
        title: (filters: filterParamsType) => {
            const category = categoriesList.filter(
                (item) => item.id === Number(filters['category.id']),
            );
            return category[0].name || 'test';
        },
        isActive: (_filters: filterParamsType) => true,
        isVisible: (filters: filterParamsType) => filters['category.id'],
        isRemove: true,
        isToggle: false,
        onRemove: (filters: filterParamsType) => {
            delete filters['category.id'];
            return { ...filters };
        },
        onToggle: (_filters: filterParamsType) => {
            return;
        },
    },
];

export const outIndexList = 4;
