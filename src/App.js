import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Contact from "./Contact/Contact";
import Main from "./Main/Main";
import Privacy from "./Privacy/Privacy";

const App = () => {
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
