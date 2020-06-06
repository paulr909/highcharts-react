import React, { useState } from "react";
import { Link } from "react-router-dom";
import Highcharts from "highcharts";
import Chart from "../../components/charts/Chart";
import { annualColumnOptions } from "../../options/annualColumnOptions";
import { quarterColumnOptions } from "../../options/quarterColumnOptions";
import chartIcon from "../../assets/chart-icon.svg";
import classes from "./SalesDashboard.module.css";

const SalesDashboard = () => {
  const [options, setOptions] = useState({
    chart: {
      type: "column"
    },
    title: {
      text: ""
    },
    subtitle: {
      text: ""
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: ""
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>£{point.y:.2f}</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [
      {
        name: "Sales",
        data: [
          3910,
          3706,
          2850,
          4005,
          3750,
          2912,
          3200,
          3645,
          4205,
          3211,
          3354,
          3904
        ]
      },
      {
        name: "National Average",
        data: [
          4010,
          3600,
          2900,
          3550,
          3800,
          2900,
          3000,
          3500,
          4000,
          3700,
          3550,
          3800
        ]
      }
    ]
  });

  const handleClick = e => {
    const { value } = e.target;
    const isAnnual = value === "annual";
    const newOptions = isAnnual ? annualColumnOptions : quarterColumnOptions;

    setOptions(newOptions);
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
      <Chart options={options} highcharts={Highcharts} />
    </div>
  );
};

export default SalesDashboard;
