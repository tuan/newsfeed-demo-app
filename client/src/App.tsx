import { Suspense } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import Newsfeed from "./components/Newsfeed";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="app">
        <Newsfeed />
        <Sidebar />
      </div>
    </Suspense>
  );
}

export default App;
