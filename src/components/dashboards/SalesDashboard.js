import React, { useState } from "react";
import { Link } from "react-router-dom";
import Highcharts from "highcharts";
import ColumnChart from "../../components/charts/ColumnChart";
import { annualColumnOptions } from "../../options/annualColumnOptions";
import { quarterColumnOptions } from "../../options/quarterColumnOptions";
// import LineChart from "../charts/LineChart";
// import { lineOptions } from "../../options/lineOptions";
import chartIcon from "../../assets/chart-icon.svg";
import classes from "./SalesDashboard.module.css";

const SalesDashboard = () => {
  const [data, setData] = useState(annualColumnOptions);

  const handleClick = e => {
    const { value } = e.target;
    const isAnnual = value === "annual";
    const newData = isAnnual ? annualColumnOptions : quarterColumnOptions;

    setData(newData);
  };
  return (
    <div className={classes.container}>
      <header>
        <img src={chartIcon} alt="bar chart icon" />
        <h1>Sales Dashboard</h1>
        <Link to="/">Dashboard</Link>
        <Link to="/sales-dashboard">Sales Dashboard</Link>
        <Link to="/map-dashboard">Map Dashboard</Link>
      </header>
      <div className={classes.buttonContainer}>
        <button value="annual" onClick={handleClick}>
          Annual
        </button>
        <button value="lastquarter" onClick={handleClick}>
          Last Quarter
        </button>
      </div>
      <ColumnChart options={data} highcharts={Highcharts} />
      {/*<LineChart*/}
      {/*  options={lineOptions}*/}
      {/*  highcharts={Highcharts}*/}
    </div>
  );
};

export default SalesDashboard;
