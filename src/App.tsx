import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/scss/index.scss';
import { Home, About, History, PageNotFound, Loader } from './containers';
import RouterProvider from 'routes/RouterProvider';
import { AppRoutes } from 'routes/routesArray';
import ThemeProvider from 'theme/ThemeProvider';
import { Provider } from 'components/ui/provider';
import { Suspense } from 'react';

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <ThemeProvider>
          <Provider>
            <RouterProvider />
            <Routes>
              <Route path={AppRoutes.Home}>
                <Route index element={<Home />} />
              </Route>
              <Route path={AppRoutes.About} element={<About />} />
              <Route path={AppRoutes.History} element={<History />} />
              <Route path={AppRoutes.PageNotFound} element={<PageNotFound />} />
            </Routes>
          </Provider>
        </ThemeProvider>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
