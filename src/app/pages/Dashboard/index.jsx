import React from "react";
import PageHeader from "@/components/common/PageHeader";
import ReactChart from "@/components/ui/ReactChart";
import { Card, Col, Container, Row } from "react-bootstrap";

const options = {
  chart: {
    type: "pie",
  },
  title: {
    text: "pie chart",
    align: "left",
  },
  accessibility: {
    announceNewData: {
      enabled: true,
    },
    point: {
      valueSuffix: "%",
    },
  },
  plotOptions: {
    series: {
      borderRadius: 5,
      dataLabels: [
        {
          enabled: true,
          distance: 15,
          format: "{point.name}",
        },
        {
          enabled: true,
          distance: "-30%",
          filter: {
            property: "percentage",
            operator: ">",
            value: 5,
          },
          format: "{point.y:.1f}%",
          style: {
            fontSize: "0.9em",
            textOutline: "none",
          },
        },
      ],
    },
  },
  tooltip: {
    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    pointFormat:
      '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>',
  },
  series: [
    {
      name: "Browsers",
      colorByPoint: true,
      data: [
        {
          name: "Docs Extracted",
          y: 9.47,
          drilldown: "Docs Extracted",
          color: "#2caffe",
        },

        {
          name: "Docs Failed",
          y: 9.32,
          drilldown: "Docs Failed",
          color: "#1f92b2",
        },
        {
          name: "A/cs linked",
          y: 8.15,
          drilldown: "A/cs linked",
          color: "#caf4ff",
        },
        {
          name: "RLHF suggestions for linking",
          y: 11.02,
          drilldown: "RLHF suggestions for linking",
          color: "#96e8ff",
        },
        {
          name: "Docs Ingested",
          y: 11.02,
          drilldown: "Docs Ingested",
          color: "#9abde0",
        },
        {
          name: "Feedback from Break Resolution",
          y: 11.02,
          drilldown: "Feedback from Break Resolution",
          color: "#cce4ff",
        },
        {
          name: "Retraining on feedbacks",
          y: 9.47,
          drilldown: "Retraining on feedbacks",
          color: "#2c698d",
        },
      ],
    },
  ],
  drilldown: {
    series: [
      {
        name: "Chrome",
        id: "Chrome",
        data: [
          ["v97.0", 36.89],
          ["v96.0", 18.16],
          ["v95.0", 0.54],
          ["v94.0", 0.7],
          ["v93.0", 0.8],
          ["v92.0", 0.41],
          ["v91.0", 0.31],
          ["v90.0", 0.13],
          ["v89.0", 0.14],
          ["v88.0", 0.1],
          ["v87.0", 0.35],
          ["v86.0", 0.17],
          ["v85.0", 0.18],
          ["v84.0", 0.17],
          ["v83.0", 0.21],
          ["v81.0", 0.1],
          ["v80.0", 0.16],
          ["v79.0", 0.43],
          ["v78.0", 0.11],
          ["v76.0", 0.16],
          ["v75.0", 0.15],
          ["v72.0", 0.14],
          ["v70.0", 0.11],
          ["v69.0", 0.13],
          ["v56.0", 0.12],
          ["v49.0", 0.17],
        ],
      },
      {
        name: "Safari",
        id: "Safari",
        data: [
          ["v15.3", 0.1],
          ["v15.2", 2.01],
          ["v15.1", 2.29],
          ["v15.0", 0.49],
          ["v14.1", 2.48],
          ["v14.0", 0.64],
          ["v13.1", 1.17],
          ["v13.0", 0.13],
          ["v12.1", 0.16],
        ],
      },
      {
        name: "Edge",
        id: "Edge",
        data: [
          ["v97", 6.62],
          ["v96", 2.55],
          ["v95", 0.15],
        ],
      },
      {
        name: "Firefox",
        id: "Firefox",
        data: [
          ["v96.0", 4.17],
          ["v95.0", 3.33],
          ["v94.0", 0.11],
          ["v91.0", 0.23],
          ["v78.0", 0.16],
          ["v52.0", 0.15],
        ],
      },
    ],
  },
};

const barChartOptions = {
  chart: {
    type: "bar",
  },
  title: {
    text: "bar chart",
  },
  xAxis: {
    categories: [
      "Documents Read",
      "Documents Pushed to DB",
      "Documents Ingested",
      "Documents Ignored",
    ],
  },
  yAxis: {
    title: {
      text: "Count",
    },
  },
  series: [
    {
      name: "Count",
      data: [100, 80, 60, 40],
    },
  ],
};

const verticalBarChartOption = {
  title: {
    text: "vertical bar chart",
  },
  chart: {
    type: "column",
  },
  xAxis: {
    categories: [
      "Statement",
      "CapCall",
      "Distributed",
      "message",
      "unknown",
      "Statement",
      "CapCall",
      "Distributed",
      "message",
      "unknown",
    ],
  },
  series: [
    {
      data: [50, 40, 30, 20, 10, 9, 8, 7, 6, 5],
    },
  ],
};

const velocityOptions = {
  chart: {
    zoomType: "x",
  },
  title: {
    text: "Velocity Chart",
  },
  xAxis: {
    type: "datetime",
    title: {
      text: "Time",
    },
  },
  yAxis: {
    title: {
      text: "Count",
    },
  },
  series: [
    {
      name: "Documents Read",
      data: [
        [new Date("2024-01-01").getTime(), 100, 1, 10],
        [new Date("2024-02-01").getTime(), 200, 10, 50],
        [new Date("2024-03-01").getTime(), 150, 60, 30],
        [new Date("2024-04-01").getTime(), 250, 80, 70],
        [new Date("2024-05-01").getTime(), 180, 70, 20],
      ],
    },
    {
      name: "Documents Ingested",
      data: [
        [new Date("2024-01-01").getTime(), 80, 80, 20],
        [new Date("2024-02-01").getTime(), 150, 150, 50],
        [new Date("2024-03-01").getTime(), 120, 120, 30],
        [new Date("2024-04-01").getTime(), 200, 200, 50],
        [new Date("2024-05-01").getTime(), 160, 160, 20],
      ],
    },
    {
      name: "Documents Ignored",
      data: [
        [new Date("2024-01-01").getTime(), 20, 80, 20],
        [new Date("2024-02-01").getTime(), 50, 150, 50],
        [new Date("2024-03-01").getTime(), 30, 50, 30],
        [new Date("2024-04-01").getTime(), 50, 200, 50],
        [new Date("2024-05-01").getTime(), 20, 160, 20],
      ],
    },
  ],
};

export default function DashboardPage() {
  return (
    <div className="dashboard-page-content">
   
    </div>
  );
}
