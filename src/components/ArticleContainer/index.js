import React from "react";
import styles from "./index.module.css";

const ArticleItem = ({
  title,
  description,
  link,
}) => {
  return (
    <div className={styles["article-item-container"]}>
      <a className={styles["article-item"]} href={link}>
        <h2>{title}</h2>
        <p>{description}</p>
      </a>
    </div>
  );
};

export const Articles = ({ data }) => {
  console.log(data, "datsdsad");
  return (
    <div className={styles.articles}>
      {data.items.map((props, idx) => (
        <ArticleItem key={idx} {...props} />
      ))}
    </div>
  );
};
