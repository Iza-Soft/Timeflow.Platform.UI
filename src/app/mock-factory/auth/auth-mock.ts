import { IAuth } from 'src/app/shared/models';

class AuthMock {
  public mock: IAuth;

  constructor() {
    this.mock = {
      userId: '99A99EA5-2E81-463E-9D9E-2E0D8C4588F8',
    };
  }
}

export const authmock = new AuthMock();
