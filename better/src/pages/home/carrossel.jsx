import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import carousel_adm from '../../assets/carousel-adm.png'
import carousel_facul from '../../assets/carousel-facul.png'
import carousel_cultura from '../../assets/carousel-cultura.png';
import dividi_carousel from '../../assets/divisor.png'

const Carrossel = () => {
    return (
        <Carousel>
        <Carousel.Item interval={7000}>
            <img
            className="d-block w-100"
            src={carousel_adm}
            alt="First slide"
            />
            <Carousel.Caption>
                <h3>Processo de Admissão <br/> 2021/2022</h3>
                <img src={dividi_carousel} />
                <p>Inscrições válidas para alunos no 5° ano do fundamental. Do dia 09 a 27 de maio. <br/> <br/> #SeuFuturoComeçaAqui</p>
                <Link to='/admissão'>
                    <button className='btn-carousel'>Inscreva-se</button>
                </Link>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={7000}>
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
        <Carousel.Item interval={7000}>
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
    )
}


export default Carrossel;