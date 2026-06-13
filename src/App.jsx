import { Route, Routes } from 'react-router';
import AppLayout from '@/layout/app/AppLayout';
import AuthLayout from '@/layout/auth/AuthLayout';
import Signin from '@/pages/auth/signin/Signin';
import Signup from '@/pages/auth/signup/Signup';
import Dashboard from '@/pages/dashboard/Dashboard';
import Board from '@/pages/board/Board';
import List from '@/pages/list/List';
import Setting from '@/pages/setting/Setting';
import CreateTask from '@/pages/create-task/CreateTask';

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route index element={<Signin />} />
        <Route path='signin' element={<Signin />} />
        <Route path='signup' element={<Signup />} />
      </Route>

      <Route element={<AppLayout />}>
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='board' element={<Board />} />
        <Route path='list' element={<List />} />
        <Route path='setting' element={<Setting />} />
        <Route path='create-task' element={<CreateTask />} />
      </Route>
    </Routes>
  );
}

export default App;
