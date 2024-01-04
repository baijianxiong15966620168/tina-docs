import React from "react";
import styles from "./index.module.css";
import SearchBar from "../SearchBar";
export default function HelpCenterHeader({ title, subtitle }) {
  return (
    <div className={styles["help-center-header"]}>
      <h1 className={styles["header-title"]}>
        <span className={styles["header-title-text"]}>
          {title || "Portkey Help Center"}
        </span>
      </h1>
      <h4 className={styles["header-subtitle"]}>
        <span>{subtitle || "Hello, how can we help you?"}</span>
      </h4>
      <div className={styles["search-bar-container"]}>
        <SearchBar></SearchBar>
      </div>
    </div>
  );
}
