import React from "react";
import styles from "./Board.module.css";
import BoardElements from "../../Molecules/Board Elements/BoardElements";

function Board() {
  return (
    <div className={styles.BoardContainer}>
      <h1>Board.</h1>
      <BoardElements />
      <div className={styles.BoardFooter}>
        <span>Help</span>
        <span>Contact Us</span>
      </div>
    </div>
  );
}

export default Board;
