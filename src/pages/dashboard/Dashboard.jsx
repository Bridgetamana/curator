import { Bar, BarChart } from "recharts";
import avatar from "../../assets/avatar.webp";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  const momentumData = [
    { day: "Mon", focusHours: 4.2 },
    { day: "Tue", focusHours: 5.8 },
    { day: "Wed", focusHours: 3.6 },
    { day: "Thu", focusHours: 8.1 },
    { day: "Fri", focusHours: 5.4 },
    { day: "Sat", focusHours: 4.1 },
    { day: "Sun", focusHours: 1.3 },
  ];

  return (
    <section className={styles.dashboard}>
      <header className={styles.greetingSection}>
        <h1 className={styles.greetingTitle}>Good Morning, Director</h1>
        <p className={styles.greetingText}>
          Your deep work block begins in 14 minutes. Focus on the Atelier
          Rebrand project today.
        </p>
      </header>

      <section className={styles.reportGrid} aria-label="Performance reports">
        <article className={styles.momentumCard}>
          <p className={styles.cardNotice}>Velocity report</p>
          <div className={styles.momentumContent}>
            <h2 className={styles.cardTitle}>Deep Work Momentum</h2>
            <p className={styles.cardSubtitle}>
              82% of weekly objectives achieved
            </p>
          </div>
          <div className={styles.chartWrap}>
            <BarChart
              style={{
                width: "100%",
                maxWidth: "500px",
                maxHeight: "150px",
                aspectRatio: 1.618,
              }}
              responsive
              data={momentumData}
            >
              <Bar dataKey="focusHours" fill="#53834e" />
            </BarChart>
          </div>
        </article>

        <article className={styles.focusCard}>
          <div>
            <p className={styles.focusLabel}>Focus Time</p>
            <p className={styles.focusTotal}>32.5hrs</p>
          </div>
          <ul className={styles.focusBreakdown}>
            <li className={styles.focusBreakdownItem}>
              <p className={styles.focusCategory}>Architecture</p>
              <p className={styles.focusHours}>12h</p>
            </li>
            <li className={styles.focusBreakdownItem}>
              <p className={styles.focusCategory}>Editorial Strategy</p>
              <p className={styles.focusHours}>14h</p>
            </li>
            <li className={styles.focusBreakdownItem}>
              <p className={styles.focusCategory}>Curation</p>
              <p className={styles.focusHours}>6.5h</p>
            </li>
          </ul>
        </article>
      </section>

      <section className={styles.bottomGrid}>
        <article className={styles.projectsPanel}>
          <header className={styles.projectsHeader}>
            <h2 className={styles.projectsTitle}>Active Projects</h2>
            <button type="button" className={styles.ledgerButton}>
              View Ledger
            </button>
          </header>

          <ul className={styles.projectList}>
            <li className={styles.projectItem}>
              <div className={styles.projectMain}>
                <div className={styles.projectIcon}>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width={18}
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.128 9.155a3.751 3.751 0 1 1 .713-1.321l1.136.656a.75.75 0 0 1 .222 1.104l-.006.007a.75.75 0 0 1-1.032.157 1.421 1.421 0 0 0-.113-.072l-.92-.531Zm-4.827-3.53a2.25 2.25 0 0 1 3.994 2.063.756.756 0 0 0-.122.23 2.25 2.25 0 0 1-3.872-2.293ZM13.348 8.272a5.073 5.073 0 0 0-3.428 3.57 5.08 5.08 0 0 0-.165 1.202 1.415 1.415 0 0 1-.707 1.201l-.96.554a3.751 3.751 0 1 0 .734 1.309l13.729-7.926a.75.75 0 0 0-.181-1.374l-.803-.215a5.25 5.25 0 0 0-2.894.05l-5.325 1.629Zm-9.223 7.03a2.25 2.25 0 1 0 2.25 3.897 2.25 2.25 0 0 0-2.25-3.897ZM12 12.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                      clipRule="evenodd"
                    />
                    <path d="M16.372 12.615a.75.75 0 0 1 .75 0l5.43 3.135a.75.75 0 0 1-.182 1.374l-.802.215a5.25 5.25 0 0 1-2.894-.051l-5.147-1.574a.75.75 0 0 1-.156-1.367l3-1.732Z" />
                  </svg>
                </div>
                <div className={styles.projectText}>
                  <p className={styles.projectName}>Atelier Rebrand 2024</p>
                  <p className={styles.projectMeta}>
                    High Intensity . Due in 4 days
                  </p>
                </div>
              </div>
              <div className={styles.projectStatus}>
                <div className={styles.avatarStack}>
                  <img src={avatar} alt="Team member" />
                  <img src={avatar} alt="Team member" />
                </div>
                <span className={styles.statusBadge}>In Progress</span>
              </div>
            </li>

            <li className={styles.projectItem}>
              <div className={styles.projectMain}>
                <div className={styles.projectIcon}>
                  {" "}
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
                      d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                </div>
                <div className={styles.projectText}>
                  <p className={styles.projectName}>Digital Publication Q3</p>
                  <p className={styles.projectMeta}>
                    Medium Intensity . Due in 12 days
                  </p>
                </div>
              </div>
              <div className={styles.projectStatus}>
                <div className={styles.avatarStack}>
                  <img src={avatar} alt="Team member" />
                </div>
                <span className={styles.statusBadge}>Planning</span>
              </div>
            </li>

            <li className={styles.projectItem}>
              <div className={styles.projectMain}>
                <div className={styles.projectIcon}>
                  {" "}
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
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                </div>
                <div className={styles.projectText}>
                  <p className={styles.projectName}>Art Direction Guide</p>
                  <p className={styles.projectMeta}>Low Intensity . Internal</p>
                </div>
              </div>
              <div className={styles.projectStatus}>
                <div className={styles.avatarStack}>
                  <img src={avatar} alt="Team member" />
                  <img src={avatar} alt="Team member" />
                  <img src={avatar} alt="Team member" />
                </div>
                <span className={styles.statusBadge}>Review</span>
              </div>
            </li>
          </ul>
        </article>

        <article className={styles.activityPanel}>
          <header className={styles.activityHeader}>
            <h2 className={styles.activityTitle}>Activity Log</h2>
          </header>

          <ul className={styles.activityList}>
            <li className={styles.activityItem}>
              <span className={styles.activityDot} aria-hidden="true"></span>
              <div className={styles.activityText}>
                <p>Julianne S. approved the Design Tokens draft.</p>
                <p className={styles.activityTime}>24 minutes ago</p>
              </div>
            </li>
            <li className={styles.activityItem}>
              <span className={styles.activityDot} aria-hidden="true"></span>
              <div className={styles.activityText}>
                <p>New focus session recorded: 3h 45m in Atelier Workspace.</p>
                <p className={styles.activityTime}>2 hours ago</p>
              </div>
            </li>
            <li className={styles.activityItem}>
              <span className={styles.activityDot} aria-hidden="true"></span>
              <div className={styles.activityText}>
                <p>Liam W. commented on Task #102: Typography Scales.</p>
                <p className={styles.activityTime}>Yesterday</p>
              </div>
            </li>
          </ul>

          <button type="button" className={styles.auditButton}>
            Full Audit Trail
          </button>
        </article>
      </section>
    </section>
  );
}
