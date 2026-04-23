import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section>
      <header className={styles.projectHeader}>
        <div className={styles.projectTitleGroup}>
          <h1 className={styles.projectTitle}>Project Tasks</h1>
          <p className={styles.projectSubtitle}>
            Organize your deep work sessions
          </p>
        </div>
      </header>
    </section>
  );
}
