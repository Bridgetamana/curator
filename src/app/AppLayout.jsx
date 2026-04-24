import { useState } from "react";
import { Outlet } from "react-router";
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
    </div>
  );
}
