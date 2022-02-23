export class Logger {
  constructor() {}
  public info(value: string): void {
    console.log(new Date() + "%cinfo=>" + value, "color:grey");
  }
  public debug(value: string): void {
    console.log(new Date() + "%cdebug=>" + value, "color:yellow");
  }
  public error(value: string): void {
    console.log(new Date() + "%cerror=>" + value, "color:red");
  }
}
