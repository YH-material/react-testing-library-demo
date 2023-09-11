import Cat from "./Cat";
import { screen, render } from "@testing-library/react";

test("Displays the provided name", () => {
  render(
    <Cat
      name={"Kristian"}
      value={""}
      handleChange={jest.fn()}
      isCopying={true}
      toggleTape={jest.fn()}
    />
  );
  expect(screen.getByText("Kristian", { exact: false })).toBeInTheDocument();
});

test("Should display input text in paragraph when isCopying is set to true", () => {
  render(
    <Cat
      name={"Kristian"}
      value={"lorem ipsum"}
      handleChange={jest.fn()}
      isCopying={true}
      toggleTape={jest.fn()}
    />
  );
  expect(screen.getByText("lorem ipsum")).toBeInTheDocument();
});

test("Should not display input text in paragraph when isCopying is set to false", () => {
  render(
    <Cat
      name={"Kristian"}
      value={"lorem ipsum"}
      handleChange={jest.fn()}
      isCopying={false}
      toggleTape={jest.fn()}
    />
  );
  expect(screen.queryByText("lorem ipsum")).not.toBeInTheDocument();
});
