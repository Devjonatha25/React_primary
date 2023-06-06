function Pessoa({foto,nome,idade,profissao}){
  return <div>
  <img src={foto} alt={nome}/>

  <h2>nome:{nome}</h2>

  <p>idade {idade}</p>

  <p>profissao {profissao}</p>
  </div>
}
export default Pessoa;