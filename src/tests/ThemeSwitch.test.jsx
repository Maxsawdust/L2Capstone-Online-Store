import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeSwitch } from "../components";
import { Provider } from "react-redux";
import { store } from "../store/store.jsx";
import { expect } from "vitest";

describe("ThemeSwitch", () => {
  // rendering the switch before each test
  beforeEach(() => {
    render(
      <Provider store={store}>
        <ThemeSwitch />
      </Provider>
    );
  });

  // checking that the input is checked when checked
  it("should register true when checked", () => {
    const checkbox = screen.getByRole("theme-switch");

    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });

  it("should change theme to 'dark' when checked", () => {
    const checkbox = screen.getByRole("theme-switch");

    // fire click event to check the box
    fireEvent.click(checkbox);

    expect(store.getState().theme.theme).toBe("dark");
  });

  it("should change theme to 'light' when unchecked", () => {
    const checkbox = screen.getByRole("theme-switch");

    // need to fire this twice because the state is remaining in the store between tests
    fireEvent.click(checkbox);
    fireEvent.click(checkbox);

    expect(store.getState().theme.theme).toBe("light");
  });
});
