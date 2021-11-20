import { RequestService } from "../types/requestService";
import axios, { AxiosInstance } from "axios";

export class RequestServiceReal implements RequestService {
  private api: AxiosInstance;
  private accessToken = "";

  constructor() {
    this.api = axios.create({
      baseURL: "https://asia-northeast3-sopkathon-09.cloudfunctions.net/api",
    });
  }

  async setAccessToken(token: string): Promise<void> {
    this.accessToken = token;
    this.api.defaults.headers["Authorization"] = `${token}`;
  }
  async getAccessToken(): Promise<string> {
    return this.accessToken;
  }
  async call<T, K>(method: "GET" | "POST", path: string, data?: T): Promise<K> {
    if (method === "GET") {
      const res = await this.api.get<K>(path, {
        params: data,
      });
      return res.data;
    } else if (method === "POST") {
      const res = await this.api.post<K>(path, {
        ...data,
      });
      return res.data;
    } else {
      throw new Error("INVALID METHOD");
    }
  }
}
