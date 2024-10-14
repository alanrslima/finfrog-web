export class ServiceError extends Error {
  data: { errors: { message: string }[] };

  constructor(message: string, data: { errors: { message: string }[] }) {
    super(message);
    this.data = data;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
