import styles from "./Setting.module.css"

export default function Setting() {
  return (
    <section>
      <header className={styles.settingHeader}>
        <div className={styles.settingTitleGroup}>
          <h1 className={styles.settingTitle}>Setting </h1>
          <p className={styles.settingSubtitle}>
            Organize your deep work sessions
          </p>
        </div>
      </header>
    </section>
  );
}
