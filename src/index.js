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
  const allBooks = authors.reduce(function (accumulatedBooks, currentAuthor) {
    return accumulatedBooks.concat(currentAuthor.books);
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
  turnData: getTurnData(authors),
  highlight: ''
};

function onAnswerSelected(answer) {
  const isCorrect = state.turnData.author.books.some((book) => book === answer);
  state.highlight = isCorrect ? 'correct' : 'wrong';
  render();
}

function render () {
  ReactDOM.render(<AuthorQuiz {...state} onAnswerSelected={onAnswerSelected}/>,   document.getElementById('root'));
}

render();
registerServiceWorker();
