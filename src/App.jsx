import Dashboard from "./components/dashboard/Dashboard";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="appLayout">
      <Sidebar />
      <div className="content">
        <Header />
        <main>
          <Dashboard />
        </main>
      </div>
      <button className="questionButton">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
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

export default App;
