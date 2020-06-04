import React from "react";
import { Link } from "react-router-dom";
import Highcharts from "highcharts";
import ColumnChart from "../../components/charts/ColumnChart";
import { columnOptions } from "../../options/columnOptions";
// import LineChart from "../charts/LineChart";
// import { lineOptions } from "../../options/lineOptions";
import chartIcon from "../../assets/chart-icon.svg";
import classes from "./SalesDashboard.module.css";

const SalesDashboard = () => {
  return (
    <div className={classes.container}>
      <header>
        <img src={chartIcon} alt="bar chart icon" />
        <h1>Sales Dashboard</h1>
        <Link to="/">Dashboard</Link>
        <Link to="/sales-dashboard">Sales Dashboard</Link>
        <Link to="/map-dashboard">Map Dashboard</Link>
      </header>
      <ColumnChart options={columnOptions} highcharts={Highcharts} />
      {/*<LineChart*/}
      {/*  options={lineOptions}*/}
      {/*  highcharts={Highcharts}*/}
    </div>
  );
};

export default SalesDashboard;
