/* eslint-disable @typescript-eslint/no-explicit-any */
import { FilterPriceType, filterParamsType } from '~/types/product';
import FilterByCategory from '../FilterByCategory';
import FilterPrice from '../FilterPrice';
import FilterService from '../FilterServices';

export interface FiltersProps {
    onChange: (value: any) => void;
    filters: any;
}

export default function Filters({ onChange, filters }: FiltersProps) {
    const handleClickCategory = (id: number) => {
        onChange({ ['category.id']: id });
    };
    const handleClickPrice = (prices: FilterPriceType) => {
        onChange(prices);
    };
    const handleChangeService = (newValue: filterParamsType) => {
        onChange(newValue);
    };
    return (
        <div>
            <FilterByCategory onClick={handleClickCategory} />
            <FilterService filters={filters} onChange={handleChangeService} />
            <FilterPrice onClick={handleClickPrice} />
        </div>
    );
}
