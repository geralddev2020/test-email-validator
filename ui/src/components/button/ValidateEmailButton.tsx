import { Button as UIButton } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";

interface Props {
  buttonName: string;
  isLoading: boolean;
}

export default function ValidateEmailButton({ buttonName, isLoading }: Props) {
  return (
    <UIButton type="submit" disabled={isLoading} className="w-full">
      {isLoading ? <Loader2Icon className="animate-spin" /> : <></>}
      {buttonName}
    </UIButton>
  );
}
