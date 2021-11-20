import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import carousel_adm from '../../assets/carousel-adm.png'
import carousel_facul from '../../assets/carousel-facul.png';
import carousel_cultura from '../../assets/carousel-cultura.png';
import marciaResponsiva from '../../assets/marciaResponsiva.png';
import meninaResponsiva from '../../assets/meninaResponsiva.png';
import melissaResponsiva from '../../assets/melissaResponsiva.png';
const Carrossel = () => {
    return (
        <Carousel>
        <Carousel.Item interval={7000}>
        <picture>
                    <source media ="(min-width: 1000px)" srcset={carousel_adm} />
                    <source media ="(min-width: 320px)" srcset={meninaResponsiva} />
                    <img className="d-block w-100" src={carousel_adm} alt="First slide"/>
        </picture>
            <Carousel.Caption>
                <h3>Processo de Admissão <br/> 2021/2022</h3>
                <p>Inscrições válidas para alunos no 5° ano do fundamental, do dia 09 a 27 de maio.</p>
                <p>#SeuFuturoComeçaAqui</p>
                <Link to='/admissão'>
                    <button className='btn-carousel'>Inscreva-se</button>
                </Link>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={7000}>
        <picture>
                    <source media ="(min-width: 1000px)" srcset={carousel_facul} />
                    <source media ="(min-width: 320px)" srcset={melissaResponsiva} />
                    <img src={carousel_facul} className="d-block w-100"/>
        </picture>
            <Carousel.Caption>
                <h3>Faculdade Germinare <br/>2022/2023</h3>
                <p>Venha construir o seu sucesso conosco, está na hora de despertar o profissional que existe em você! <br/> <br/>Em breve poderemos caminhar juntos em direção ao seu sonho!</p>
                <Link to=''>
                    <button className='btn-carousel'>Pré-Inscrição</button>
                </Link>
            </Carousel.Caption>
        </Carousel.Item>    
        <Carousel.Item interval={7000}>
        <picture>
                    <source media ="(min-width: 1000px)" srcset={carousel_cultura} />
                    <source media ="(min-width: 320px)" srcset={marciaResponsiva} />
                    <img className="d-block w-100" src={carousel_cultura} alt="First slide"/>
        </picture>
            <Carousel.Caption>
                <h3>Nossa cultura</h3>
                <p>Nossa Instituição acredita que a educação de qualidade, baseada em ética e liderança, é capaz de mudar o mundo. <br/> <br/>Nós te convidamos a saber mais sobre nossas crenças, missão e valores.</p>
                <Link to=''>
                    <button className='btn-carousel'>Saiba mais</button>
                </Link>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    )
}


export default Carrossel;