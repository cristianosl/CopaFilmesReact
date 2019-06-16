import BaseApi from "./BaseApi";
import Filme from "../models/Filme";

export default class FilmesApi extends BaseApi {
  listar() {
    return this.jsonRequest
      .get("/filmes")
      .then(response => {
        let filmes = response.data.map(filmeObj => {
          return new Filme(filmeObj.id, filmeObj.titulo, filmeObj.ano, filmeObj.nota)
        });
        return filmes;
      });
  }

  gerarCampeonato(ids){
    return this.jsonRequest
      .post("/filmes", ids)
      .then(response => {
        let filmes = response.data.map(filmeObj => {
          return new Filme(filmeObj.id, filmeObj.titulo, filmeObj.ano, filmeObj.nota)
        });
        return filmes;
      });
  }
}