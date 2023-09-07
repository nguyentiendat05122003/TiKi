import { routers } from '~/config';
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
];

const privateRouter: RouterType[] = [];

export { privateRouter, publicRouter };
