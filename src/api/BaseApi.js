import axios from "axios";

export default class BaseApi {
  constructor() {
    this.jsonRequest = axios.create({
      baseURL: "https://copadosfilmes.azurewebsites.net/api",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
  }
}