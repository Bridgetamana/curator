import styles from "./Setting.module.css";

export default function Setting() {
  return (
    <section className={styles.setting}>
      <header className={styles.settingHeader}>
        <div className={styles.settingTitleGroup}>
          <h1 className={styles.settingTitle}>Settings</h1>
          <p className={styles.settingSubtitle}>
            Manage your workspace defaults
          </p>
        </div>
      </header>

      <form className={styles.settingForm}>
        <div className={styles.formGroup}>
          <label htmlFor="display-name" className={styles.label}>
            Display Name
          </label>
          <input
            id="display-name"
            name="displayName"
            type="text"
            className={styles.textInput}
            placeholder="Your name"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="role" className={styles.label}>
            Role
          </label>
          <input
            id="role"
            name="role"
            type="text"
            className={styles.textInput}
            placeholder="Your role"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="week-starts-on" className={styles.label}>
            Week Starts On
          </label>
          <select
            id="week-starts-on"
            name="weekStartsOn"
            className={styles.selectInput}
          >
            <option value="monday">Monday</option>
            <option value="sunday">Sunday</option>
          </select>
        </div>

        <div className={styles.saveSetting}>
          <button type="submit" className={styles.saveSettingButton}>
            Save Settings
          </button>
        </div>
      </form>
    </section>
  );
}
