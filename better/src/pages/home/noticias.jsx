import { Link } from 'react-router-dom'
import firstcard_img from '../../assets/firstcard_img.png'
import secondcard_img from '../../assets/secondcard_img.png'

import './styles/noticias.css';

const Noticias = () => {
    return(
        <div className="container-noticias">
        <div className="noticias-title">
            <h2>NOTICIAS</h2>
        </div>

        <div className="body-grid">
            <div className="grid-noticias">
                <div className="first-card-grid">
                    <img src={firstcard_img} alt=""/>
                    <p>Letícia Milyuki é destaque no Banco Original</p>
                </div>
                <div className="card-grid">
                    <p>Geovanna, ex germinare, no Canal Runal, confira!</p>
                    <img src={secondcard_img}/>
                </div>
                <div className="card-grid">
                    <p>Geovanna, ex germinare, no Canal Runal, confira!</p>
                    <img src={secondcard_img} />
                </div>
            </div>
            <Link to=''>
                    <button className='btn-saiba' id="mais-noticias">+ Mais Notícias +</button>
            </Link>
        </div>
    </div>
    )
}

export default Noticias;