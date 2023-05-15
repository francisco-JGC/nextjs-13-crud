"use client";
import { useSelector } from "react-redux";
import { TaskItem } from "../components/TaskItem";
import styles from "./page.module.scss";

export default function Home() {
  const tasks = useSelector((state) => state.tasks.tasks);

  return (
    <main className={styles.main}>
      <h1>Tasks</h1>

      <ul className={styles.taskList}>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </main>
  );
}
