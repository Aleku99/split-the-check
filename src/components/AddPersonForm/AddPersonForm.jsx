import React, { useState } from "react";
import styles from "./AddPersonForm.module.css";
const INITIAL_STATE = {
  name: "",
  sum: 0,
  split: 0,
};
function AddPersonForm({ addPerson, addSum }) {
  const [person, setPerson] = useState(INITIAL_STATE);
  function handleClick() {
    if (person.name !== "" && person.sum !== 0) {
      addPerson(person);
      addSum(parseInt(person.sum));
    }
  }
  function handleChange(event) {
    if (event.target.name === "name") {
      setPerson((prevState) => {
        return { ...prevState, name: event.target.value };
      });
    } else {
      setPerson((prevState) => {
        return { ...prevState, sum: event.target.value };
      });
    }
  }
  return (
    <>
      <div className={styles.Form}>
        <input
          className={styles.Input}
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
        ></input>
        <input
          className={styles.Input}
          type="number"
          placeholder="Sum"
          name="sum"
          onChange={handleChange}
        ></input>
      </div>
      <button onClick={handleClick}>Add person</button>
    </>
  );
}

export default AddPersonForm;
