import React from "react";
import Person from "../Person/Person";
import styles from "./SplitTable.module.css";
function SplitTable({
  persons,
  total,
  addPerson,
  removePerson,
  addSum,
  setSplit,
}) {
  return (
    <>
      <div className={styles.PersonsTable}>
        <div className={styles.HeadingDiv}>
          <h2 className={styles.PersonsTableHeading}>Name</h2>
          <h2 className={styles.PersonsTableHeading}>Split</h2>
        </div>
        {persons.map((person, index) => (
          <Person key={index} name={person.name} sum={String(person.split)} />
        ))}
      </div>
    </>
  );
}

export default SplitTable;
