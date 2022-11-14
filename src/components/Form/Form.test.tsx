import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Form from "./Form";

describe("Form component behavior", () => {
  test("while name input is empty, new participants cannot be be added", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    const button = screen.getByRole("button");

    expect(input).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  test("participant can be added when name field is filled", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    const button = screen.getByRole("button");

    fireEvent.change(input, { target: { value: "José Silva" } });
    fireEvent.click(button);

    expect(input).toHaveFocus();
    expect(input).toHaveValue("");
  });

  test("alert message should appear while trying to add duplicated participant", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const button = screen.getByRole("button");

    for (let i = 0; i < 2; i++) {
      fireEvent.change(input, { target: { value: "Maria Lima" } });
      fireEvent.click(button);
    }
    const errorMessage = screen.getByRole("alert");

    expect(errorMessage.textContent).toBe(
      "Nomes duplicados não são permitidos!"
    );
  });

  test("error message should disappear after 3 seconds", () => {
    jest.useFakeTimers();

    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const button = screen.getByRole("button");

    for (let i = 0; i < 2; i++) {
      fireEvent.change(input, { target: { value: "Maria Lima" } });
      fireEvent.click(button);
    }

    let errorMessage = screen.queryByRole("alert");
    expect(errorMessage).toBeInTheDocument();

    jest.runAllTimers();

    errorMessage = screen.queryByRole("alert");
    expect(errorMessage).toBeNull();
  });
});
