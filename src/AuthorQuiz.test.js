import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';
import Enzyme, { mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { iteratee } from 'underscore';
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
});