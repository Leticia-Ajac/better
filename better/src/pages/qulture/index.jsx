import Image from './contents/image.jsx'
import Missao from './contents/missao.jsx'
import Alimentare from './contents/alimentare.jsx'
import Linha_Tempo from './contents/linha-tempo.jsx';
import Valores from './contents/valores.jsx'
import Demonstrativos from './contents/demonstrativos.jsx'
import Video from './contents/video.jsx'
import Lgpd from './contents/lgpd.jsx'
import Doacao from './contents/doacao.jsx'
import Linha_Tempo from './contents/linha-tempo.jsx'

const Qulture = () => {
    return (
        <div id='page-home'>
            
            <Image />

            <Missao />

            <Linha_Tempo />

            <Valores />

            <Video/>

            <Linha_Tempo/>

            <Alimentare />

            <Doacao />

            <Demonstrativos/>

            <Lgpd/>

        </div>

    );
}

export default Qulture;