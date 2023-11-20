import { IAuth } from 'src/app/shared/models';

class AuthMock {
  public mock: IAuth;

  constructor() {
    this.mock = {
      userId: '2AC384CA-BA42-4550-A008-1CE0D828E04E',
    };
  }
}

export const authmock = new AuthMock();
