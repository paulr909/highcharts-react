import { quarterColumnSeriesData } from "../data/quarterColumnSeriesData";

export const quarterLineOptions = {
  chart: {
    type: "line"
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
      "Week 41",
      "Week 42",
      "Week 43",
      "Week 44",
      "Week 45",
      "Week 46",
      "Week 47",
      "Week 48",
      "Week 49",
      "Week 50",
      "Week 51",
      "Week 52"
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
  series: quarterColumnSeriesData
};
