class Filme {
  constructor(id, titulo, ano, nota) {
    this._id = id;
    this._titulo = titulo;
    this._ano = ano;
    this._nota = nota;
  }
  get id() { return this._id; }
  get titulo() { return this._titulo; }
  get ano() { return this._ano; }
  get nota() { return this._nota; }
}
export default Filme;