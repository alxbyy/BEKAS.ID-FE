import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import HomePage from "../pages/Home";
import ListPage from "../pages/List";
import DetailPage from "../pages/Detail";

export default function Routings() {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/list" exact>
        <ListPage />
      </Route>
      <Route path="/detail/:id">
        <DetailPage />
      </Route>
    </Switch>
  );
}
