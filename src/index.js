import './index.css';
import AuthorQuiz from './AuthorQuiz'; // eslint-disable-line no-unused-vars
import AddAuthorForm from './AddAuthorForm';
import registerServiceWorker from './registerServiceWorker';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
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

function resetState() {
  return {
    turnData: getTurnData(authors),
    highlight: ''
  }
}

let state = resetState();

function onAnswerSelected(answer) {
  const isCorrect = state.turnData.author.books.some((book) => book === answer);
  state.highlight = isCorrect ? 'correct' : 'wrong';
  render();
}

function App() {
  return <AuthorQuiz {...state} 
  onAnswerSelected={onAnswerSelected}
  onContinue={() => {
    state = resetState();
    render();
  }}/>;
}

const AuthorWrapper = withRouter(({ history }) => 
  <AddAuthorForm onAddAuthor={(author) => {
    authors.push(author);
    history.push('/');
  }} />
);

function render () {
  ReactDOM.render(<BrowserRouter>
    <React.Fragment>
      <Route exact path="/" component={App} />
      <Route exact path="/add" component={AuthorWrapper} />
    </React.Fragment>
  </BrowserRouter>,   document.getElementById('root'));
}

render();
registerServiceWorker();
