import React from "react";
import { Typography } from "@material-ui/core";
import { Todos } from "./Components";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <Typography variant="h4" component="h1">
        <span role="img" aria-label="rocket">
          🚀
        </span>
        Todo App made by Marcel inspired by Clever Progammer
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </Typography>
      <Todos></Todos>
    </div>
  );
}

export default App;
