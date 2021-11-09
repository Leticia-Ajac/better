import './footer.css';
import barra from '../../assets/barra.png';

const footer = () => {
    return (
    <div className="footer-div">
                <div className="parent">
                    <img className="line-1" src={barra}/>
                    <div className="fale-conosco">
                        <div className="content-1">
                            <h1>Fale Conosco</h1>
                        </div>
                        <div className="content-2">
                            <h2 className="telefone">Telefone</h2>
                            <p className="number">+55 (11) 3623-6000</p>
                            <h2 className="localização">Localização</h2>
                            <p className="local">Rua Irineu José Bordon, 335<br/>
                            05120-060 - Vila Jaguara - São Paulo</p>
                        </div>
                        <div className="content-3">
                            <h2>Emails</h2>
                            <p>
                                ouvidoria@germinare.org.br<br/>
                                admissao@germinare.org.br<br/>
                                comunicacao@germinare.org.br<br/>
                                instituto@germinare.org.br
                            </p>
                        </div>
                        <div className="social-media-icons">
                            <div className="wrapper">
                                <a href="https://www.facebook.com/germinareoficial/" target="_blank">
                                <div className="icon facebook">
                                    <div className="tooltip">
                                        Facebook
                                    </div>
                                    <span><i className="fab fa-facebook-f"></i></span>
                                </div>
                                </a>
                                <a href="https://www.instagram.com/escolagerminare/" target="_blank">
                                <div className="icon instagram">
                                    <div className="tooltip">
                                        Instagram
                                    </div>
                                    <span><i className="fab fa-instagram"></i></span>
                                </div>
                                </a>
                                <a href="https://www.youtube.com/channel/UCtfT0wIFhW2jyCMR0ZtBuzg" target="_blank">
                                <div className="icon youtube">
                                    <div className="tooltip">
                                        YouTube
                                    </div>
                                    <span><i className="fab fa-youtube"></i></span>
                                </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-creditos">
                    <p>Escola Germinare – Escola de Negócios © 2021</p>
                </div>
            </div>   
        );
    };

export default footer;