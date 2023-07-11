import { mount } from "enzyme";
import moxios from "moxios";
import Root from "../Root";
import App from "../components/App";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "Fetched #1" }, { name: "Fetched #2" }],
  });
});

afterEach(() => {
  moxios.uninstall();
});

it("can fetch a list of comments and display them", () => {
  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "Fetched #1" }, { name: "Fetched #2" }],
  });
  // Render entire app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  console.log(wrapped);
  // find 'fetch comments' button and click it
  const btn = wrapped.find(".fetch-comments");
  console.log(btn.length);

  btn.simulate("click");
  //   Expect to find a list of comments
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find("li").length).toEqual(2);
    done();
    wrapped.unmount();
  });
});
