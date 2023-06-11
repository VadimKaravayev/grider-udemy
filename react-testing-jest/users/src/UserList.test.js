import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

//Do not use beforeEach

test("render one row per user", () => {
  //render the component
  const users = [
    { name: "jane", email: "jane@jane.com" },
    { name: "sam", email: "sam@sam.com" },
  ];
  const { container } = render(<UserList users={users} />);

  //find all the rows in the table
  //   screen.logTestingPlaygroundURL();
  //   const rows = screen.getAllByRole("row");
  //   const rows = within(screen.getByTestId("users")).getAllByRole("row");

  const rows = container.querySelectorAll("tbody tr");

  //assertion: correct rows in the table
  expect(rows).toHaveLength(2);
});

test("render the email and name of each user", () => {
  const users = [
    { name: "jane", email: "jane@jane.com" },
    { name: "sam", email: "sam@sam.com" },
  ];
  render(<UserList users={users} />);

  users.forEach((user) => {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });
});
