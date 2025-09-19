import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArticleById from "./components/ArticleById";
import CommentsByArticleId from "./components/CommentsByArticleId";
import User from "./components/User";
import ArticlesByTopic from "./components/ArticlesByTopic";
import List from "./components/List";
import ErrorPage from "./components/ErrorPage";
import GetAllUsers from "./components/GetAllUsers";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <Router>
      <Header />
      <User currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<List />} />
        <Route
          path="/users"
          element={<GetAllUsers onUserSelect={setCurrentUser} />}
        />
        <Route path="/topics/:slug" element={<ArticlesByTopic />} />
        <Route path="/articles/:id" element={<ArticleById />} />
        <Route
          path="/articles/:id/comments"
          element={<CommentsByArticleId currentUser={currentUser} />}
        />
        <Route
          path="*"
          element={
            <ErrorPage message="Page not found. Go back to the homepage." />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
