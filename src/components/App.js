import React from "react";
import blogData from "../data/blog";
import Header from './Header';
import About from './About';
import Article from './Article';
import ArticleList from './ArticleList';
import logo from '../assets/logo'

// console.log(blogData);
const posts = blogData.posts

function App() {
  return (
    <div className="App">
      <header>
        <h1>Dan's Blog Corner</h1>
      </header>
      <Header  />
      <About image={logo} about="Blog posts created for Phases @Flatiron Coding Bootcamp" />
      <ArticleList posts={ posts} />
      <Article/>
    </div>
  );
}

export default App;
