import React from "react";
import styles from "./Dashboard.module.css";
import Board from "../../Components/Board/Board";
import BoardBar from "../../Molecules/Board Bar/BoardBar";
import BoardCards from "../../Molecules/Board Cards/BoardCards";
import BoardGraph from "../../Components/Board Graph/BoardGraph";
import BoardFooterCards from "../../Components/Board Footer Cards/BoardFooterCards";

function Dashboard() {
  return (
    <div className={styles.DashboardContainer}>
      <Board />
      <div>
        {" "}
        <BoardBar />
        <BoardCards />
        <BoardGraph />
        <BoardFooterCards />
      </div>
    </div>
  );
}

export default Dashboard;
