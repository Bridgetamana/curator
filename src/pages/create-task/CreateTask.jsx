import styles from "./CreateTask.module.css";

export default function CreateTask() {
  return (
    <section>
      <header className={styles.createTaskHeader}>
        <div className={styles.createTaskTitleGroup}>
          <h1 className={styles.createTaskTitle}>Create Tasks</h1>
          <p className={styles.createTaskSubtitle}>
            Organize your deep work sessions
          </p>
        </div>
      </header>

      <form action="" className={styles.createTaskForm}>
        <div className={styles.formGroup}>
          <label htmlFor="task-title" className={styles.label}>
            Title
          </label>
          <input
            type="text"
            id="task-title"
            name="title"
            className={styles.titleInput}
            placeholder="Task Name"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="task-description" className={styles.label}>
            Description
          </label>
          <textarea
            name="description"
            id="task-description"
            rows="5"
            cols="20"
            placeholder="Add Description"
            className={styles.descriptionInput}
            required
          ></textarea>
        </div>
        <div className={styles.formSelectGroup}>
          <div className={styles.formGroup}>
            <label htmlFor="task-priority" className={styles.label}>
              Priority
            </label>
            <select
              name="priority"
              id="task-priority"
              className={styles.selectInput}
            >
              <option value="urgent">Urgent</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="task-duedate" className={styles.label}>
              Due Date
            </label>
            <input
              type="date"
              name="duedate"
              id="task-duedate"
              className={styles.dateInput}
            />
          </div>
        </div>
        <div className={styles.formSelectGroup}>
          <div className={styles.formGroup}>
            <label htmlFor="assignee" className={styles.label}>
              Assignee
            </label>
            <select name="assignee" id="task-assignee" className={styles.selectInput}>
              <option value="mary">Mary L.</option>
              <option value="john">John S.</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="task-tag" className={styles.label}>
              Tag
            </label>
            <select name="tag" id="task-tag" className={styles.selectInput}>
              <option value="editorial">Editorial</option>
              <option value="marketing">Marketing</option>
              <option value="personal">Personal</option>
            </select>
          </div>
        </div>
        <div className={styles.saveTask}>
          <button className={styles.saveTaskButton}>Save Task</button>
        </div>
      </form>
    </section>
  );
}
