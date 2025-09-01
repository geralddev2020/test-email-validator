import ValidateEmailButton from "./ValidateEmailButton";
import { expect, describe, it } from "vitest";
import { render } from "vitest-browser-react";

describe("ValidateEmailButton", () => {
  it("renders button with provided name", async () => {
    const { getByText } = render(
      <ValidateEmailButton buttonName="Validate Email" isLoading={false} />
    );
    await expect.element(getByText("Validate Email")).toBeInTheDocument();
  });

  it("disables button and shows loader when loading", async () => {
    const { getByRole, container } = render(
      <ValidateEmailButton buttonName="Validating..." isLoading={true} />
    );
    const button = getByRole("button");
    await expect.element(button).toBeDisabled();
    // Check for Loader2Icon presence
    const loader = container.querySelector(".animate-spin");
    expect(loader).not.toBeNull();
  });

  it("does not show loader when not loading", async () => {
    const { container } = render(
      <ValidateEmailButton buttonName="Validate Email" isLoading={false} />
    );
    const loader = container.querySelector(".animate-spin");
    expect(loader).toBeNull();
  });
});