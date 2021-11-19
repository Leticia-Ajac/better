import Noticias from './noticias.jsx'
import Academias from './academias.jsx'
import Destaque from './destaque.jsx'
import Covid from './covid.jsx'
import Inscricoes from './inscricoes.jsx'
import Missao from './missao.jsx'
import Carrossel from './carrossel'

import './carousel.css'



const Home = () => {
    return(
        <div id='page-home'>
            
            <Carrossel />

            <Missao />

            <Inscricoes />

            <Covid />

            <Destaque />

            <Academias />

            <Noticias />

        </div>
    );
};


export default Home;