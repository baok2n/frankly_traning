import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz'; // eslint-disable-line no-unused-vars
// import jsdom from'jsdom';
import jsdom from 'mocha-jsdom';
import Enzyme, {mount, shallow, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter()});

// before(() => {
//   jsdom();
// })

// describe('Author Quiz', () => {
  
//   it("render without crashing", () => {
//       const div = document.createElement("div");
//       ReactDOM.render(<AuthorQuiz />, div);
//   })
// })

