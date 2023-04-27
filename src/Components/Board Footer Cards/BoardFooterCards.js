import React from "react";
import styles from "./BoardFooterCards.module.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Green", "Red", "Yellow"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3],
      backgroundColor: ["#98D89E", "#EE8484", "#F7DC7D"],
    },
  ],
};

function BoardFooterCards() {
  let arr3 = [
    {
      txt: "at Sunset Road, Kuta, Bali ",
      title: "Meeting with suppliers from Kuta Bali",
      cost: "14.00-15.00",
      border: "LightGreen",
    },
    {
      txt: "at Central Jakarta ",
      title: "Check operation at Giga Factory 1",
      cost: "18.00-20.00",
      border: "#6972C3",
    },
  ];

  return (
    <div className={styles.BoardFooterCards}>
      <div className={styles.CardOne}>
        <div className={styles.CardOneHeadings}>
          <h1>Top products </h1>
          <h2>
            May - June 2021{" "}
            <svg
              width="5"
              height="8"
              viewBox="0 0 5 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.255719 7.7814C-0.0722496 7.4807 -0.097987 7.06206 0.255719 6.69446L3.0111 3.99918L0.255719 1.3039C-0.0979873 0.936305 -0.0722499 0.516977 0.255719 0.218345C0.582952 -0.0823565 1.13594 -0.0630456 1.44332 0.218345C1.7507 0.498356 4.75389 3.4564 4.75389 3.4564C4.83173 3.52684 4.89364 3.61127 4.93592 3.70464C4.97821 3.79802 5 3.89843 5 3.99987C5 4.10132 4.97821 4.20173 4.93592 4.2951C4.89364 4.38848 4.83173 4.4729 4.75389 4.54334C4.75389 4.54334 1.7507 7.50001 1.44332 7.7814C1.13594 8.06348 0.582952 8.0821 0.255719 7.7814Z"
                fill="#858585"
              />
            </svg>
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5rem",
            height: "178px",
            width: "178px",
          }}
        >
          <Pie data={data} />
          <div className={styles.PieData}>
            <h1>
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="5.5" cy="5.5" r="5.5" fill="#98D89E" />
              </svg>
              Basic Tees
            </h1>
            <h1>
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="5.5" cy="5.5" r="5.5" fill="#F6DC7D" />
              </svg>
              Custom Short Pants
            </h1>
            <h1>
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="5.5" cy="5.5" r="5.5" fill="#EE8484" />
              </svg>
              Super Hoodies
            </h1>
          </div>
        </div>
      </div>
      <div className={styles.CardTwo}>
        <div className={styles.CardTwoHeadings}>
          <h1>Today's schedule </h1>
          <h2>
            See all{" "}
            <svg
              width="5"
              height="8"
              viewBox="0 0 5 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.255719 7.7814C-0.0722496 7.4807 -0.097987 7.06206 0.255719 6.69446L3.0111 3.99918L0.255719 1.3039C-0.0979873 0.936305 -0.0722499 0.516977 0.255719 0.218345C0.582952 -0.0823565 1.13594 -0.0630456 1.44332 0.218345C1.7507 0.498356 4.75389 3.4564 4.75389 3.4564C4.83173 3.52684 4.89364 3.61127 4.93592 3.70464C4.97821 3.79802 5 3.89843 5 3.99987C5 4.10132 4.97821 4.20173 4.93592 4.2951C4.89364 4.38848 4.83173 4.4729 4.75389 4.54334C4.75389 4.54334 1.7507 7.50001 1.44332 7.7814C1.13594 8.06348 0.582952 8.0821 0.255719 7.7814Z"
                fill="#858585"
              />
            </svg>
          </h2>
        </div>
        {arr3.map((item, index) => (
          <div
            className={styles.MappedBoardFooterCards}
            key={index}
            style={{
              borderLeft: `5px solid ${item.border}`,
              paddingLeft: "1rem",
            }}
          >
            <h3>{item.title}</h3>
            <p>{item.cost}</p>
            <span>{item.txt}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BoardFooterCards;
