import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function TypographyH1({ children }: Props) {
  return (
    <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance pt-4">
      {children}
    </h1>
  );
}

export function TypographyH2() {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      The People of the Kingdom
    </h2>
  );
}

export function TypographyH3({ children }: Props) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight py-3">
      {children}
    </h3>
  );
}

export function TypographyP({ children }: Props) {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
}

export function TypographySmall({ children }: Props) {
  return <small className="text-sm leading-none font-medium">{children}</small>;
}
