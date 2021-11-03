import './styles.css';
import { Link } from 'react-router-dom';

import logo_branca from '../../assets/logo-branca.png'

import linha from '../../assets/linha.png';
import linha2 from '../../assets/linha2.png';
import mais2 from '../../assets/mais2.png';
import mais from '../../assets/mais.png';
import traço from '../../assets/traço.png';
import odete from '../../assets/odete.png';
import traço_canto from '../../assets/traço-canto.png';
import div1 from '../../assets/div-titulo.png';
import div2 from '../../assets/div-titulo2.png';

const Home = () => {
    return(
        <div id='page-home'>
            <header>
                <img class="topicos" id="logogerminare" src={logo_branca} alt="logo germinare"/>

                <ul id="listatopicos">
                    
                    <a href="">
                        <li class="topicos">Admissão</li>
                    </a>
                    <a href="">
                        <li class="topicos">Novidades</li>
                    </a>
                    <a href="">
                        <li class="topicos">Nossa Cultura</li>
                    </a>
                    <a href="" id="portal_aluno" style="width: 200px;">
                        <li >Portal do aluno</li>
                    </a>
                </ul>
            </header>
            <div className="missao">
                <h1>MISSÃO</h1>
                <div className="content-from-img">
                    <img className="img-1" src={linha} alt="linha azul"/>
                    <div className="pixels">
                        <p>
                            Formar <span>Jovens Administradores</span> que tenham total
                            aderência com os <span>nossos valores</span>, capacidade
                            de <span>liderança</span>, alto <span>tino comercial</span> e competência
                            para produzir <span>resultados superiores</span>.
                        </p>
                    </div>
                </div>
                <img className="img-2" src={linha2} alt="linha azul"/>
            </div>
            <Link to="Qulture">
                <button className="btn-home">SAIBA MAIS DA NOSSA CULTURA</button>
            </Link>
            
            <div className="protocolo-covid">
                <img className="linha-vertical1" src={mais2} alt="linha azul"/>
                <div className="protocolo">
                    <h1>Protocolo Covid 19</h1>
                    <p>
                        A escola segue todos os protocolos contra a covid 19 indicados pelas organizações mundiais
                    </p>
                    <div to="Qulture" className="procolo-mais">
                        <p>#JuntosVenceremosEssa</p>
                    </div>
                </div>
                <img className="linha-vertical2" src={mais} alt="linha azul"/>
            </div>
            <div className="destaque">
                <div id="certificados">
                    <p className="titulodestaque">Destaque no ENEM</p>
                    <img id="tracodestaque" src={traço} alt="linha azul"/>
                    <p className="subtitulodestaque">Certificados com a UNESCO, CMDCA, UPF e CEBAS</p>
                </div>
                
                <div className="img-destaque">
                    <img id="mariaOdete" src={odete} alt="Maria Odete"/>
                    <p className="legenda">Maria Odete, Diretora Pedagógica</p>
                    <img className="traço" src={traço_canto}/>
                </div>
            </div>


        </div>
    );
};


export default Home;