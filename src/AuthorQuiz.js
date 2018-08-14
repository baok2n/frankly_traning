import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import './App.css';
import './bootstrap.min.css';

function Hero() { // eslint-disable-line no-unused-vars
  return (<div className="row">
    <div className="jumbotron col-10 offset-1">
      <h1>Author Quiz</h1>
      <p>Select the book written by the author shown</p>
    </div>
  </div>);
}

function Book({title}) {
  return (<div className="answer">
    <h4>{title}</h4>
  </div>);
}

function Turn({author, books}) { // eslint-disable-line no-unused-vars
  return (<div className="row turn" style={{backgroundColor: "white"}}>
    <div className="col-4 offset-1">
      <img src={author.imageUrl} className="authorimage" alt="Author"/>
    </div>
    <div className="col-6">
      {books.map((title) => <Book title={title} key={title}/>)}
    </div>
  </div>);
}

function Continue() { // eslint-disable-line no-unused-vars
  return (<div/>);
}

function Footer() { // eslint-disable-line no-unused-vars
  return (<div id="footer" className="row">
    <div className="col-12">
      <p className="text-muted credit">
        All images are from <a href="http://commons.wikipedia.org">wiki common</a>
      </p>
    </div>
  </div>);
}

function AuthorQuiz({turnData}) {
  return (
    <div className="container-fluid">
      <Hero/>
      <Turn {...turnData}/>
      <Continue/>
      <Footer/>
    </div>
  );
}

export default AuthorQuiz;
