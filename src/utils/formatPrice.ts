export function FormatPrice(price: number) {
    const result = new Intl.NumberFormat('vi-VN', { maximumSignificantDigits: 3 }).format(price);
    return result;
}
