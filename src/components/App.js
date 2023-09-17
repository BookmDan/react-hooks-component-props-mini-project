import React from "react";
import blogData from "../data/blog";
import Header from './Header';
import About from './About';
import Article from './Article';
import ArticleList from './ArticleList';
import logo from '../assets/logo'

// console.log(blogData);
const posts = [
  {
    id: 1,
    title: 'Manipulating DOM events',
    url: 'https://dev.to/bookmdan/manipulating-the-dom-events-3dno',
    date: 'December 15, 2020',
    preview: 'What is DOM manipulation? ',
  },
  {
    id: 2,
    title: 'React Data Flow',
    date: 'December 11, 2020',
    preview: 'Passing props is never passé',
  },
  {
    id: 3,
    title: 'Function Components vs Class Components',
    date: 'December 10, 2020',
    preview: 'React, meet OOJS.',
  },
];

function App() {
  return (
    <div className="App">
      <header>
        <h1>Dan's Corner</h1>
      </header>
      <Header  />
      <About image={logo} about="Blog posts created for Phases @Flatiron Coding Bootcamp" />
      <ArticleList posts={ posts} />
      <Article/>
    </div>
  );
}

export default App;
