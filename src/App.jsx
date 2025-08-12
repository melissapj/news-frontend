import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArticlesProvider from "./components/ArticleProvider";
import ArticleById from './components/ArticleById'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ArticlesProvider />} />
        <Route path="/articles/:id" element={<ArticleById/>} />
      </Routes>
    </Router>
  );
}

export default App;
