import React from "react";
import Person from "../Person/Person";
import styles from "./AddPersonsTable.module.css";
import AddPersonForm from "../AddPersonForm/AddPersonForm";
function AddPersonsTable({
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
          <h2 className={styles.PersonsTableHeading}>Sum</h2>
        </div>
        {persons.map((person, index) => (
          <Person key={index} name={person.name} sum={person.sum} />
        ))}
        <>
          <h2>Total: {total}</h2>
          <AddPersonForm addPerson={addPerson} addSum={addSum} />
        </>
      </div>
    </>
  );
}

export default AddPersonsTable;
