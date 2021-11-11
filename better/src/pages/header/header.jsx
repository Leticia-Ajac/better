import '../home/styles.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo_branca from '../../assets/logo-branca.png'


const header = () => {
    return(
        <div id='page-home'>
            <header>
                <Link to ='/'><img class="topicos" id="logogerminare" src={logo_branca} alt="logo germinare"/></Link>
                <ul id="listatopicos">
                    
                    <Link to="/admissão">
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
        </div>
);
};


export default header;