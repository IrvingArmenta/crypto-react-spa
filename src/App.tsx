import { Switch, Route } from 'wouter';
import { mainTopNavBarLinks, routes } from './routes';
import { MainLayout } from './layout';
import { TopNavBar } from './components';
import { CoinDetails, Discover } from './views';

function App() {
  return (
    <MainLayout>
      <TopNavBar links={mainTopNavBarLinks} />
      <main>
        <Switch>
          <Route path={routes.Discover} component={Discover} />
          <Route path={routes.CoinDetails} component={CoinDetails} />
        </Switch>
      </main>
    </MainLayout>
  );
}

export default App;
