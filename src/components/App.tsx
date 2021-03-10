import React from 'react';
import { routes } from "lib/routes";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from 'store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Switch>
        {routes.map(({ path, page, exact }, i) => (
          <Route exact={exact} path={path} component={page} key={i} />
        ))}
      </Switch>
    </Provider>
  );
}

export default App;
