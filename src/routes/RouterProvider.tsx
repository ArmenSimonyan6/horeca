import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../components/templates/Layout';
import { routes } from './routesArray';

const RouterProvider: FC = () => {
  const renderRoutes = routes.map(({ path, component }) => (
    <Route key={path} path={path} element={<Layout>{component}</Layout>} />
  ));
  return <Routes>{renderRoutes}</Routes>;
};

export default RouterProvider;
