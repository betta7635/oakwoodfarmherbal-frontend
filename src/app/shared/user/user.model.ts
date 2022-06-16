export class User {

  constructor (
    public email: string,
    public id: number,
    private expiry: string,
    private value: string,
  ) {}

  public get token() {
    const expiry = new Date(this.expiry);
    if (!this.expiry || new Date() > expiry) {
      return null
    };
    return this.value;
  }
}
