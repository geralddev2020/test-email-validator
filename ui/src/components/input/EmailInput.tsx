import { Input as UIInput } from "@/components/ui/input";
import { Label as UIEmail } from "@/components/ui/label";
import { TypographySmall } from "@/components/ui/typography";

interface EmailInputProps {
  isInvalid: boolean;
}

export default function EmailInput({ isInvalid }: EmailInputProps) {
  return (
    <div className="pb-4">
      <UIEmail htmlFor="email" className="pb-2">
        Email Address
      </UIEmail>
      <UIInput
        // We can use this one, but we will temporarily comment this thing out
        // type="email"
        id="email"
        placeholder="Email Address"
        name="email"
        className={
          isInvalid
            ? "border-red-500 focus:border-red-600 ring-2 ring-red-200"
            : ""
        }
        aria-invalid={isInvalid}
      />
      <TypographySmall>
        {isInvalid ? <span className="text-destructive/90">Not valid email address</span> : ""}
      </TypographySmall>
    </div>
  );
}
