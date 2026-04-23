import styles from "./Board.module.css";
import avatar from "../../assets/avatar.webp";
import { NavLink } from "react-router-dom";

export default function Board() {
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
            <li>
              <a href="#" className={styles.card}>
                <p className={styles.cardTag}>Editorial</p>
                <h3 className={styles.cardTitle}>Refine brand guidelines</h3>
                <footer className={styles.cardMeta}>
                  <time dateTime="2026-10-24" className={styles.cardDue}>
                    Oct 24
                  </time>
                  <img
                    src={avatar}
                    alt="Mary L."
                    className={styles.assigneeImage}
                  />
                </footer>
              </a>
            </li>
            <li>
              <article className={styles.card}>
                <p className={styles.cardTag}>Editorial</p>
                <h3 className={styles.cardTitle}>Refine brand guidelines</h3>
                <footer className={styles.cardMeta}>
                  <time dateTime="2026-10-24" className={styles.cardDue}>
                    Oct 24
                  </time>
                  <img
                    src={avatar}
                    alt="Mary L."
                    className={styles.assigneeImage}
                  />
                </footer>
              </article>
            </li>
            <li>
              <article className={styles.card}>
                <p className={styles.cardTag}>Editorial</p>
                <h3 className={styles.cardTitle}>Refine brand guidelines</h3>
                <footer className={styles.cardMeta}>
                  <time dateTime="2026-10-24" className={styles.cardDue}>
                    Oct 24
                  </time>
                  <img
                    src={avatar}
                    alt="Mary L."
                    className={styles.assigneeImage}
                  />
                </footer>
              </article>
            </li>
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
            <li>
              <article className={styles.card}>
                <p className={styles.cardTag}>Editorial</p>
                <h3 className={styles.cardTitle}>Refine brand guidelines</h3>
                <footer className={styles.cardMeta}>
                  <time dateTime="2026-10-24" className={styles.cardDue}>
                    Oct 24
                  </time>
                  <img
                    src={avatar}
                    alt="Mary L."
                    className={styles.assigneeImage}
                  />
                </footer>
              </article>
            </li>
            <li>
              <article className={styles.card}>
                <p className={styles.cardTag}>Editorial</p>
                <h3 className={styles.cardTitle}>Refine brand guidelines</h3>
                <footer className={styles.cardMeta}>
                  <time dateTime="2026-10-24" className={styles.cardDue}>
                    Oct 24
                  </time>
                  <img
                    src={avatar}
                    alt="Mary L."
                    className={styles.assigneeImage}
                  />
                </footer>
              </article>
            </li>
            <li>
              <article className={styles.card}>
                <p className={styles.cardTag}>Editorial</p>
                <h3 className={styles.cardTitle}>Refine brand guidelines</h3>
                <footer className={styles.cardMeta}>
                  <time dateTime="2026-10-24" className={styles.cardDue}>
                    Oct 24
                  </time>
                  <img
                    src={avatar}
                    alt="Mary L."
                    className={styles.assigneeImage}
                  />
                </footer>
              </article>
            </li>
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
            <li>
              <article className={styles.card}>
                <p className={styles.cardTag}>Editorial</p>
                <h3 className={styles.cardTitle}>Refine brand guidelines</h3>
                <footer className={styles.cardMeta}>
                  <time dateTime="2026-10-24" className={styles.cardDue}>
                    Oct 24
                  </time>
                  <img
                    src={avatar}
                    alt="Mary L."
                    className={styles.assigneeImage}
                  />
                </footer>
              </article>
            </li>
            <li>
              <article className={styles.card}>
                <p className={styles.cardTag}>Editorial</p>
                <h3 className={styles.cardTitle}>Refine brand guidelines</h3>
                <footer className={styles.cardMeta}>
                  <time dateTime="2026-10-24" className={styles.cardDue}>
                    Oct 24
                  </time>
                  <img
                    src={avatar}
                    alt="Mary L."
                    className={styles.assigneeImage}
                  />
                </footer>
              </article>
            </li>
            <li>
              <article className={styles.card}>
                <p className={styles.cardTag}>Editorial</p>
                <h3 className={styles.cardTitle}>Refine brand guidelines</h3>
                <footer className={styles.cardMeta}>
                  <time dateTime="2026-10-24" className={styles.cardDue}>
                    Oct 24
                  </time>
                  <img
                    src={avatar}
                    alt="Mary L."
                    className={styles.assigneeImage}
                  />
                </footer>
              </article>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
