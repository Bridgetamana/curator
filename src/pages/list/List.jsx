import { useState } from "react";
import avatar from "../../assets/avatar.webp";
import TaskDetail from "../../components/task-detail/TaskDetail";
import styles from "./List.module.css";

export default function List() {
  const [isTaskDetailVisible, setIsTaskDetailVisible] = useState(false);

  const openTaskDetail = () => {
    setIsTaskDetailVisible(true);
  };

  const closeTaskDetail = () => {
    setIsTaskDetailVisible(false);
  };

  return (
    <section className={styles.list}>
      <header className={styles.listHeader}>
        <div className={styles.listTitleGroup}>
          <h1 className={styles.listTitle}>List Tasks</h1>
          <p className={styles.listSubtitle}>
            Organize your deep work sessions
          </p>
        </div>
        <button className={styles.listAction}>Export List</button>
      </header>

      <table className={styles.listView}>
        <thead>
          <tr>
            <th scope="col">
              <input type="checkbox" aria-label="Select all tasks" />
            </th>
            <th scope="col">Task</th>
            <th scope="col">Project</th>
            <th scope="col">Due date</th>
            <th scope="col">Priority</th>
            <th scope="col">Assignee</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="checkbox"
                aria-label="Select task Architectural Blueprint Refinement"
              />
            </td>
            <td>
              <button className={styles.taskLink} onClick={openTaskDetail}>
                Architectural Blueprint Refinement
              </button>
            </td>
            <td>Project Hailmary</td>
            <td>
              <time dateTime="2023-10-24">Oct 24, 2023</time>
            </td>
            <td>
              <span className={styles.priorityUrgent}>Urgent</span>
            </td>
            <td className={styles.assigneeCell}>
              <div className={styles.assigneeImage}>
                <img src={avatar} alt="" />
              </div>
              John Y.
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="checkbox"
                aria-label="Select task Architectural Blueprint Refinement"
              />
            </td>
            <td>
              <button className={styles.taskLink} onClick={openTaskDetail}>
                Architectural Blueprint Refinement
              </button>
            </td>
            <td>Project Hailmary</td>
            <td>
              <time dateTime="2023-10-24">Oct 24, 2023</time>
            </td>
            <td>
              <span className={styles.priorityUrgent}>Urgent</span>
            </td>
            <td className={styles.assigneeCell}>
              <div className={styles.assigneeImage}>
                <img src={avatar} alt="" />
              </div>
              John Y.
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="checkbox"
                aria-label="Select task Architectural Blueprint Refinement"
              />
            </td>
            <td>
              <button className={styles.taskLink} onClick={openTaskDetail}>
                Architectural Blueprint Refinement
              </button>
            </td>
            <td>Project Hailmary</td>
            <td>
              <time dateTime="2023-10-24">Oct 24, 2023</time>
            </td>
            <td>
              <span className={styles.priorityUrgent}>Urgent</span>
            </td>
            <td className={styles.assigneeCell}>
              <div className={styles.assigneeImage}>
                <img src={avatar} alt="" />
              </div>
              John Y.
            </td>
          </tr>
        </tbody>
      </table>
      {isTaskDetailVisible && <TaskDetail onClose={closeTaskDetail} />}
    </section>
  );
}
