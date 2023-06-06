import{useState} from 'react'

function Form(){
  function cadastrarCliente(e){
    e.preventDefault()
    console.log(`nome:${name} senha: ${password}`)
  }
  const [name,setName]=useState()
  const [password,setPassword]=useState()

  return(
    <form onSubmit={cadastrarCliente}>
      <div>
        <label htmlFor='name'>nome:</label>
        <input type='text' id='name' name='name' placeholder='seu nome' 
        onChange={(e) => setName(e.target.value)}  />
      </div>
      <div>
        <label htmlFor='Password'>Senha:</label>
        <input type='Password' id='password' name='password' placeholder='sua senha' 
        onChange={(e) => setPassword(e.target.value)}  />
      </div>

      <input type='Submit' value= 'cadastrar' />

    </form>
  )
}
export default Form