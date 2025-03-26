import { About, History, Home, PageNotFound } from 'containers';

export const AppRoutes = {
  Home: '/',
  About: '/about',
  History: '/history',
  PageNotFound: '/*',
};

export const routes = [
  {
    path: AppRoutes.Home,
    component: typeof Home,
  },
  {
    path: AppRoutes.About,
    component: typeof About,
  },
  {
    path: AppRoutes.History,
    component: typeof History,
  },
  {
    path: AppRoutes.PageNotFound,
    component: typeof PageNotFound,
  },
];
