import DestroySession from '../features/auth/DestroySession';
import Registration from '../features/auth/Registration';
import Session from '../features/auth/Session';
import DestroyItems from '../features/items/Destroy';
import Items from '../features/items/Index';
import NewItem from '../features/items/New';
import Details from '../features/items/Show';
import Reservations from '../features/reservation/Index';
import NewReservation from '../features/reservation/New';

const routes = [
  {
    name: 'Items',
    path: '/',
    component: <Items />,
  },
  {
    name: 'Create New Item',
    path: '/items/new',
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
    path: '/reservations/new',
    component: <NewReservation itemId={0} />,
  },
  {
    name: 'Delete Item',
    path: '/delete',
    component: <DestroyItems />,
  },
  {
    name: 'Sing In',
    path: '/sign_in',
    component: <Session />,
  },
  {
    name: 'Sign Up',
    path: '/sign_up',
    component: <Registration />,
  },
  {
    name: 'Sing Out',
    path: '/sign_out',
    component: <DestroySession />,
  },
];

export default routes;
