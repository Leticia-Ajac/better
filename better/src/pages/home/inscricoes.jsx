import { Link } from 'react-router-dom';
import video_inscricoes from '../../assets/Instituto Germinare_360P (1).mp4';
import linha_cima from '../../assets/linha-em-cima.png';
import linha_baixo from '../../assets/linha-em-baixo.png';

const Inscricoes = () => {
    return (
        <>
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
                    <Link to="/admissão" className="btn-home" >Inscreva-se</Link>
                </div>
            </div>
            <img className="linha-emcima" src={linha_cima} alt="linha azul"/>
            <img className="linha-embaixo" src={linha_baixo} alt="linha azul"/>
        </>
    )
}

export default Inscricoes;