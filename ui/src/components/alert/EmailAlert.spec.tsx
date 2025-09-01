import EmailAlert from "./EmailAlert";
import { expect, describe, it } from "vitest";
import { render } from "vitest-browser-react";

describe("EmailAlert", () => {
  it("shows valid domain title when not problematic", async () => {
    const { getByText } = render(
      <EmailAlert isProblematic={false} domain="gmail.com" />,
    );
    await expect.element(getByText("Valid Email Domain")).toBeInTheDocument();
    await expect.element(getByText("Domain: gmail.com")).toBeInTheDocument();
  });

  it("shows problematic domain title when problematic", async () => {
    const { getByText } = render(
      <EmailAlert isProblematic={true} domain="spam.com" />,
    );
    await expect
      .element(getByText("Potentially Problematic Email Domain"))
      .toBeInTheDocument();
    await expect.element(getByText("Domain: spam.com")).toBeInTheDocument();
  });

  it("shows did_you_mean when provided and not empty", async () => {
    const { getByText } = render(
      <EmailAlert
        isProblematic={true}
        domain="gmal.com"
        did_you_mean="gmail.com"
      />,
    );
    await expect
      .element(getByText("Did you mean: gmail.com"))
      .toBeInTheDocument();
  });

  it("does not show did_you_mean when null or empty", async () => {
    const { getByText: firstGetByText } = render(
      <EmailAlert isProblematic={false} domain="gmail.com" did_you_mean="" />,
    );
    await expect
      .element(firstGetByText(/Did you mean:/).query())
      .not.toBeInTheDocument();

    const { getByText } = render(
      <EmailAlert
        isProblematic={false}
        domain="gmail.com"
        did_you_mean={null}
      />,
    );
    await expect
      .element(getByText(/Did you mean:/).query())
      .not.toBeInTheDocument();
  });
});
