import React from "react";
import Highcharts from "highcharts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboards/Dashboard";
import SalesDashboard from "./components/dashboards/SalesDashboard";
import MapDashboard from "./components/dashboards/MapDashboard";

require("highcharts/modules/exporting")(Highcharts);
require("highcharts/modules/map")(Highcharts);

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/sales-dashboard">
            <SalesDashboard />
          </Route>
          <Route path="/map-dashboard">
            <MapDashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
