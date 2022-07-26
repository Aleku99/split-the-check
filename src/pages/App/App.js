import React from "react";
import styles from "./App.module.css";
import AddPersonsTable from "../../components/AddPersonsTable/AddPersonTable";
import SplitTable from "../../components/SplitTable/SplitTable";
import usePersons from "../../hooks/usePersons";
function App() {
  const [persons, total, addPerson, removePerson, addSum, setSplit] =
    usePersons();

  return (
    <div className={styles.App}>
      <img className={styles.Image} src="./resources/logo.png" alt="Logo"></img>
      <h1 className={styles.AppTitle}>Welcome to Split-the-check app</h1>
      <div className={styles.AppTables}>
        <AddPersonsTable
          persons={persons}
          total={total}
          addPerson={addPerson}
          removePerson={removePerson}
          addSum={addSum}
          setSplit={setSplit}
        />
        <SplitTable
          persons={persons}
          total={total}
          addPerson={addPerson}
          removePerson={removePerson}
          addSum={addSum}
          setSplit={setSplit}
        />
      </div>
    </div>
  );
}

export default App;
