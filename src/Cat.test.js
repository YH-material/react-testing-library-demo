import Cat from "./Cat";
import { screen, render } from "@testing-library/react";

test("should display the provided name", () => {
  render(
    <Cat
      name={"Kristian"}
      value={""}
      handleChange={jest.fn()}
      isCopying={true}
      toggleTape={jest.fn()}
    />
  );
  expect(screen.getByText("Copy Cat Kristian")).toBeInTheDocument();
});

test.only("should display input text in paragraph when isCopying is set to true", () => {
  render(
    <Cat
      name={"Kristian"}
      value={"hej"}
      handleChange={jest.fn()}
      isCopying={true}
      toggleTape={jest.fn()}
    />
  );
  expect(screen.getByText("hej")).toBeInTheDocument()
});

test.only("should not display input text in paragraph when isCopying is set to false", () => {
  render(
    <Cat
      name={"Kristian"}
      value={"hej"}
      handleChange={jest.fn()}
      isCopying={false}
      toggleTape={jest.fn()}
    />
  );
  expect(screen.queryByText("hej")).not.toBeInTheDocument()
});
