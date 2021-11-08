import '../home/styles.css';
import './admissao.css';
import logo_branca from '../../assets/logo-branca.png'; 
import { Link } from 'react-router-dom';
import criançasadmissão from '../../assets/criancas-admissao.png';
import imgtitulo from '../../assets/div-titulo.png';
import imgtitulo2 from '../../assets/div-titulo2.png';

const adimissão = () => {
    return (
        <div id='admissão'>
            <header>
                
                <Link to="/"><img class="topicos" id="logogerminare" src={logo_branca} alt="logo germinare"/></Link>

                <ul id="listatopicos">
                    
                    <Link to="/adimissão">
                        <li class="topicos">Admissão</li>
                    </Link>
                    <Link>
                        <li class="topicos">Academias</li>
                    </Link>
                    <Link>
                        <li class="topicos">Nossa Cultura</li>
                    </Link>
                    <Link>
                        <li class="topicos">Novidades</li>
                    </Link>
                    <Link to='' id="portal_aluno"style={{width: '200px'}}>
                        <li>Portal do aluno</li>
                    </Link>
                </ul>

            </header>



        <div id='miniHeader'>
            <img id="tituloimg" src={imgtitulo}/>
            <h1 id="titulo">Processo de Adimissão</h1>
            <img id="tituloimg2" src={imgtitulo2}/>
        </div>
        <div>
          <img className="criancasAdimissao" src={criançasadmissão}/>
          <p>A lista de convocados para a segunda etapa do 
             <spam class="toBold">Processo de Admissão está disponível!</spam></p>
        </div>
        <button>Veja os resultados</button>
    </div>
    );
};

export default adimissão;