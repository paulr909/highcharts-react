import { pieSeriesData } from "../data/pieSeriesData";

export const pieOptions = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: "pie"
  },
  title: {
    text: "Predicted GDP £ (billion) in 2050"
  },
  credits: {
    enabled: false
  },
  tooltip: {
    pointFormat: "{series.name}: <b>£{point.y:.1f}</b>"
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: {
        enabled: false
      },
      showInLegend: true
    }
  },
  series: pieSeriesData
};
