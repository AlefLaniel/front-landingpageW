
import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
 
function App() {
  const [campos, setCampos] = useState({
    nome: '',
    sobrenome: '',
    email: '',
});

function handleInputChange(event){
    if(event.target.name === "anexo")
      campos[event.target.name] = event.target.files[0];
    else
      campos[event.target.name] = event.target.value;
    setCampos(campos);
}

function send(){
  const data = campos;
  if(campos){
    axios.post('https://api-enviar-email.herokuapp.com/send', data)
    .then(response => { console.log(response.data); })
  }else{
    alert("Email não foi enviado");
  }

}

function cadastrar(){
  const data = campos;
  if(campos){
    axios.post('https://api-dadosladingpagew.herokuapp.com/cadastrar', data)
    .then(response => { console.log(response.data); })
  }else{
    alert("Dados não foram Cadastrados no banco");
  }

}

function handleFormSubmit(event){ 
  event.preventDefault(); 
  console.log(campos); 
  send(campos);
  cadastrar(campos);
  alert("Dados enviados");
}

  return (
    <div className="container">
      <form onSubmit={handleFormSubmit}>
 
        <label htmlFor="nome">Nome</label>
        <input type="text" id="nome" name="nome" placeholder="Nome da pessoa.." 
          onChange={handleInputChange}
        />

        <label htmlFor="nome">Sobrenome</label>
        <input type="text" id="sobrenome" name="sobrenome" placeholder="Nome da pessoa.." 
          onChange={handleInputChange}
        />

        <label htmlFor="email">E-mail</label>
        <input type="text" id="email" name="email" placeholder="E-mail de destino.."
          onChange={handleInputChange}
        />
 
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}
 
export default App;