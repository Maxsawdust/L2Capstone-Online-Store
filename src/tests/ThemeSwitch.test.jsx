import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeSwitch } from "../components";
import { Provider } from "react-redux";
import { store } from "../store/store.jsx";
import { expect, it } from "vitest";

describe("ThemeSwitch", () => {
  // rendering the switch before each test
  beforeEach(() => {
    render(
      <Provider store={store}>
        <ThemeSwitch />
      </Provider>
    );
  });

  it("should change theme to 'dark' when checked", () => {
    const checkbox = screen.getByRole("theme-switch");

    // fire click event to check the box
    fireEvent.click(checkbox);

    expect(store.getState().theme.theme).toBe("dark");
  });

  it("should change theme to 'light' when unchecked", () => {
    const checkbox = screen.getByRole("theme-switch");

    // fired once here because the state is "dark" from the last test
    fireEvent.click(checkbox);

    expect(store.getState().theme.theme).toBe("light");
  });
});
