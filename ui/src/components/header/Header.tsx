import { TypographyH1 } from "@/components/ui/typography";
import { ShieldCheck } from "lucide-react";

export default function Header() {
  return (
    <div className="text-center pb-8">
      <ShieldCheck className="mx-auto" />
      <TypographyH1>UserCheck</TypographyH1>
    </div>
  );
}
