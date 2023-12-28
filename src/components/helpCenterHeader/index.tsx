import React from "react";
import styles from "./index.module.css";
import SearchBar from "../SearchBar";
export default function HelpCenterHeader() {
  return (
    <div className={styles["help-center-header"]}>
      <h1 className={styles["header-title"]}>
        <span className={styles["header-title-text"]}>Portkey Help Center</span>
      </h1>
      <h4 className={styles["header-subtitle"]}>
        <span>Hello, how can we help you?</span>
      </h4>
      <div className={styles['search-bar-container']}>
        <SearchBar></SearchBar>
      </div>
    </div>
  );
}
