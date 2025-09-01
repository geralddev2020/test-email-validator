import APIAlert from "@/components/alert/APIAlert";
import ValidateEmailButton from "@/components/button/ValidateEmailButton";
import EmailInput from "@/components/input/EmailInput";
import DomainDetails from "@/components/usercheck/DomainDetails";
import { useEmailCheck } from "@/components/usercheck/useCheckForm";

export default function UserCheckForm() {
  const { handleEmailValidate, isInvalid, isLoading, emailDetails, apiError } =
    useEmailCheck();

  return (
    <form onSubmit={handleEmailValidate}>
      <EmailInput isInvalid={isInvalid} />

      {apiError ? <APIAlert /> : <></>}

      <DomainDetails
        domain={String(emailDetails?.domain ? emailDetails?.domain : "")}
        mx={Boolean(emailDetails?.mx)}
        disposable={Boolean(emailDetails?.disposable)}
        public_domain={Boolean(emailDetails?.public_domain)}
        relay_domain={Boolean(emailDetails?.relay_domain)}
        spam={Boolean(emailDetails?.spam)}
        did_you_mean={
          emailDetails?.did_you_mean ? emailDetails.did_you_mean : null
        }
      />

      <ValidateEmailButton buttonName="Validate Email" isLoading={isLoading} />
    </form>
  );
}
