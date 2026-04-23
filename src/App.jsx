import { Routes, Route, Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import Dashboard from "./components/dashboard/Dashboard";
import Board from "./components/board/Board";
import List from "./components/list/List";
import Setting from "./components/setting/Setting";
import CreateTask from "./components/create-task/CreateTask";

function AppLayout() {
  return (
    <div className="appLayout">
      <Sidebar />
      <div className="content">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <button className="questionButton" aria-label="Quick actions">
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

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="board" element={<Board />} />
        <Route path="list" element={<List />} />
        <Route path="settings" element={<Setting />} />
        <Route path="create-task" element={<CreateTask />} />
      </Route>
    </Routes>
  );
}

export default App;
