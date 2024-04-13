import { Link } from "react-router-dom";

function TarefasFatec() {
    return (
      <div>
        
            <p>Lista de Tarefas:
                <ul>
                <li>Criar um projeto em React com Typescript</li>
                <li>Criar uma página de formulário</li>
                <li>Criar uma página de tarefas</li>
                <li>Criar uma página de sobre</li>            
         </ul>
            
            </p>
        <br />
        <Link to="/">Ir para a página Inicial</Link>
        <br />
        <Link to="/FormFatec">Ir para a página de preenchimento de formulário</Link>
        <br />
        <Link to="/sobre">Ir para a página Sobre o Projeto</Link>
      </div>
    );
  }
  export default TarefasFatec;