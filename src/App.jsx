import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArticleById from "./components/ArticleById";
import CommentsByArticleId from "./components/CommentsByArticleId";
import User from "./components/User";
import ArticlesByTopic from "./components/ArticlesByTopic";
import List from "./components/List";

function App() {
  return (
    <Router>
      <Header />
      <User />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/topics/:slug" element={<ArticlesByTopic />} />
        <Route path="/articles/:id" element={<ArticleById />} />
        <Route
          path="/articles/:id/comments"
          element={<CommentsByArticleId />}
        />
      </Routes>
    </Router>
  );
}

export default App;
