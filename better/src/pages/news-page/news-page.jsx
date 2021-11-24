import '../news-page/news-page.css';
import { Link } from 'react-router-dom'
import imgtitulo from '../../assets/div-titulo.png';
import imgtitulo2 from '../../assets/div-titulo2.png';
import leticia from '../../assets/leticiaMiyuki1.png';
import canalRural from '../../assets/canalRural.png';
import elyDirani from '../../assets/Ely Dirani (1).jpg';
import brenda from '../../assets/brenda.png';
import AOS from 'aos';
import 'aos/dist/aos.css'
const News = () => {AOS.init();
    return (
        <div className="container-noticias-page">
            <div className="noticias-title-page">
                <img id="tituloimg" src={imgtitulo}/>
                <h2>NOTÍCIAS</h2>
                <img id="tituloimg2" src={imgtitulo2}/>
            </div>

            <div className="body-grid-noticias-page">
                <div className="grid-noticias-page">
                    <div className="first-card-grid-page"  tabindex="0">
                        <div id='fundo-azul1'></div>
                        <div id='fundo-preto1'></div>
                        <img src={elyDirani} id='ely'/>
                        <div id='titulo1-invisivel'>Agora a Germinare também é TEC!</div>
                        <p id='texto1-invisivel-para-news'>Boas noticias para os interessados em fazer parte do instituto, agora a Germinare criou a "Germinare TEC", um programa que dá oportunidade aos alunos do 9°ano de ingressarem no mundo profissional. Os alunos contarão com aulas práticas que envolvem programação e linguagem de códigos, além de um estágio remunerado durante este período. Para inscrição, basta acessar o link: <a target='_blank' href='https://seufuturocomecaaqui.com.br/'>https://seufuturocomecaaqui.com.br/</a></p>
                        <div className='texto-noticia2-invisivel'>2022, é o ano que vai mudar a sua vida, vem de Germinare TEC!</div>
                        <p id='titulo-da-etec-normal'>Agora a Germinare também é TEC! Inscrições abertas para o curso de tecnologia.</p>
                    </div>



                    <div className="second-card-to-be-column">
                        <div className="second-card-grid-page"  tabindex="0">
                        <div id='fundo-azul'></div>
                        <div id='fundo-preto'></div>
                        <img src={canalRural} id='canal-rural-foto'/>
                            <div className='titulo-invisivel'>Geovanna, ex-germinare, no Canal Rural, confira!</div>
                            <p id='texto-invisivel-para-news'>"Que oportunidade! É um trabalho prazeroso, mas que exige responsabilidades".</p>
                            <div className='texto-noticia1-invisivel'>Ex-aluna Geovanna participa como comentarista no Canal Rural!</div>
                            <p className='titulo-normal'>Geovanna, ex-germinare, no Canal Rural, confira!</p>
                        </div>



                        <div className="second-card-grid-page" tabIndex='0'  data-aos="fade-left">
                        <div id='fundo-azul'></div>
                        <div id='fundo-preto'></div>
                            <img src={leticia} id='leticia'/>
                            <div className='titulo-invisivel'>Letícia Milyuki é destaque no Banco Original.</div>
                            <p id='texto-invisivel-para-news'>"Essa é a primeira de muitas conquistas! Agora é continuar desenpenhando em alto nível".</p>
                            <div className='texto-noticia1-invisivel'>Ex-aluna com 20 anos é considerada uma das melhores analistas do Banco Original.</div>
                            <p className='titulo-normal'>Letícia Milyuki é destaque no Banco Original.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id='card-longo-news-page'>
                <div id='escopo-card-news-page' tabIndex='0' data-aos="zoom-in">
                    <div id='fundo-azul3'></div>
                    <div id='fundo-preto3'></div>
                    <img src={brenda} id='brenda'/>
                    <p id='mini-title-invisivel'>Nossos alunos são nota 10 no mercado de trabalho!</p>
                    <div id='titulo3-invisivel'>Saiu a média salarial dos ex-alunos! Confira a carreira de sucessso dos nossos estudantes.</div>
                    <p id='texto3-invisivel-para-news'>É com orgulho que anunciamos as consquistas de nossos estudantes. Para este ano, a média salarial dos ex-alunos atingiu R$5000.00, resultado impressionante para jovens de 18 anos.</p>
                    <p id='titulo3-normal'>Saiu a média salarial dos ex-alunos! Confira a carreira de sucessso dos nossos estudantes.</p>                
                </div>
            </div>
    </div>
    );
};

export default News;