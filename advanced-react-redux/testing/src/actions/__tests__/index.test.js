import { saveComment } from "..";
import { SAVE_COMMENT } from "../types";

describe("save comment", () => {
  it("has the correct type", () => {
    const action = saveComment();

    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it("has the correct payload", () => {
    const action = saveComment("new comment");

    expect(action.payload).toEqual("new comment");
  });
});

describe("fetchComment", () => {
  it("has the correct type", () => {});

  it("has the correct payload", () => {});
});
