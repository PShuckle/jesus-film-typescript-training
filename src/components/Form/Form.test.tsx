import { fireEvent, render, screen } from "@testing-library/react";
import { Form } from ".";

test("should call add task", () => {
  const handleAdd = jest.fn();

  render(<Form addTask={handleAdd} />);
  const button = screen.getByRole("button", { name: "Submit Task" });
  fireEvent.click(button);

  expect(handleAdd).toHaveBeenCalled();
});
