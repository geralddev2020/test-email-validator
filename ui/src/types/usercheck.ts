export interface UserCheckSucess {
  status: number;
  email: string;
  normalized_email: string;
  domain: string;
  domain_age_in_days: number;
  mx: boolean;
  mx_records: Array<MXRecords>;
  disposable: boolean;
  public_domain: boolean;
  relay_domain: boolean;
  alias: boolean;
  role_account: boolean;
  spam: boolean;
  did_you_mean: string | null;
  blocklisted: boolean;
}

interface MXRecords {
  hostname: string;
  priority: number;
}

export interface UserCheckErrorResponse {
  status: number;
  error: string;
}

export type UserCheckResponse = UserCheckSucess | UserCheckErrorResponse

export type EmailDetails = Pick<UserCheckSucess, "domain" | "mx" | "disposable" | "public_domain" | "relay_domain" | "spam" | "did_you_mean">