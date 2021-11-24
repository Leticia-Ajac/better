import Image from './contents/image.jsx'
import Missao from './contents/missao.jsx'
import Alimentare from './contents/alimentare.jsx'
import Valores from './contents/valores.jsx'
import Demonstrativos from './contents/demonstrativos.jsx'
import Video from './contents/video.jsx'
import Lgpd from './contents/lgpd.jsx'
import Doacao from './contents/doacao.jsx'


const Qulture = () => {
    return (
        <div id='page-home'>
            
            <Image />

            <Missao />

            <Valores />

            <Video/>

            <Alimentare />

            <Demonstrativos/>

            <Lgpd/>
      
            <Doacao />

        </div>

    );
}

export default Qulture;