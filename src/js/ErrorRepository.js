export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [500, 'Internal Server Error'],
      [501, 'Not Implemented'],
      [504, 'Gateway Timeout'],
      [505, 'HTTP Version Not Supported'],
    ]);
  }

  translate(code) {
    if (!this.errors.has(code)) {
      return 'Unknown error';
    }
    return this.errors.get(code);
  }
}
