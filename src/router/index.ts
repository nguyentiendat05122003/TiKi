import { routers } from '~/config';
import Cart from '~/features/cart';
import DetailProduct from '~/features/products/component/DetailProduct';
import { HeaderOnly } from '~/layouts';
import ManageAccount from '~/layouts/ManageAccount';
import AccountEdit from '~/pages/AccountEdit';
import Astra from '~/pages/Astra';
import { Home } from '~/pages/Home';
import LocationEdit from '~/pages/Location';
import OrderHistory from '~/pages/OrderHistory';
import { RouterType } from '~/types';

const publicRouter: RouterType[] = [
    { path: routers.home, component: Home, layout: HeaderOnly },
    { path: routers.astra, component: Astra, layout: HeaderOnly },
    { path: routers.editAccount, component: AccountEdit, layout: ManageAccount },
    { path: routers.manageOrder, component: OrderHistory, layout: ManageAccount },
    { path: routers.location, component: LocationEdit, layout: ManageAccount },
    { path: routers.cart, component: Cart, layout: HeaderOnly },
    { path: routers.detailProduct, component: DetailProduct, layout: HeaderOnly },
];

const privateRouter: RouterType[] = [];

export { privateRouter, publicRouter };
