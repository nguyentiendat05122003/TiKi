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
import { SuggestSearchType } from '~/types';

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
    { id: 4, to: '/', thumbnail: category5, name: 'Balo, cặp, túi chống sốc laptop' },
    { id: 5, to: '/', thumbnail: category6, name: 'Balo và Vali' },
    { id: 6, to: '/', thumbnail: category7, name: 'Đũa, muỗng, nĩa' },
    { id: 7, to: '/', thumbnail: category8, name: 'Điện Thoại - Máy Tính Bảng' },
];
