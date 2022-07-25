import React from "react";
import usePersons from "../../hooks/usePersons";
import Person from "../Person/Person";
import styles from "./SplitTable.module.css";
function SplitTable() {
  const [persons, total, addPerson, removePerson, addSum, setSplit] =
    usePersons();
  if (persons.length > 0) {
    setSplit();
  }
  return (
    <>
      <div className={styles.PersonsTable}>
        <div className={styles.HeadingDiv}>
          <h2 className={styles.PersonsTableHeading}>Name</h2>
          <h2 className={styles.PersonsTableHeading}>Sum</h2>
        </div>
        {persons.map((person, index) => (
          <Person key={index} name={person.name} sum={person.split} />
        ))}
      </div>
    </>
  );
}

export default SplitTable;
