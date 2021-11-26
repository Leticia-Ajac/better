import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo_branca from '../../assets/logo-branca.png'
import logo_germinare_em_pe from '../../assets/Brasão_Germinare_Branco-1 2.png';
import { TiThMenu } from 'react-icons/ti';
import './header.css';

const header = () => {
    return (
        <div id='page-home'>
            <header>
                <Link to='/'><img id="logogerminare" src={logo_branca} alt="logo germinare" /></Link>
                <ul id="listatopicos">
                    <Link to="/admissão" onClick={() => { if (document.readyState === 'complete') { window.scroll(0, 0) } }}>
                        <li class="topicos">Admissão</li>
                    </Link>
                    <Link to='/academias'  onClick={() => { if (document.readyState === 'complete') { window.scroll(0, 0) } }}>
                        <li class="topicos">Academias</li>
                    </Link>
                    <Link to='/qulture'  onClick={() => { if (document.readyState === 'complete') { window.scroll(0, 0) } }}>
                        <li class="topicos">Nossa Cultura</li>
                    </Link>
                    <Link to='/novidades'>
                        <li class="topicos"  onClick={() => { if (document.readyState === 'complete') { window.scroll(0, 0) } }}>Novidades</li>
                    </Link>
                    <div  class='topicos' id="portal_aluno" style={{ width: '200px' }}>
                        <li>Portal do aluno</li>
                        <div class='nicks'>
                            <a href='https://portal.sophia.com.br/SophiA_44/Acesso.aspx?escola=5535' target='_blank'>Sophia Escolar</a>
                            <a href='https://hcm19.sapsf.com/sf/liveprofile#/login' target='_blank'>AVV</a>
                            <a href='https://dliportal.zbra.com.br/Login.aspx?key=Germinare' target='_blank'>Minha Biblioteca</a>
                            <a href='https://app.arvore.com.br/login' target='_blank'>Árvore de Livros</a>
                        </div>
                        </div>                    
                </ul>

                <Link to='/'><img id="logogerminare2" src={logo_germinare_em_pe} alt="logo germinare" /></Link>
                <div className='burger-items'> 
                <div className='toggle' tabindex="0" >
                        <span></span>
                        <span></span>
                        <span></span>
                </div>
                <div className='burger-original-items' id='second-burger'>
                    <a href='https://portal.sophia.com.br/SophiA_44/Acesso.aspx?escola=5535' target='_blank'>
                        <p >Sophia Escolar</p>
                    </a>
                    <a href='https://hcm19.sapsf.com/sf/liveprofile#/login' target='_blank'>
                        <p >AVV</p>
                    </a>
                    <a  id='margin-nerfada'href='https://dliportal.zbra.com.br/Login.aspx?key=Germinare' target='_blank'>
                        <p>Minha Biblioteca</p>
                    </a>
                    <a href='https://app.arvore.com.br/login' target='_blank'>
                        <p>Árvore de Livros</p>
                    </a>
                </div>
                <div className='burger-original-items' id='first-burger'>
             
                <Link to='/admissão' onClick={() => { if (document.readyState === 'complete') { window.scroll(0, 0) } }} >
                    <p>Admissão</p>
                </Link>
                <Link to='/academias'  onClick={() => { if (document.readyState === 'complete') { window.scroll(0, 0) } }} >
                    <p>Academias</p>
                </Link>
                <Link to="/qulture" onClick={() => { if (document.readyState === 'complete') { window.scroll(0, 0) } }}>
                    <p>Nossa Cultura</p>
                </Link>
                <Link to='/novidades'>
                    <p>Novidades</p>
                </Link>
                </div>
                </div>            

            </header>

        </div>
    );
};

export default header;

