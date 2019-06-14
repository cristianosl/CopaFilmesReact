import BaseApi from "./BaseApi";
export default class FilmesApi extends BaseApi {
  listar() {
    return this.jsonRequest
      .get("/filmes")
      .then(response => {
        return response;
      });
  }
}