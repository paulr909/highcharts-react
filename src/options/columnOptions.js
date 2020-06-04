import { columnSeriesData } from "../data/columnSeriesData";

export const columnOptions = {
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
  series: columnSeriesData
};
