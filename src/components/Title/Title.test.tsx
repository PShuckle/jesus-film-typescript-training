import { render, screen } from "@testing-library/react";
import { Title } from ".";

test("should render default title", () => {
  render(<Title fontSize={1} />);

  const title = screen.getByText("To Do App");
  expect(title).toBeInTheDocument();
});

test("should render custom title", () => {
  render(<Title fontSize={1} label={"hello world"} />);

  const title = screen.getByText("hello world");
  expect(title).toBeInTheDocument();
});
