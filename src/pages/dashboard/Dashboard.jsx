// import avatar from "../../assets/avatar.webp";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  const taskOverview = [
    // { label: "Due today", value: "4" },
    // { label: "In progress", value: "9" },
    // { label: "Completed this week", value: "16" },
  ];

  const recentActions = [
    // {
    //   text: "You created Atelier Rebrand 2024.",
    //   time: "24 minutes ago",
    // },
    // {
    //   text: "You moved Digital Publication Q3 to Planning.",
    //   time: "2 hours ago",
    // },
    // {
    //   text: "You updated the priority for Art Direction Guide.",
    //   time: "Yesterday",
    // },
  ];

  const activeTasks = [
    // {
    //   name: "Atelier Rebrand 2024",
    //   priority: "High",
    //   due: 4,
    //   assignees: [
    //     { name: "Mary L", avatar },
    //   ],
    // },
    // {
    //   name: "Digital Publication Q3",
    //   priority: "Medium",
    //   due: 12,
    //   assignees: [
    //     { name: "John L", avatar },
    //     { name: "Mary L", avatar },
    //   ],
    // },
    // {
    //   name: "Art Direction Guide",
    //   priority: "Low",
    //   due: 1,
    //   assignees: [
    //     { name: "Jane D", avatar },
    //   ],
    // },
  ];

  const hasTaskOverview = taskOverview.length > 0;
  const hasActiveTasks = activeTasks.length > 0;
  const hasRecentActions = recentActions.length > 0;

  return (
    <section className={styles.dashboard}>
      <header className={styles.greetingSection}>
        <h1 className={styles.greetingTitle}>Good Morning, Director</h1>
        <p className={styles.greetingText}>
          Your deep work block begins in 14 minutes. Focus on the Atelier
          Rebrand project today.
        </p>
      </header>

      <section className={styles.reportGrid} aria-label="Task overview">
        <article className={styles.overviewCard}>
          <div className={styles.overviewContent}>
            <h2 className={styles.cardTitle}>Task Overview</h2>
            <p className={styles.cardSubtitle}>
              A quick look at what needs attention right now.
            </p>
          </div>

          {hasTaskOverview ? (
            <ul className={styles.overviewList}>
              {taskOverview.map((item) => (
                <li key={item.label} className={styles.overviewItem}>
                  <span className={styles.overviewValue}>{item.value}</span>
                  <span className={styles.overviewLabel}>{item.label}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.emptyState}>
              No summary yet. Add tasks to see your workspace stats here.
            </p>
          )}
        </article>
      </section>

      <section className={styles.bottomGrid}>
        <article className={styles.projectsPanel}>
          <header className={styles.projectsHeader}>
            <h2 className={styles.projectsTitle}>Active Tasks</h2>
          </header>

          {hasActiveTasks ? (
            <ul className={styles.projectList}>
              {activeTasks.map((task) => (
                <li className={styles.projectItem} key={task.name}>
                  <div className={styles.projectMain}>
                    <div className={styles.projectText}>
                      <p className={styles.projectName}>{task.name}</p>
                      <span className={styles.projectMeta}>
                        {task.priority} . Due in {task.due} days
                      </span>
                    </div>
                  </div>
                  <div className={styles.projectStatus}>
                    <div className={styles.avatarStack}>
                      {task.assignees.map((assignee) => (
                        <img
                          key={assignee.name}
                          src={assignee.avatar}
                          alt={assignee.name}
                        />
                      ))}
                    </div>
                    <span className={styles.statusBadge}>In Progress</span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.emptyState}>
              No active tasks yet. Create one to get started.
            </p>
          )}
        </article>

        <article className={styles.activityPanel}>
          <header className={styles.activityHeader}>
            <h2 className={styles.activityTitle}>Recent Activity</h2>
          </header>

          {hasRecentActions ? (
            <ul className={styles.activityList}>
              {recentActions.map((item) => (
                <li key={item.text} className={styles.activityItem}>
                  <span className={styles.activityDot} aria-hidden="true" />
                  <div className={styles.activityText}>
                    <p>{item.text}</p>
                    <p className={styles.activityTime}>{item.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.emptyState}>
              No recent activity yet. Your latest actions will appear here.
            </p>
          )}
        </article>
      </section>
    </section>
  );
}
