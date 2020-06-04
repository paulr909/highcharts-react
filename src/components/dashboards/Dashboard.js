import React from "react";
import { Link } from "react-router-dom";
import Highcharts from "highcharts";
import PieChart from "../charts/PieChart";
import { pieOptions } from "../../options/pieOptions";
import chartIcon from "../../assets/chart-icon.svg";
import classes from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={classes.container}>
      <header>
        <img src={chartIcon} alt="bar chart icon" />
        <h1>Dashboard</h1>
        <Link to="/">Dashboard</Link>
        <Link to="/sales-dashboard">Sales Dashboard</Link>
        <Link to="/map-dashboard">Map Dashboard</Link>
      </header>
      <PieChart options={pieOptions} highcharts={Highcharts} />
    </div>
  );
};

export default Dashboard;
