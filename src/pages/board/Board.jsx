import { NavLink } from "react-router";
import avatar from "../../assets/avatar.webp";
import styles from "./Board.module.css";

export default function Board() {
  const taskList = [
    {
      tag: "Editorial",
      name: "Refine brand guidelines",
      due: "Oct 24",
      assignees: [{ name: "Jane D", avatar }],
      status: "todo",
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
    },
  ];

  return (
    <section className={styles.board}>
      <header className={styles.boardHeader}>
        <div className={styles.boardTitleGroup}>
          <h1 className={styles.boardTitle}>Board Tasks</h1>
          <p className={styles.boardSubtitle}>
            Organize your deep work sessions
          </p>
        </div>
        <button className={styles.boardAction}>Export Board</button>
      </header>

      <div className={styles.boardGrid}>
        <article className={styles.column}>
          <header className={styles.columnHeader}>
            <h2 className={styles.columnTitle}>To do</h2>
            <span className={styles.columnCount}>5</span>
            <button
              className={styles.columnAddButton}
              aria-label="Add task to To do"
            >
              <NavLink to="create-task">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  width={18}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </NavLink>
            </button>
          </header>

          <ul className={styles.cardList}>
            {taskList.filter((task) => task.status === "todo").map((task) => (
                <li>
                  <a href="#" className={styles.card}>
                    <p className={styles.cardTag}>{task.tag}</p>
                    <h3 className={styles.cardTitle}>{task.name}</h3>
                    <footer className={styles.cardMeta}>
                      <time dateTime="2026-10-24" className={styles.cardDue}>
                        {task.due}
                      </time>
                      <div className={styles.avatarStack}>
                        {task.assignees.map((assignee) => (
                          <img
                            key={assignee.name}
                            src={assignee.avatar}
                            alt={assignee.name}
                          />
                        ))}
                      </div>
                    </footer>
                  </a>
                </li>
              ))}
          </ul>
        </article>

        <article className={styles.column}>
          <header className={styles.columnHeader}>
            <h2 className={styles.columnTitle}>In Progress</h2>
            <span className={styles.columnCount}>2</span>
            <button
              className={styles.columnAddButton}
              aria-label="Add task to To do"
            >
              <NavLink to="create-task">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  width={18}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </NavLink>
            </button>
          </header>

          <ul className={styles.cardList}>
            {taskList
              .filter((task) => task.status === "inprogress")
              .map((task) => (
                <li>
                  <a href="#" className={styles.card}>
                    <p className={styles.cardTag}>{task.tag}</p>
                    <h3 className={styles.cardTitle}>{task.name}</h3>
                    <footer className={styles.cardMeta}>
                      <time dateTime="2026-10-24" className={styles.cardDue}>
                        {task.due}
                      </time>
                      <div className={styles.avatarStack}>
                        {task.assignees.map((assignee) => (
                          <img
                            key={assignee.name}
                            src={assignee.avatar}
                            alt={assignee.name}
                          />
                        ))}
                      </div>
                    </footer>
                  </a>
                </li>
              ))}
          </ul>
        </article>

        <article className={styles.column}>
          <header className={styles.columnHeader}>
            <h2 className={styles.columnTitle}>Completed</h2>
            <span className={styles.columnCount}>4</span>
            <button
              className={styles.columnAddButton}
              aria-label="Add task to To do"
            >
              <NavLink to="create-task">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  width={18}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </NavLink>
            </button>
          </header>

          <ul className={styles.cardList}>
            {taskList
              .filter((task) => task.status === "completed")
              .map((task) => (
                <li>
                  <a href="#" className={styles.card}>
                    <p className={styles.cardTag}>{task.tag}</p>
                    <h3 className={styles.cardTitle}>{task.name}</h3>
                    <footer className={styles.cardMeta}>
                      <time dateTime="2026-10-24" className={styles.cardDue}>
                        {task.due}
                      </time>
                      <div className={styles.avatarStack}>
                        {task.assignees.map((assignee) => (
                          <img
                            key={assignee.name}
                            src={assignee.avatar}
                            alt={assignee.name}
                          />
                        ))}
                      </div>
                    </footer>
                  </a>
                </li>
              ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
