"use client";

import { useActionState } from "react";
import { registerUser, type RegisterState } from "../actions/users";

const initialState: RegisterState = {};

const RegisterForm = () => {
  const [state, formAction, isPending] = useActionState(
    registerUser,
    initialState,
  );

  return (
    <form action={formAction}>
      {state.error && (
        <p role="alert" aria-live="polite">
          {state.error}
        </p>
      )}
      <div>
        <label>
          Username <input type="text" name="username" required minLength={4} />
        </label>
      </div>
      <div>
        <label>
          Name <input type="text" name="name" required />
        </label>
      </div>

      <div>
        <label>
          Password{" "}
          <input type="password" name="password" required minLength={4} />
        </label>
      </div>

      <div>
        <label>
          Confirm Password{" "}
          <input type="password" name="confirmPassword" required />
        </label>
      </div>
      <button type="submit" disabled={isPending}>
        {isPending ? "Registering..." : "Register"}
      </button>
    </form>
  );
};

export default RegisterForm;
