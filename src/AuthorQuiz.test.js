import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz'; // eslint-disable-line no-unused-vars

describe('Author Quiz', () => {
    it("render without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<AuthorQuiz />, div);
    })
})

