import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostList from "./components/posts/PostList";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PostList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
