import './footer.css';
import barra from '../../assets/barra.png';

const footer = () => {
    return (
    <footer className="footer-div">
                    <div className="main">
                        <h1 id='titulo-e-linha'>
                            Fale Conosco
                        </h1>
                        <div className='telefone'>
                            <h3>Telefone</h3>
                            <p>+55 (11) 3623-6000</p>
                            <div className='localizacao'>
                            <h3>Localização</h3>
                            <p>Rua Irineu José Bordon, 335
05120-060 - Vila Jaguara - São Paulo</p>
                        </div>
                        </div>
                        <div className='emails'>
                            <h3>Emails</h3>
                            <p>ouvidoria@germinare.org.br</p>
                            <p>admissao@germinare.org.br</p>
                            <p>comunicacao@germinare.org.br</p>
                            <p>instituto@germinare.org.br</p>
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
                    {/* <div className="footer-creditos">
                        <p>Escola Germinare – Escola de Negócios © 2021</p>
                    </div> */}
                </div>
                
            </footer>   

        );
    };

export default footer;