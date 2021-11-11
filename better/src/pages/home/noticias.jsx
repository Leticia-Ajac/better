import { Link } from 'react-router-dom'
import firstcard_img from '../../assets/firstcard_img.png'
import firstcard2_img from '../../assets/firstcard_img2.png'
import firstcard3_img from '../../assets/firstcard_img3.png'
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
                    <picture>
                        <source media="(max-width: 769px)" srcSet={firstcard3_img} />
                        <source media="(min-width: 1024px)" srcSet={firstcard_img} />
                        <source media="(max-width: 1023px)" srcSet={firstcard2_img} />
                        
                        <img src={firstcard_img} alt=""/>
                    </picture>
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