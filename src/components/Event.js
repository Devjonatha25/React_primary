function Evento({numero}){

function meuEvento(){
  console.log(`opa fui ativado ${numero}`);
}
  return(
    <div>
      <p>clique para disparar um evento:</p>

      <button onClick ={meuEvento}>ativar</button>
    </div>
  )
}

export default Evento;