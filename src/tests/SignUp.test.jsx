import { fireEvent, render, screen } from "@testing-library/react";
import { SignUp } from "../pages";
import { MemoryRouter } from "react-router";
import { expect } from "vitest";
import { User } from "../utils/UserClass";
import { act } from "react";

// test using vitest to make sure my sign up form works
describe("SignUp Form Validation", () => {
  // setup is a reusable test environment with all form inputs
  const setup = () => {
    render(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>
    );

    // getting all the form elements by their text
    const nameInput = screen.getByTestId("name");
    const emailInput = screen.getByTestId("email");
    const passwordInput = screen.getByTestId("password");
    const confirmPasswordInput = screen.getByTestId("confirmPassword");
    const submitButton = screen.getByText("Submit");

    // returning an object containing all necessary elements
    return {
      nameInput,
      emailInput,
      passwordInput,
      confirmPasswordInput,
      submitButton,
    };
  };

  it("should invalidate empty form submission", async () => {
    // destructuring the returned object from setup to receive the submit button
    const { submitButton } = setup();

    // clicking the button
    fireEvent.click(submitButton);

    /* Async/Await is used here because of the way "findByText" behaves. While 
       with "getByText", the operation is synchronous and returns a value immediately,
       "findByText" does not behave the same way, and will repeatedly check for the text
       (if given a timeout).
       To me, await is preferable over supplying a timeout though, because it will return
       as soon as it receives a value, instead of waiting for a fixed timeout */

    expect(
      await screen.findByText("First name is required")
    ).toBeInTheDocument();
    expect(await screen.findByText("Email is required")).toBeInTheDocument();
    expect(await screen.findByText("Password is required")).toBeInTheDocument();
    expect(
      await screen.findByText("Please confirm your password")
    ).toBeInTheDocument();
  });

  it("should only allow letters in name", async () => {
    const { nameInput, submitButton } = setup();

    fireEvent.change(nameInput, { target: { value: "Max123" } });
    fireEvent.click(submitButton);

    expect(
      await screen.findByText("Name can only include letters")
    ).toBeInTheDocument();
  });

  it("shouldn't allow names more than 20 chars", async () => {
    const { nameInput, submitButton } = setup();

    fireEvent.change(nameInput, {
      target: { value: "ThisIsANameThatIsLongerThanTwentyCharacters" },
    });
    fireEvent.click(submitButton);

    expect(
      await screen.findByText("Name cannot exceed 20 characters")
    ).toBeInTheDocument();
  });

  it("should validate email format", async () => {
    const { emailInput, submitButton } = setup();

    fireEvent.change(emailInput, { target: { value: "invalid-email" } });
    fireEvent.click(submitButton);

    expect(
      await screen.findByText("Please enter a valid email address")
    ).toBeInTheDocument();
  });

  it("should validate password requirements", async () => {
    const { passwordInput, submitButton } = setup();

    fireEvent.change(passwordInput, { target: { value: "weak" } });
    fireEvent.click(submitButton);

    expect(
      await screen.findByText("Password must be at least 8 characters")
    ).toBeInTheDocument();

    fireEvent.change(passwordInput, { target: { value: "weakweak" } });
    fireEvent.click(submitButton);

    expect(
      await screen.findByText("Password must contain at least one number")
    ).toBeInTheDocument();

    fireEvent.change(passwordInput, { target: { value: "weakweak1" } });
    fireEvent.click(submitButton);

    expect(
      await screen.findByText(
        "Password must contain at least one capital letter"
      )
    ).toBeInTheDocument();

    fireEvent.change(passwordInput, { target: { value: "Weakweak1" } });
    fireEvent.click(submitButton);

    expect(
      await screen.findByText(
        "Password must contain at least one special character"
      )
    ).toBeInTheDocument();
  });

  it("should validate password confirmation match", async () => {
    const { passwordInput, confirmPasswordInput, submitButton } = setup();

    fireEvent.change(passwordInput, { target: { value: "ValidP@ssword1" } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: "DifferentP@ssword1" },
    });
    fireEvent.click(submitButton);

    expect(
      await screen.findByText("Passwords do not match")
    ).toBeInTheDocument();
  });

  it("should add a user to localStorage when filled out correctly", async () => {
    const {
      nameInput,
      emailInput,
      passwordInput,
      confirmPasswordInput,
      submitButton,
    } = setup();

    // clearing localStorage in the test suite to test accurately
    localStorage.clear();

    // act is used here as the test wasn't working properly without it
    // it simulates react properly
    await act(() => {
      // filling out the form successfully
      fireEvent.change(nameInput, { target: { value: "Name" } });
      fireEvent.change(emailInput, { target: { value: "email@email.com" } });
      fireEvent.change(passwordInput, { target: { value: "ValidP@ssword1" } });
      fireEvent.change(confirmPasswordInput, {
        target: { value: "ValidP@ssword1" },
      });
      fireEvent.click(submitButton);
    });

    const users = JSON.parse(localStorage.getItem("users"));

    // testing that there is one object in the array
    expect(users).toHaveLength(1);
    expect(users[0]).toHaveProperty("name", "Name");
    expect(users[0]).toHaveProperty("email", "email@email.com");
  });

  it("should not allow a user to sign up with an already-used email address", async () => {
    const {
      nameInput,
      emailInput,
      passwordInput,
      confirmPasswordInput,
      submitButton,
    } = setup();

    // filling out the form successfully
    fireEvent.change(nameInput, { target: { value: "Name" } });
    fireEvent.change(emailInput, { target: { value: "email@email.com" } });
    fireEvent.change(passwordInput, { target: { value: "ValidP@ssword1" } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: "ValidP@ssword1" },
    });
    fireEvent.click(submitButton);

    // entering the same email again
    fireEvent.change(nameInput, { target: { value: "OtherName" } });
    fireEvent.change(emailInput, { target: { value: "email@email.com" } });
    fireEvent.change(passwordInput, { target: { value: "OtherP@ssword1" } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: "OtherP@ssword1" },
    });
    fireEvent.click(submitButton);

    expect(
      await screen.findByText("There is already an account with this email")
    ).toBeInTheDocument();
  });
});
