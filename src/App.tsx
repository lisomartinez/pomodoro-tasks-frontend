import React from "react";

import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Layout from "./containers/layout";
import Home from "./modules/home/home";
import Tasks from "./modules/tasks";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/tasks">
            <Tasks />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
