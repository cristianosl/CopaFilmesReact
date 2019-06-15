import axios from "axios";

export default class BaseApi {
  constructor() {
    this.jsonRequest = axios.create({
      baseURL: "http://localhost:62956/api",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
  }
}