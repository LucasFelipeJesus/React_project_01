import { Link } from "react-router-dom";


function Home() {
  return (
    <div>
      <h1>Pagina Inicial</h1>
      <hr />
      <p>Seja bem-vindo à página Inicial!</p> 
      <p>É com grande entusiasmo que apresentamos o projeto de desenvolvimento de um software inovador: o Check List Guiado para a Fatec. 
        <br />
        Este projeto é uma iniciativa que visa otimizar e simplificar os processos de verificação e controle dentro da instituição, oferecendo uma solução digital robusta e intuitiva.</p>      
      <h1>Menu disponível:</h1>
      <hr />
      <Link to="/FormFatec">Ir para a página de preenchimento de formulário</Link>
      <br />
      <Link to="/tarefas">Ir para a página de Tarefas</Link>
      <br />
      <Link to="/sobre">Ir para a página Sobre o Projeto</Link>
    </div>
    
  );
}
export default Home;