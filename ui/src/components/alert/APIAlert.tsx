import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function APIAlert() {
  return (
    <div className="pb-4">
      <Alert variant="destructive">
        <AlertTitle>Something went wrong</AlertTitle>
        <AlertDescription>We're having trouble completing your request. Please try later.</AlertDescription>
      </Alert>
    </div>
  );
}
