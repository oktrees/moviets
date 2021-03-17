import axios, { AxiosInstance, AxiosResponse } from "axios";

export interface Error {
  code: number;
  field: string;
  message: string;
  status: number;
}

class Client {
  private axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: "https://api.themoviedb.org/3/",
      timeout: 5000,
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        api_key: "c470e0476d281404a5ee781d4da74864",
        language: "ko-KR",
      },
    });
  }
  get(path: string, payload = null as any) {
    return this.axios
      .get(path, payload)
      .then((response: AxiosResponse) => response);
  }

  post(path: string, payload: any) {
    return this.axios
      .post(path, payload)
      .then((response: AxiosResponse) => response);
  }

  put(path: string, payload: any) {
    return this.axios
      .put(path, payload)
      .then((result: AxiosResponse) => result);
  }

  delete(path: string, payload = null as any) {
    return this.axios
      .delete(path, payload)
      .then((result: AxiosResponse) => result);
  }
}

const client = new Client();

export default client;
