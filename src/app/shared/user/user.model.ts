export class User {

  constructor (
    public email: string,
    public id: number,
    public expiry: string,
    public token: string,
  ) {}

}
