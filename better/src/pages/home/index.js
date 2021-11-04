import './styles.css';
import './carousel.css'
import { Link } from 'react-router-dom';


import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import carousel_adm from '../../assets/carousel-adm.png'
import carousel_facul from '../../assets/carousel-facul.png'
import carousel_cultura from '../../assets/carousel-cultura.png';
import dividi_carousel from '../../assets/divisor.png'

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

import video_inscricoes from '../../assets/Instituto Germinare_360P (1).mp4';
import linha_cima from '../../assets/linha-em-cima.png';
import linha_baixo from '../../assets/linha-em-baixo.png';

const Home = () => {
    return(
        <div id='page-home'>

            <header>
            
                <img class="topicos" id="logogerminare" src={logo_branca} alt="logo germinare"/>

                <ul id="listatopicos">
                    
                    <Link>
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



            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={carousel_adm}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Processo de Admissão <br/> 2021/2022</h3>
                        <img src={dividi_carousel} />
                        <p>Inscrições válidas para alunos no 5° ano do fundamental. Do dia 09 a 27 de maio. <br/> <br/> #SeuFuturoComeçaAqui</p>
                        <Link to=''>
                            <button className='btn-carousel'>Inscreva-se</button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={carousel_facul}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Faculdade Germinare <br/>2022/2023</h3>
                        <img src={dividi_carousel} />
                        <p>Venha construir o seu sucesso conosco, está na hora de despertar o profissional que existe em você! <br/> <br/>Em breve poderemos caminhar juntos em direção ao seu sonho!</p>
                        <Link to=''>
                            <button className='btn-carousel'>Pré-Inscrição</button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>    
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={carousel_cultura}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Nossa cultura</h3>
                        <img src={dividi_carousel} />
                        <p>Nossa Instituição acredita que a eduacação de qualidade, baseada em ética e liderança, é capaz de mudar o mundo. <br/> <br/>Nós te convidamos a saber mais sobre nossas crenças, missão e valores.</p>
                        <Link to=''>
                            <button className='btn-carousel'>Saiba mais</button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>




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
                <button className="btn-saiba">SAIBA MAIS DA NOSSA CULTURA</button>
            </Link>




        <div className="container-inscrições">
            <div className="elements">
                <h1>Inscrições Abertas </h1>
                <video width="400" controls>
                    <source src={video_inscricoes} type="video/mp4"/>
                </video>
            </div>
            <div className="inline-content">
                <div className="container">
                    <h1>.1</h1>
                    <p>Inscrição</p>
                </div>
                <div className="container">
                    <h1>.2</h1>
                    <p className="break">Pesquisa de Perfil Avaliação cognitiva</p>
                </div>
                <div className="container">
                    <h1>.3</h1>
                    <p>Entrevista</p>
                </div>
                <div className="container">
                    <h1>.4</h1>
                    <p>Resultado</p>
                </div>
            </div>
            <div>
                <Link className="btn-home">Inscreva-se</Link>
            </div>
        </div>
        <img className="linha-emcima" src={linha_cima} alt="linha azul"/>
        <img className="linha-embaixo" src={linha_baixo} alt="linha azul"/>



            
            <div className='ajuste'>
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
            </div>

            <div className='ajuste'>
                <div className="destaque">
                    <div id="certificados">
                        <p className="titulodestaque">Destaque no ENEM</p>
                        <img id="tracodestaque" src={traço} alt="linha azul"/>
                        <p className="subtitulodestaque">Certificados com a UNESCO, CMDCA, UPF e CEBAS</p>
                    </div>
                    
                    <div className="img-destaque">
                        <img id="mariaOdete" src={odete} alt="Maria Odete"/>
                        <p className="legenda">Maria Odete, Diretora Pedagógica</p>
                    </div>
                </div>
            </div>
            <img className="traço" src={traço_canto}/>


            



        </div>
    );
};


export default Home;