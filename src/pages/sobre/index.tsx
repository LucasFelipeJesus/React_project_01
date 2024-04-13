import { Link } from "react-router-dom";

function Sobre() {
    return (
      <div>
        
          <p>Autores do Projeto:
            <hr />
            <br />
            Lucas Felipe de jesus
            <hr />
            Luis Gaspari
            <hr />
            Alunos do 4º semestre de ADS da Fatec de Indaiatuba/SP
            <hr />
           </p>
        <br />
        <Link to="/">Ir para a página Inicial</Link>
      </div>
    );
  }
  export default Sobre;