import React, { useEffect } from "react";
import "./resources/styles/main.scss";
//Components
import Navbar from "./views/shared/navbar";
import { Route, Switch, useHistory } from "react-router-dom";
import Sidebar from "./views/shared/navbar/Sidebar";
import Testimonies from "./views/testimonies/Testimonies";
import Calculator from "./views/calculator/Calculator";
import { useSelector } from "react-redux";
import { findObjItems, getRoutes } from "./services/helpers";
import AnimationTransition from "./views/shared/PageAnimation/AnimationTransition";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function App() {
  const globalComponents = useSelector((state) => state.globalComponents);
  const pageData = useSelector((state) => state.pageData);
  const history = useHistory();

  const items = findObjItems(globalComponents, "items");
  const routes = getRoutes(items);

  //Changes to first page link as default
  useEffect(() => {
    if (!globalComponents.loading) history.push(`${routes[0]}`);
  }, [globalComponents.loading]);

  return (
    <div className={`App ${pageData.overflow ? "overflow-hidden" : ""}`}>
      <AnimationTransition></AnimationTransition>
      <Sidebar></Sidebar>
      <main>
        <Navbar></Navbar>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={700} classNames='page'>
                <Switch location={location}>
                  <Route path={`/${routes[0]}`}>
                    <Testimonies></Testimonies>
                  </Route>
                  <Route path={`/${routes[1]}`}>
                    <Calculator></Calculator>
                  </Route>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </main>
    </div>
  );
}

export default App;
