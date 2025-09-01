import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface Props {
  isProblematic: boolean;
  domain?: string;
  did_you_mean?: string | null;
}

export default function EmailAlert({
  isProblematic,
  domain = "",
  did_you_mean = "",
}: Props) {
  return (
    <div className="pb-4">
      {domain ? (
        <Alert variant={isProblematic ? "destructive" : "default"}>
          <AlertTitle>
            {isProblematic
              ? "Potentially Problematic Email Domain"
              : "Valid Email Domain"}
          </AlertTitle>
          <AlertDescription>
            {<p>Domain: {domain}</p>}
            {did_you_mean && did_you_mean.trim() !== "" ? (
              <p>{`Did you mean: ${did_you_mean}`}</p>
            ) : null}
          </AlertDescription>
        </Alert>
      ) : (
        <></>
      )}
    </div>
  );
}
