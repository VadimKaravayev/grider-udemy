import { screen, render } from "@testing-library/react";
import RepositoriesSummary from "./RepositoriesSummary";

test("displays info about the repository", () => {
  const repository = {
    language: "JavaScript",
    stargazers_count: 5,
    open_issues: 1,
    forks: 30,
  };
  render(<RepositoriesSummary repository={repository} />);

  const language = screen.getByText("JavaScript");
  const stars = screen.getByText(5);

  for (let key in repository) {
    const value = repository[key];
    const element = screen.getByText(new RegExp(value));
    expect(element).toBeInTheDocument();
  }

  expect(language).toBeInTheDocument();
  expect(stars).toBeInTheDocument();
});
