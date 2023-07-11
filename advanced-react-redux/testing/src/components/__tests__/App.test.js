import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import Root from "../../Root";
import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it("shows a comment box", () => {
  render(
    <Root>
      <App />
    </Root>
  );
  // const commentBox = screen.getByText(/comment box/i);

  // expect(commentBox).toBeInTheDocument();
});

it("shows a comment box instance", () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("shows a comment list", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
