import './index.css';
import AuthorQuiz from './AuthorQuiz'; // eslint-disable-line no-unused-vars
import AddAuthorForm from './AddAuthorForm';
import registerServiceWorker from './registerServiceWorker';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
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

function reducer(state = { authors, turnData: getTurnData(authors), highlight: ''}, action) {
  switch (action.type) {
    case 'ANSWER_SELECTED':
      const isCorrect = state.turnData.author.books.some((book) => book === action.answer);
      return Object.assign(
        {},
        state, {
          highlight: isCorrect ? 'correct' : 'wrong'
      });
    case 'CONTINUE':
      return Object.assign({}, state, {
        highlight: '',
        turnData: getTurnData(state.authors)
      });
    case 'ADD_AUTHOR':
    return Object.assign({}, state, {
      authors: state.authors.concat([action.author])
    });
    default: return state;
  }
}

let store = Redux.createStore(reducer);

ReactDOM.render(
<BrowserRouter>
  <ReactRedux.Provider store={store}>
    <React.Fragment>
      <Route exact path="/" component={AuthorQuiz} />
      <Route exact path="/add" component={AddAuthorForm} />
    </React.Fragment>
  </ReactRedux.Provider>
</BrowserRouter>, document.getElementById('root'));

registerServiceWorker();
