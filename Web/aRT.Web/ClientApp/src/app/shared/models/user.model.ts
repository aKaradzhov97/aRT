export class User {
  constructor(public id: string,
              public username: string,
              public password?: string,
              public repeatPassword?: string,
              public phone?: string,
              public email?: string) {
  }
}
