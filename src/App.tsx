import { Switch, Route } from 'wouter';
import { mainTopNavBarLinks, routes } from './routes';
import { MainLayout } from './layout';
import { TopNavBar } from './components';
import { CoinDetails, Discover, Error404 } from './views';
import { Suspense } from 'react';
import { CoinIdType } from './global-types';

function App() {
  return (
    <MainLayout>
      <TopNavBar links={mainTopNavBarLinks} />
      <main>
        <Switch>
          <Route path={routes.Discover}>
            <Suspense fallback={null}>
              <Discover />
            </Suspense>
          </Route>
          <Route path={routes.CoinDetails}>
            {(params) => {
              return (
                <Suspense fallback={null}>
                  <CoinDetails coinId={params.coinId as CoinIdType} />
                </Suspense>
              );
            }}
          </Route>
          <Route>
            <Suspense fallback={null}>
              <Error404 />
            </Suspense>
          </Route>
        </Switch>
      </main>
    </MainLayout>
  );
}

export default App;
