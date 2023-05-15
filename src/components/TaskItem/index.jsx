import styles from "./task.module.scss";

export const TaskItem = ({ task }) => {
  return (
    <li className={styles.taskItem}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>

      <div className={styles.taskItem__actions}>
        <button className={styles.taskItem__button}>Edit</button>
        <button className={styles.taskItem__button}>Delete</button>
      </div>
    </li>
  );
};
