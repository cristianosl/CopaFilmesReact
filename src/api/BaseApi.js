import axios from "axios";

export default class BaseApi {
  constructor() {
    this.jsonRequest = axios.create({
      baseURL: "https://localhost:44380/api",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
  }
}