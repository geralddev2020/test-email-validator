import { Check, TriangleAlert } from "lucide-react";

type CheckIcon = "positive" | "negative";

interface Props {
  label: string;
  withIcon?: boolean;
  icon: CheckIcon;
  description: string;
}

export default function DomainDetailsIcon({
  label,
  withIcon = false,
  icon,
  description,
}: Props) {
  return (
    <div className="grid grid-cols-2 gap-x-4 pb-2">
      <div>{label}</div>
      <div className="flex items-center gap-2">
        {withIcon ? (
          <span>
            {icon === "positive" && <Check />}
            {icon === "negative" && <TriangleAlert />}
          </span>
        ) : (
          <></>
        )}
        <span>{description}</span>
      </div>
    </div>
  );
}
