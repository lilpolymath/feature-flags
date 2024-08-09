import { render, screen } from "@testing-library/react";

import Login from "./components/login";
import FeatureFlagProvider from "./context/featureFlagContext";

jest.mock("../src/config", () => ({
  flags: {
    newLoginPage: true,
  },
}));

describe("App with feature flags", () => {
  it("renders new login page when flag is enabled", () => {
    render(
      <FeatureFlagProvider>
        <Login />
      </FeatureFlagProvider>
    );
    const newLoginPage = screen.getByTestId("new-login-page");
    expect(newLoginPage).toBeInTheDocument();
  });

  it("renders old login page when flag is disabled", () => {
    const config = require("../src/config");
    config.flags.newLoginPage = false;

    render(
      <FeatureFlagProvider>
        <Login />
      </FeatureFlagProvider>
    );

    const oldLoginPage = screen.getByTestId("old-login-page");

    expect(oldLoginPage).toBeInTheDocument();
  });
});
