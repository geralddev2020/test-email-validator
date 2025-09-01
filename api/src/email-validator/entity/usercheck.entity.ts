export class UserCheckSucess {
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

class MXRecords {
  hostname: string;
  priority: number;
}
