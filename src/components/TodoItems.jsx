import React from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

export default function TodoItems({ todoItems, onDeleteClick }) {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
}
