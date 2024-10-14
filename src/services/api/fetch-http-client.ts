import { AuthCookies } from "@/app/lib/auth-cookies";
import { HttpClient } from "./http-client";

export class FetchHttpClient implements HttpClient {
  private baseUrl: string;
  private token?: string;

  constructor() {
    const authCookies = new AuthCookies();
    this.token = authCookies.getToken();
    this.baseUrl = "http://localhost:3000/api/";
  }

  async post(url: string, body: object): Promise<void> {
    return new Promise((resolve, reject) => {
      fetch(`${this.baseUrl}${url}`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: { Authorization: `Bearer ${this.token}` },
      }).then(async (response) => {
        if (!response.ok) {
          reject("Something went wrong");
        }
        resolve();
      });
    });
  }

  async get<T>(url: string, params?: object): Promise<T> {
    return new Promise((resolve, reject) => {
      fetch(`${this.baseUrl}${url}`, {
        method: "GET",
        body: JSON.stringify(params),
        next: { tags: ["get-transactions"] },
        headers: { Authorization: `Bearer ${this.token}` },
      })
        .then(async (response) => {
          if (response.ok) {
            const data = await response.json();
            resolve(data);
          } else {
            reject("Something went wrong");
          }
        })
        .catch((err) => reject(err));
    });
  }
}
