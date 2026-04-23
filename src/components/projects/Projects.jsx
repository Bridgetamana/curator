import styles from "./Projects.module.css";

export default function Projects() {
  return (
.board {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.boardHeader {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}

.boardTitleGroup {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.boardTitle {
  font-size: var(--title);
}

.boardSubtitle {
  font-size: var(--subtext);
  color: var(--muted_text);
}

  );
}
