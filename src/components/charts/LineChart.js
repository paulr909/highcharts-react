import React, { useRef } from "react";
import HighchartsReact from "highcharts-react-official";
import classes from "./LineChart.module.css";

const LineChart = ({ options, highcharts }) => {
  const chart = useRef(null);

  const handleExport = () => {
    if (chart && chart.current && chart.current.chart) {
      chart.current.chart.exportChart();
    }
  };

  return (
    <div className={classes.chartContainer}>
      <HighchartsReact
        highcharts={highcharts}
        constructorType={"chart"}
        options={options}
        ref={chart}
      />
      <button onClick={handleExport}>Export</button>
    </div>
  );
};

export default LineChart;
