import userEvent from "@testing-library/user-event";
import App from "./App";
import { screen, render, waitFor } from "@testing-library/react";

it("should display copied text", async () => {
  render(<App />);
  const user = userEvent.setup();
  const inputField = screen.getByRole("textbox");
  await user.click(inputField);
  await user.type(inputField, "asd");
  //screen.debug();
  expect(await screen.findByText("asd")).toBeInTheDocument();
});

it("should remove copied text after putting on tape", async () => {
  render(<App />);
  const user = userEvent.setup();
  const inputField = screen.getByRole("textbox");
  const copyCat = screen.getByAltText("copycat");
  await user.click(inputField);
  await user.type(inputField, "asd");
  await user.click(copyCat);
  await waitFor(() =>
    expect(screen.queryByText("asd")).not.toBeInTheDocument()
  );
});

it.only("should display copied text after removing tape", async () => {
  render(<App />);
  const user = userEvent.setup();
  const inputField = screen.getByRole("textbox");
  const copyCat = screen.getByAltText("copycat");
  await user.click(inputField);
  await user.type(inputField, "asd");
  await user.click(copyCat);
  await waitFor(() => expect(screen.getByAltText("quietcat")));
  await user.click(screen.getByAltText("quietcat"));
  expect(await screen.findByText("asd")).toBeInTheDocument();
});
