import React, { ReactElement } from "react";
import styles from "./styles.module.scss";

function Index(): ReactElement {
  return (
    <div className={styles['loader']}>
      <img src='images/snapp-food.png' alt="snapp food" />
    </div>
  );
}

export default Index;
