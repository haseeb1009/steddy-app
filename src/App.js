import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Contact from "./Contact/Contact";
import Main from "./Main/Main";
import Privacy from "./Privacy/Privacy";

const App = () => {
  document.addEventListener("gesturestart", function (e) {
    e.preventDefault();
    // special hack to prevent zoom-to-tabs gesture in safari
    document.body.style.zoom = 0.99;
  });

  document.addEventListener("gesturechange", function (e) {
    e.preventDefault();
    // special hack to prevent zoom-to-tabs gesture in safari
    document.body.style.zoom = 0.99;
  });

  document.addEventListener("gestureend", function (e) {
    e.preventDefault();
    // special hack to prevent zoom-to-tabs gesture in safari
    document.body.style.zoom = 0.99;
  });
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/privacy" exact component={Privacy} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </Router>
  );
};

export default App;
