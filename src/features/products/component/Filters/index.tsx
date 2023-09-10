import FilterByCategory from '../FilterByCategory';
import FilterPrice from '../FilterPrice';
import FilterService from '../FilterServices';

export interface FiltersProps {}

export default function Filters(props: FiltersProps) {
    return (
        <div>
            <FilterByCategory />
            <FilterService />
            <FilterPrice />
        </div>
    );
}
