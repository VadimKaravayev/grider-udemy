import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("it shows two inputs and a button", () => {
  // redner the component
  render(<UserForm />);

  // manipulate the component or find an element in it
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // make assertion
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("it calls onUserAdd when the form is submitted", async () => {
  //Alternative to mock functions
  const argList = [];
  const callback = (...args) => {
    argList.push(args);
  };

  const mock = jest.fn();

  // render the component
  render(<UserForm onUserAdd={mock} />);

  // find the two inputs (name and email)
  // const [nameInput, emailInput] = screen.getAllByRole("textbox");

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });

  // simulate typing in the name input
  await user.click(nameInput);
  await user.keyboard("jane");

  // simulare typing in the email input
  await user.click(emailInput);
  await user.keyboard("jane@jane.com");

  // find the button
  const button = screen.getByRole("button");
  await user.click(button);

  // expect(argList).toHaveLength(1);
  // expect(argList[0][0]).toEqual({ name: "jane", email: "jane@jane.com" });

  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({ name: "jane", email: "jane@jane.com" });
});

test("it empties two inputs when form is submitted", async () => {
  render(<UserForm onUserAdd={() => {}} />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });
  const button = screen.getByRole("button");

  await user.click(nameInput);
  await user.keyboard("jane");

  await user.click(emailInput);
  await user.keyboard("jane@jane.com");

  await user.click(button);

  expect(nameInput).toHaveValue("");
  expect(emailInput).toHaveValue("");
});
