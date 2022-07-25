import React from "react";
import styles from "./App.module.css";
import AddPersonsTable from "../../components/AddPersonsTable/AddPersonTable";
import SplitTable from "../../components/SplitTable/SplitTable";
function App() {
  return (
    <div className={styles.App}>
      <h1 className={styles.AppTitle}>Welcome to Split-the-check app</h1>
      <div className={styles.AppTables}>
        <AddPersonsTable />
        <SplitTable />
      </div>
    </div>
  );
}

export default App;
