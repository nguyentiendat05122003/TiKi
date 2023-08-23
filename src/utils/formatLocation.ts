import { LocationType } from '~/types';

export function FormatLocation(location: LocationType) {
    let provinceString = location.province;
    let districtString = location.district;
    let wardString = location.ward;
    if (provinceString.startsWith('Tỉnh')) {
        provinceString = provinceString.substring(5);
    } else if (provinceString.startsWith('Thành phố ')) {
        provinceString = 'TP. ' + provinceString.substring(9);
    }
    if (districtString.startsWith('Quận')) {
        districtString = 'Q. ' + districtString.substring(5);
    } else if (districtString.startsWith('Huyện ')) {
        districtString = 'H. ' + districtString.substring(6);
    }
    if (wardString.startsWith('Xã ')) {
        wardString = 'X. ' + wardString.substring(3);
    } else if (wardString.startsWith('Phường ')) {
        wardString = 'P. ' + wardString.substring(7);
    }
    let results = districtString + ', ' + wardString + ', ' + provinceString;
    if (provinceString === '') {
        results = 'Chọn ví trí giao hàng tại đây';
    }
    return results;
}
