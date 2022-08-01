import React from "react";
import { svgs } from "assets/svgs/index";
import styles from "./styles.module.scss";

function Index(): React.ReactElement {
  return <div className={styles['load-more']}>{svgs.loader}</div>;
}

export default Index;
