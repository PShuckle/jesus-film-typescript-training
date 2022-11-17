import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test.skip("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

function setUp() {
  render(<App />);
  const submitButton = screen.getByRole("button", { name: /Submit Task/i });
  const textField = screen.getByLabelText(/Enter Task Name/i);

  fireEvent.change(textField, { target: { value: "Test task" } });
  fireEvent.click(submitButton);
}

test("clicking the submit button adds a new task", () => {
  setUp();

  const textField = screen.getByLabelText(/Enter Task Name/i);
  expect(textField).toHaveValue("");
  // const allCards = screen.getAllByTestId("Test");
  const taskCard = screen.getByTestId(/Test task-card/i);
  expect(taskCard).toBeInTheDocument();
});

test("clicking delete button deletes a task", () => {
  setUp();
  const taskCard = screen.getByTestId(/Test task-card/i);
  const taskDeleteButton = screen.getByRole("button", { name: /Delete/i });
  fireEvent.click(taskDeleteButton);
  expect(taskCard).not.toBeInTheDocument();
});

test("checking the completed checkbox changes the completed status", () => {
  setUp();
  const checkbox = screen.getByLabelText(/COMPLETED/i);
  const completedText = screen.getByText(/Pending/i);
  fireEvent.click(checkbox);
  expect(completedText).toHaveTextContent("Completed");
  fireEvent.click(checkbox);
  expect(completedText).toHaveTextContent("Pending");
});

test("title renders correctly", () => {
  setUp();
  const title = screen.getByText(/To Do List/i);
  expect(title).toBeInTheDocument();
});
