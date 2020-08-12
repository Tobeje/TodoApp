import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  ListItemSecondaryAction,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";
import { db } from "../../../api/firebase";
import styles from "./Todo.module.css";

function Todo({ todo, id, done }) {
  const updateTodo = () => {
    db.collection("todos").doc(id).set({ done: true }, { merge: true });
  };

  return (
    <List className={styles.todo__list}>
      <ListItem
        style={
          done
            ? {
                background: "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)",
                borderRadius: "20px",
              }
            : null
        }
      >
        <ListItemText primary={todo} secondary="Needs to be done soon ⏰" />{" "}
        <ListItemSecondaryAction>
          <IconButton
            variant="contained"
            style={{
              background:
                "linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)",
            }}
            onClick={(event) => db.collection("todos").doc(id).delete()}
          >
            <DeleteIcon
              fontSize="large"
              style={{ color: "white" }}
            ></DeleteIcon>
          </IconButton>
          <IconButton
            variant="contained"
            style={{
              background: "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)",
            }}
            onClick={updateTodo}
          >
            <DoneIcon fontSize="large" style={{ color: "white" }}></DoneIcon>
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}

export default Todo;
