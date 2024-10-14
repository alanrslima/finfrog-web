import { Cookies } from "./cookies";

export class AuthCookies {
  private cookies: Cookies;

  constructor() {
    this.cookies = new Cookies();
  }

  setToken(token: string) {
    this.cookies.set("FROG_TOKEN", token, 2);
  }

  getToken() {
    return this.cookies.get("FROG_TOKEN");
  }
}
