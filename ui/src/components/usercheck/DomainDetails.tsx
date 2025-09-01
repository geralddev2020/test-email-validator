import EmailAlert from "@/components/alert/EmailAlert";
import { TypographyH3 } from "@/components/ui/typography";
import DomainDetailsIcon from "@/components/usercheck/DomainDetailsIcon";
import type { EmailDetails } from "@/types/usercheck";

const DOMAIN_DETAILS_TITLE = `Domain Details`;
const DOMAIN_LABELS = {
  MX: 'MX Records',
  DISPOSABLE: 'Disposable Email',
  PUBLIC: 'Public Domain',
  RELAY_DOMAIN: 'Relay Domain',
  SPAM_DOMAIN: 'Spam Domain'
}

export default function DomainDetails({
  domain,
  mx,
  disposable,
  public_domain,
  relay_domain,
  spam,
  did_you_mean,
}: EmailDetails) {
  const isProblematic = () =>
    !mx || disposable || !Boolean(public_domain) || relay_domain || spam;

  return (
    <div className="pb-4">
      <EmailAlert
        isProblematic={isProblematic()}
        domain={domain}
        did_you_mean={did_you_mean}
      />

      <TypographyH3>{DOMAIN_DETAILS_TITLE}</TypographyH3>

      <DomainDetailsIcon
        label={DOMAIN_LABELS.MX}
        withIcon
        icon={mx ? "positive" : "negative"}
        description={mx ? "Valid" : "Not Valid"}
      />


      <DomainDetailsIcon
        label={DOMAIN_LABELS.DISPOSABLE}
        withIcon
        icon={disposable ? "negative" : "positive"}
        description={disposable ? "Yes" : "No"}
      />

      <DomainDetailsIcon
        label={DOMAIN_LABELS.PUBLIC}
        withIcon={false}
        icon={public_domain ? "negative" : "positive"}
        description={public_domain ? "Yes" : "No"}
      />

      <DomainDetailsIcon
        label={DOMAIN_LABELS.RELAY_DOMAIN}
        withIcon
        icon={relay_domain ? "negative" : "positive"}
        description={relay_domain ? "Yes" : "No"}
      />

      <DomainDetailsIcon
        label={DOMAIN_LABELS.SPAM_DOMAIN}
        withIcon
        icon={relay_domain ? "negative" : "positive"}
        description={relay_domain ? "Yes" : "No"}
      />
    </div>
  );
}
