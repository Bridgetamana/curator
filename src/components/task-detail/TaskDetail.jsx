import styles from "./TaskDetail.module.css";

export default function TaskDetail({ onClose }) {
  return (
    <section className={styles.taskDetail}>
      <div className={styles.taskDetailActions}>
        <div className={styles.taskDetailActionLeft}>
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
        <h2 className={styles.taskDetailTitle}>Define Brand Campaign</h2>
        <div className={styles.taskDetailMeta}>
          <div className={styles.assignee}>
            <p className={styles.metaTitle}>Assignee</p>
            <div>
              <img src="" alt="" />
              Mary L.
            </div>
          </div>
          <div className={styles.dueDate}>
            <p className={styles.metaTitle}>Due Date</p>
            <p>Oct 24. 2023</p>
          </div>
          <div className={styles.tag}>
            <p className={styles.metaTitle}>Tag</p>
            <span>Personal</span>
          </div>
        </div>
      </div>
      <div className={styles.taskDetailInfo}>
        <p className={styles.metaTitle}>Description</p>
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
