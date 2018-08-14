import './index.css';
import AuthorQuiz from './AuthorQuiz'; // eslint-disable-line no-unused-vars
import registerServiceWorker from './registerServiceWorker';
import ReactDOM from 'react-dom';
import React from 'react'; // eslint-disable-line no-unused-vars
import {shuffle, sample} from 'underscore';

const authors = [
  {
    name: 'Mark Twain',
    imageUrl: 'images/authors/marktwain.jpg',
    imageSource: 'Wikimedia Commons',
    books: [
      'MT Book1',
      'MT book2',
      'MT book3'
    ]
  },
  {
    name: 'Arteezy',
    imageUrl: 'images/authors/arteezy.jpg',
    imageSource: 'Wikimedia Commons',
    books: [
      'RTZ Book1',
      'RTZ book2',
      'RTZ book3'
    ]
  },
  {
    name: 'Burning',
    imageUrl: 'images/authors/burning.jpg',
    imageSource: 'Wikimedia Commons',
    books: [
      'Burning Book1',
      'Burning book2',
      'Burning book3'
    ]
  },
  {
    name: 'Cancel',
    imageUrl: 'images/authors/cancel.jpg',
    imageSource: 'Wikimedia Commons',
    books: [
      'Cancel Book1',
      'Cancel book2',
      'Cancel book3'
    ]
  },
];

function getTurnData(authors) {
  const allBooks = authors.reduce(function (p, c, i) {
    return p.concat(c.books);
  }, []);
  const fourRandomBooks = shuffle(allBooks).slice(0,4);
  const answer = sample(fourRandomBooks);

  return {
    books: fourRandomBooks,
    author: authors.find((author) =>
      author.books.some((title) =>
        title === answer))
  }
}

const state = {
  turnData: getTurnData(authors)
};

function render() {
  ReactDOM.render(<AuthorQuiz {...state} />,
  document.getElementById('root'));
  
}
render();
registerServiceWorker();
