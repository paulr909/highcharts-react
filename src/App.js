import React from "react";
import Highcharts from "highcharts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboards/Dashboard";
import SalesDashboard from "./components/dashboards/SalesDashboard";
import MapDashboard from "./components/dashboards/MapDashboard";

require("highcharts/modules/exporting")(Highcharts);
require("highcharts/modules/map")(Highcharts);

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/sales-dashboard" element={<SalesDashboard />} />
          <Route path="/map-dashboard" element={<MapDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
