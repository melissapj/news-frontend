import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArticlesProvider from "./components/ArticleProvider";
import ArticleById from "./components/ArticleById";
import CommentsByArticleId from "./components/CommentsByArticleId";
import User from './components/User'

function App() {
  return (
    <Router>
      <Header />
      <User />
      <Routes>
        <Route path="/" element={<ArticlesProvider />} />
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
