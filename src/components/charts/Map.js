import React from "react";
import HighchartsReact from "highcharts-react-official";
import classes from "./Map.module.css";

const MapChart = ({ options, highcharts }) => {
  return (
    <div className={classes.chartContainer}>
      <HighchartsReact
        highcharts={highcharts}
        constructorType={"mapChart"}
        options={options}
      />
    </div>
  );
};

export default MapChart;
