export interface HttpClient {
  get<T>(url: string, params: object): Promise<T>;
  post(url: string, body: object): Promise<void>;
}
