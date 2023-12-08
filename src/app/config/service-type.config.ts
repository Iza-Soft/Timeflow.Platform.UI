class ServiceTypeConfig {
  readonly BILLABLE: string;
  readonly NON_BILLABLE: string;

  constructor() {
    this.BILLABLE = 'Billable';
    this.NON_BILLABLE = 'Non-billable';
  }
}

const config = new ServiceTypeConfig();

export const SERVICE_TYPE_CONFIG = config;
