import React from "react";
import { Link } from "react-router-dom";
import Highcharts from "highcharts";
import Map from "../../components/charts/Map";
import { mapOptions } from "../../options/mapOptions";
import chartIcon from "../../assets/chart-icon.svg";
import classes from "./Dashboard.module.css";

const MapDashboard = () => {
  return (
    <div className={classes.container}>
      <header>
        <img src={chartIcon} alt="bar chart icon" />
        <h1>Map Dashboard</h1>
        <Link to="/">Dashboard</Link>
        <Link to="/sales-dashboard">Sales Dashboard</Link>
        <Link to="/map-dashboard">Map Dashboard</Link>
      </header>
      <Map options={mapOptions} highcharts={Highcharts} />
    </div>
  );
};

export default MapDashboard;
