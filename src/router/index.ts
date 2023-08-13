import { routers } from '~/config';
import { HeaderOnly } from '~/layouts';
import Astra from '~/pages/Astra';
import { Home } from '~/pages/Home';
import { RouterType } from '~/types';

const publicRouter: RouterType[] = [
    { path: routers.home, component: Home, layout: HeaderOnly },
    { path: routers.astra, component: Astra, layout: HeaderOnly },
];

const privateRouter: RouterType[] = [];

export { privateRouter, publicRouter };
