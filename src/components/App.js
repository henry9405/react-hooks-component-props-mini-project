import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import data from "../data/blog";

function App() {
  return (
    <div className="App">
      <Header name="My Personal Blog" />
      <About image="https://via.placeholder.com/215" about="Personal blog. I explain with words and code." />
      <ArticleList posts={data.posts} />
    </div>
  );
}

export default App;
