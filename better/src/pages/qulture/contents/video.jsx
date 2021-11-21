import baixo from '../../../assets/linha-baixo-video.png';
import cima from '../../../assets/linha-cima-video.png';
import video_inscricoes from '../../../assets/Instituto Germinare_360P (1).mp4';

import '../styles/video.css'


const Video = () => {
    return(
        <div className="container-video">
        <div className="video-institucional">
            <img className="cima" src={cima} alt="linha azul"/>
            <video className="video-instituto" width="400" controls>
                <source src={video_inscricoes} type="video/mp4"/>
            </video>
            <img className="baixo" src={baixo} alt="linha azul"/>
        </div>
        </div>
    )
}
    
    export default Video;