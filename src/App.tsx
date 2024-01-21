import { Switch, Route } from 'wouter';
import { mainTopNavBarLinks, routes } from './routes';
import { CoinDetails, Discover } from './views';
import { MainLayout } from './layout';
import { TopNavBar } from './components';

function App() {
  return (
    <MainLayout>
      <TopNavBar links={mainTopNavBarLinks} />
      <Switch>
        <Route path={routes.Discover} component={Discover} />
        <Route path={routes.CoinDetails} component={CoinDetails} />
      </Switch>
    </MainLayout>
  );
}

export default App;
