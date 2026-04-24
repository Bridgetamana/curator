import { useState } from "react";
import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.css"
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";

export default function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className={styles.appLayout}>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className={styles.content}>
        <Header onOpenSidebar={() => setIsSidebarOpen(true)} />
        <main>
          <Outlet />
        </main>
      </div>
      <button className={styles.questionButton} aria-label="Quick actions">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#d9d9d9"
          width={18}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
          />
        </svg>
      </button>
    </div>
  );
}
