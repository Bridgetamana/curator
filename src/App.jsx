import { Outlet, Route, Routes } from "react-router-dom";
import AppLayout from "./app/AppLayout";
import Board from "./pages/board/Board";
import CreateTask from "./pages/create-task/CreateTask";
import Dashboard from "./pages/dashboard/Dashboard";
import Header from "./components/header/Header";
import List from "./pages/list/List";
import Setting from "./pages/setting/Setting";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="board" element={<Board />} />
        <Route path="list" element={<List />} />
        <Route path="setting" element={<Setting />} />
        <Route path="create-task" element={<CreateTask />} />
      </Route>
    </Routes>
  );
}

export default App;
