import React, { useState, useEffect } from "react";
import { TextField, IconButton, Grid } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { firestore } from "firebase/app";
import { db } from "../../api/firebase";
import Todo from "./Todo/Todo";
import styles from "./Todos.module.css";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            todo: doc.data().todo,
            done: doc.data().done,
          }))
        );
      });
  }, []);

  const addTodo = (event) => {
    event.preventDefault();
    db.collection("todos").add({
      todo: input,
      timestamp: firestore.FieldValue.serverTimestamp(),
      done: false,
    });
    setInput("");
  };

  return (
    <div className={styles.Container}>
      <form>
        <Grid container spacing={3} justify="center">
          <Grid item>
            <TextField
              label="New ToDo"
              variant="outlined"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
          </Grid>
          <Grid item>
            <IconButton
              disabled={!input}
              type="submit"
              variant="contained"
              onClick={addTodo}
            >
              <AddCircleOutlineIcon
                fontSize="large"
                style={input ? { color: "white" } : { color: "grey" }}
              ></AddCircleOutlineIcon>
            </IconButton>
          </Grid>
        </Grid>
      </form>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo.todo}
          id={todo.id}
          done={todo.done}
        ></Todo>
      ))}
    </div>
  );
};

export default Todos;
