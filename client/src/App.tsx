import { Suspense } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import Newsfeed from "./components/Newsfeed";

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="app">
        <Newsfeed />
      </div>
    </Suspense>
  );
}

export default App;
