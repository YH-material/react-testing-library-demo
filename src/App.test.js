import App from "./App";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

it("Should display copied text", async () => {
  render(<App />);
  const user = userEvent.setup();
  const input = screen.getByRole("textbox");

  await user.type(input, "test");

  expect(screen.getByText("test")).toBeInTheDocument();
});

it("Should remove copied text after putting on tape", async () => {
  render(<App />);
  const user = userEvent.setup();
  const input = screen.getByRole("textbox");

  await user.type(input, "test");

  const catImg = screen.getByAltText("copycat");
  await user.click(catImg);
  await waitFor(() => {
    expect(screen.queryByText("test")).not.toBeInTheDocument();
  });
});

it.only("Should display copied text after removing tape", async () => {
  render(<App />);
  const user = userEvent.setup();
  const input = screen.getByRole("textbox");

  await user.type(input, "test");

  const catImg = screen.getByAltText("copycat");
  await user.click(catImg);
  await waitFor(() => {
    expect(screen.queryByText("test")).not.toBeInTheDocument();
  });
  const mutedCatImg = screen.getByAltText("quietcat");
  await user.click(mutedCatImg);
  expect(await screen.findByText("test")).toBeInTheDocument();
});
