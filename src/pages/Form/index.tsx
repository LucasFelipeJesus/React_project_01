
import { Link } from "react-router-dom";
import FormFatec from "../../components/Form-Fatec";

function FormFatecPage() {
        return (       
            <>
                <FormFatec    
                     />  
                     <hr />
                     <div>
                     <Link to="/">Voltar para Página Inicial</Link>
                     <br />
                     <Link to="/sobre">Ir para a página Sobre</Link>
                     </div>
            </>
        );
}
export default FormFatecPage;
