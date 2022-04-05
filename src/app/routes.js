import Registration from '../features/auth/Registration';
import Session from '../features/auth/Session';
import DestroyItems from '../features/items/Destroy';
import Items from '../features/items/Index';
import NewItem from '../features/items/New';
import Details from '../features/items/Show';
import Reservations from '../features/reservation/Index';
import NewReservations from '../features/reservation/New';

const routes = [
  {
    name: 'Items',
    path: '/',
    component: <Items />,
  },
  {
    name: 'Sign Up',
    path: '/sign_up',
    component: <Registration />,
  },
  {
    name: 'Sing In',
    path: '/sing_in',
    component: <Session />,
  },
  {
    name: 'New',
    path: '/items',
    component: <NewItem />,
  },
  {
    name: 'Ditails',
    path: '/items/:itemId',
    component: <Details />,
  },
  {
    name: 'My Reservations',
    path: '/reservations',
    component: <Reservations />,
  },
  {
    name: 'New Reservations',
    path: '/reservations/:id',
    component: <NewReservations />,
  },
  {
    name: 'Delete',
    path: '/delete',
    component: <DestroyItems />,
  },
];

export default routes;
