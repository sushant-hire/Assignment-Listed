import React from "react";
import styles from "./BoardGraph.module.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: "index",
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: "Line Chart",
    },
  },
  scales: {
    y: {
      type: "linear",
      display: true,
      position: "left",
    },
    y1: {
      type: "linear",
      display: true,
      position: "right",
      grid: {
        drawOnChartArea: false,
      },
    },
  },
  elements: {
    line: {
      tension: 0.4, // Adjust this value to control the curve smoothness
    },
  },
};

export const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Dataset 1",
      data: [15, 20, 10, 12, 18, 16, 22],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      yAxisID: "y",
    },
    {
      label: "Dataset 2",
      data: [18, 4, 10, 16, 8, 20, 18],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      yAxisID: "y1",
    },
  ],
};

function BoardGraph() {
  return (
    <div className={styles.BoardGraphMainContainer}>
      <h3>Activities</h3>
      <h4>
        May - June 2021{" "}
        <svg
          width="8"
          height="5"
          viewBox="0 0 8 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.218599 0.255719C0.5193 -0.0722496 0.937938 -0.097987 1.30554 0.255719L4.00082 3.0111L6.69609 0.255719C7.0637 -0.097987 7.48302 -0.0722496 7.78166 0.255719C8.08236 0.582952 8.06305 1.13594 7.78166 1.44332C7.50164 1.7507 4.5436 4.75389 4.5436 4.75389C4.47316 4.83173 4.38873 4.89364 4.29536 4.93592C4.20198 4.97821 4.10157 5 4.00013 5C3.89868 5 3.79827 4.97821 3.7049 4.93592C3.61152 4.89364 3.5271 4.83173 3.45666 4.75389C3.45666 4.75389 0.499989 1.7507 0.218599 1.44332C-0.0634812 1.13594 -0.0821026 0.582952 0.218599 0.255719Z"
            fill="#858585"
          />
        </svg>
      </h4>
      <div
        className={styles.BoardGraphContainer}
        style={{ height: "300px", width: "1010px" }}
      >
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default BoardGraph;
