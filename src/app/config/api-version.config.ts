export class ApiVersionConfig {
  readonly V1: string;

  constructor() {
    this.V1 = '1.0';
  }
}

const config = new ApiVersionConfig();

export const API_VERSION_CONFIG = config;
