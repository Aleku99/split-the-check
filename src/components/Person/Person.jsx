import React from "react";
import styles from "./Person.module.css";
function Person({ name, sum }) {
  return (
    <div className={styles.Person}>
      <h2 className={styles.Entry}>{name}</h2>
      <h2 className={styles.Entry}>{sum}</h2>
    </div>
  );
}
export default Person;
