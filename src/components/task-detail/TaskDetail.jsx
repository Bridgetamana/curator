import styles from "./TaskDetail.module.css";

export default function TaskDetail({ onClose }) {
  return (
    <section className={styles.taskDetail}>
      <div className={styles.taskDetailActions}>
        <div>
          <span className={styles.status}>In progress</span>
          <span className={styles.priority}>
            Priority:
            <p>High</p>
          </span>
        </div>
        <div>
          <button className={styles.closeTaskDetail} onClick={onClose}>
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
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className={styles.taskDetailHeader}>
        <h2>Define Brand Campaign</h2>
        <div>
          <div>
            <p>Assignee</p>
            <div>
              <img src="" alt="" />
              Mary L.
            </div>
          </div>
          <div>
            <p>Due Date</p>
            <p>Oct 24. 2023</p>
          </div>
          <div>
            <p>Tag</p>
            <span>Personal</span>
          </div>
        </div>
      </div>
      <div className={styles.taskDetailInfo}>
        <p>Description</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          tenetur minus atque autem ad nihil omnis quaerat voluptates aut
          tempora odit adipisci labore, ipsum voluptatibus vero ullam numquam
          accusamus blanditiis.
        </p>
      </div>
    </section>
  );
}
