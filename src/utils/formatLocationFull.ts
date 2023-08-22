import { LocationType } from '~/types';

export function FormatLocationFull(location: LocationType) {
    let results = location.ward + ', ' + location.district + ', ' + location.province;
    if (location.province === '') {
        results = 'Chọn ví trí giao hàng dưới đây';
    }
    return results;
}
