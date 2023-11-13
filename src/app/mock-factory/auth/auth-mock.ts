import { IAuth } from 'src/app/shared/models';

class AuthMock {
  public mock: IAuth;

  constructor() {
    this.mock = {
      userId: '6146F1AD-1717-46FA-90BA-90B59901296D',
    };
  }
}

export const authmock = new AuthMock();
