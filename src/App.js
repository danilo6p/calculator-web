import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ImcContextProvider } from './context/ImcContext';
import { Calculate } from './pages/Calculate';
import { Login } from './pages/Login';
import { Results } from './pages/Results';

import './styles/global.scss'

function App() {
  return (
    <BrowserRouter>
      <ImcContextProvider>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/calculate" component={Calculate} />
          <Route path="/results" component={Results} />
        </Switch>
      </ImcContextProvider>
    </BrowserRouter>
  );
}

export default App;
