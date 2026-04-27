import { useState } from "react";
import avatar from "../../assets/avatar.webp";
import TaskDetail from "../../components/task-detail/TaskDetail";
import styles from "./List.module.css";

export default function List() {
  const taskList = [
    {
      tag: "Editorial",
      name: "Refine brand guidelines",
      due: "Oct 24",
      assignees: [{ name: "Jane D", avatar }],
      status: "todo",
      priority: "High",
    },
    {
      tag: "Editorial",
      name: "Refine brand guidelines",
      due: "Oct 24",
      assignees: [
        { name: "Jane D", avatar },
        { name: "Jane D", avatar },
      ],
      status: "todo",
      priority: "High",
    },
    {
      tag: "Editorial",
      name: "Refine brand guidelines",
      due: "Oct 24",
      assignees: [
        { name: "Jane D", avatar },
        { name: "Jane D", avatar },
        { name: "Jane D", avatar },
      ],
      status: "inprogress",
      priority: "medium",
    },
    {
      tag: "Editorial",
      name: "Refine brand guidelines",
      due: "Oct 24",
      assignees: [
        { name: "Jane D", avatar },
        { name: "Jane D", avatar },
        { name: "Jane D", avatar },
      ],
      status: "completed",
      priority: "Low",
    },
  ];

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

      {taskList.length > 0 ? (
        <table className={styles.listView}>
          <thead>
            <tr>
              <th scope="col">
                <input type="checkbox" aria-label="Select all tasks" />
              </th>
              <th scope="col">Task</th>
              <th scope="col">Status</th>
              <th scope="col">Due date</th>
              <th scope="col">Priority</th>
              <th scope="col">Assignee</th>
            </tr>
          </thead>
          <tbody>
            {taskList.map((task) => (
              <tr>
                <td>
                  <input type="checkbox" aria-label={task.name} />
                </td>
                <td>
                  <button className={styles.taskLink} onClick={openTaskDetail}>
                    {task.name}
                  </button>
                </td>
                <td>{task.status}</td>
                <td>
                  <time dateTime="2023-10-24">{task.due}</time>
                </td>
                <td>
                  <span className={styles.priorityUrgent}>{task.priority}</span>
                </td>
                <td className={styles.assigneeCell}>
                  <div className={styles.avatarStack}>
                    {task.assignees.map((assignee) => (
                      <img
                        key={assignee.name}
                        src={assignee.avatar}
                        alt={assignee.name}
                      />
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className={styles.emptyState}>
          No task yet. Add tasks to see your task list
        </p>
      )}

      {isTaskDetailVisible && <TaskDetail onClose={closeTaskDetail} />}
    </section>
  );
}
