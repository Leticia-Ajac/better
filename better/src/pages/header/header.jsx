import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo_branca from '../../assets/logo-branca.png'
import { TiThMenu } from 'react-icons/ti';
import './header.css';
import { AiFillContacts } from 'react-icons/ai'

const header = () => {
    return (
        <div id='page-home'>
            <header>
                <Link to='/'><img id="logogerminare" src={logo_branca} alt="logo germinare" /></Link>
                <ul id="listatopicos">
                    <div>
                        <div className='burger' id='hamburguer'>
                            <label for='icone'>
                                <p class='icons'>
                                    <TiThMenu color="white" />
                                </p>
                            </label>
                        </div>
                    </div>
                    <Link to="/admissão" onClick={() => { if (document.readyState === 'complete') { window.scroll(0, 0) } }}>
                        <li class="topicos">Admissão</li>
                    </Link>
                    <Link to='/academias'>
                        <li class="topicos">Academias</li>
                    </Link>
                    <Link>
                        <li class="topicos">Nossa Cultura</li>
                    </Link>
                    <Link>
                        <li class="topicos">Novidades</li>
                    </Link>
                    <div  class='topicos' id="portal_aluno" style={{ width: '200px' }}>
                        <li>Portal do aluno</li>
                        <div class='nicks'>
                            <a href='https://portal.sophia.com.br/SophiA_44/Acesso.aspx?escola=5535' target='_blank'>Sophia Escolar</a>
                            <a href='https://hcm19.sapsf.com/sf/liveprofile#/login' target='_blank'>AVV</a>
                            <a href='https://dliportal.zbra.com.br/Login.aspx?key=Germinare' target='_blank'>Minha Biblioteca</a>
                            <a href='https://app.arvore.com.br/login' target='_blank'>Arvore de Livros</a>
                        </div>
                        </div>                    
                </ul>
            </header>
            <input type="checkbox" id='icone' className='trigger-input' />
            <div className='nome'>
                <Link to='/admissao' onClick={() => { if (document.readyState === 'complete') { window.scroll(0, 0) } }} >
                    <p>Admissão</p>
                </Link>
                <Link to='/academias'  onClick={() => { if (document.readyState === 'complete') { window.scroll(0, 0) } }} >
                    <p>Academias</p>
                </Link>
                <Link to=''>
                    <p>Nossa Cultura</p>
                </Link>
                <Link to=''>
                    <p>Novidades</p>
                </Link>
                <Link to=''>
                    <p>Portal do Aluno</p>
                </Link>
            </div>
        </div>
    );
};

export default header;
