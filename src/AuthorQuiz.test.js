import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import expect from 'expect'
import AuthorQuiz from './AuthorQuiz'; // eslint-disable-line no-unused-vars
import Enzyme, {mount, shallow, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

const state = {
  turnData: {
    books: ['book1', 'book2', 'book3', 'book4'],
    author: {
      name: 'RTZ',
      imageUrl: 'images/arteezy.jpg',
      imageSource: 'Internet',
      books: ['book1', 'book2', 'book3', 'book4']
    },
  },
  highlight: 'none'
}

describe('Author Quiz', () => {
  it("render without crashing", () => {
      const div = document.createElement("div");
      ReactDOM.render(<AuthorQuiz {...state} onAnswerSelected={()=>{}}/>, div);
  });

  describe("When no answer has been selected", () => {
    let wrapper;
    beforeAll(() => {
      wrapper = mount(<AuthorQuiz {...state} onAnswerSelected={()=>{}}/>);
    });

    it("should have no background color", ()=> {
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('');
    });
  });

  describe("When wrong answer has been selected", () => {
    let wrapper;
    beforeAll(() => {
      wrapper = mount(
        <AuthorQuiz {...(Object.assign({}, state, {highlight: 'wrong'}))} onAnswerSelected={()=>{}}/>);
    });

    it("should have no background color", ()=> {
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('red');
    });
  });

  // describe("When user selects the first answer", () => {
  //   let wrapper;
  //   const handleAnswerSelected = jest.fn();

  //   beforeAll(() => {
  //     wrapper = mount(<AuthorQuiz {...state} onAnswerSelected={handleAnswerSelected} />);
  //     wrapper.find('.answer').first().simulate('click');
  //   });

  //   it("onAnswerSelected should be called", ()=> {
  //     expect(handleAnswerSelected).toHaveBeenCalled();
  //   });
  // });
})

