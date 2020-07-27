import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';
import Enzyme, { mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({
  adapter: new Adapter()
});

const state = {
  turnData: {
    books: ["It", 'A Tale of two cities', 'Roughing It'],
    author:  {
      name: 'Mark Twain',
      imageUrl: 'images/authors/marktwain.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['The Adventures of Huckleberry Finn', "Life on the missisippi", "Roughing It"]
    },
  },
  highlight: 'none'
}

// test('renders learn react link', () => {
//   const { getByText } = render(<AuthorQuiz />);
//   const linkElement = getByText(/author/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("AUthor Quiz", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AuthorQuiz {...state} onAnswerSelected={() => {}} />, div)
  })

  describe("When no answer has been selected", () => {
    let wrapper;
    beforeAll(() => {
      wrapper = mount(<AuthorQuiz {...state} onAnswerSelected={() => {}}/>);
    });

    it ('Should have no background color', () => {
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('');
    });
  });

  describe("When the wrong answer has been selected", () => {
    let wrapper;

    beforeAll(() => {
      wrapper = mount(<AuthorQuiz {...(Object.assign({}, state, {highlight: 'wrong'}))} onAnswerSelected={() => {}} />);
    });

    it ('Should have a red background color', () => {
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('red');
    });
  });

  describe("When the correct answer has been selected", () => {
    let wrapper;

    beforeAll(() => {
      wrapper = mount(<AuthorQuiz {...(Object.assign({}, state, {highlight: 'correct'}))} onAnswerSelected={() => {}} />);
    });

    it ('Should have a green background color', () => {
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('green');
    });
  });

  describe("When the first answer is selected", () => {
    let wrapper;
    const handleAnswerSelected = jest.fn();

    beforeAll(() => {
      wrapper = mount(<AuthorQuiz {...state} onAnswerSelected={handleAnswerSelected} />);
      wrapper.find('.answer').first().simulate('click');
    });

    it ('onAnswerSelected should be called', () => {
      expect(handleAnswerSelected).toHaveBeenCalled();
    });

    it('should receive the shining', () => {
      expect(handleAnswerSelected).toHaveBeenCalledWith("It");
    });
  });
});