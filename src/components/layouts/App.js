import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { appRoutes } from "../../routes";
import "../../assets/styles/index.scss"
import 'antd/dist/antd.css'; 
import HeaderComponent from "./header";
import FooterComponent from "./footer";

function App() {
  return (
    <Router>
      <header>
        <HeaderComponent />
      </header>
      <main>
        <Switch>
          {appRoutes.map((r) => {
            return (
              <Route key={r.name} path={r.path} exact={r.exact}>
                <r.component />
              </Route>
            );
          })}
        </Switch>
      </main>
      {/* <footer>
        <FooterComponent />
      </footer> */}
    </Router>
  );
}

export default App;
