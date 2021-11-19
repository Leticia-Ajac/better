import { Link } from 'react-router-dom'
import firstcard_img from '../../assets/firstcard_img.png'
import firstcard2_img from '../../assets/firstcard_img2.png'
import firstcard3_img from '../../assets/firstcard_img3.png'
import firstcard4_img from '../../assets/firstcard_img4.png'
import secondcard_img from '../../assets/secondcard_img.png'
import secondcard2_img from '../../assets/secondcard_img2.png'
import secondcard4_img from '../../assets/secondcard_img4.png'
import thirdcard_img from '../../assets/thirdcard_img.png'
import thirdcard2_img from '../../assets/thirdcard_img2.png'
import thirdcard3_img from '../../assets/thirdcard_img3.png'
import thirdcard4_img from '../../assets/thirdcard_img4.png'

import './styles/noticias.css';

const Noticias = () => {
    return(
        <div className="container-noticias">
        <div className="noticias-title">
            <h2>NOTÍCIAS</h2>
        </div>

        <div className="body-grid">
            <div className="grid-noticias">
                <div className="first-card-grid">
                    <picture>
                        <source media="(max-width: 479px" srcSet={firstcard4_img} />
                        <source media="(max-width: 769px)" srcSet={firstcard3_img} />
                        <source media="(min-width: 1024px)" srcSet={firstcard_img} />
                        <source media="(max-width: 1023px)" srcSet={firstcard2_img} />
                        
                        <img src={firstcard_img} alt=""/>
                    </picture>
                    <p>Letícia Milyuki é destaque no Banco Original.</p>
                </div>
                <div className="card-grid">
                    <p>Geovanna, ex-germinare, no Canal Rural, confira!</p>
                    <picture>
                        <source media="(max-width: 480px" srcSet={secondcard4_img} />
                        <source media="(max-width: 769px)" srcSet={secondcard_img} />
                        <source media="(min-width: 1024px)" srcSet={secondcard_img} />
                        <source media="(max-width: 1023px)" srcSet={secondcard2_img} />

                        <img src={secondcard_img}/>
                    </picture>
                </div>
                <div className="card-grid">
                    <p>Agora a Germinare tem o Ensino Tech! </p>
                    <picture>
                        <source media="(max-width: 480px" srcSet={thirdcard4_img} />
                        <source media="(max-width: 769px)" srcSet={thirdcard3_img} />
                        <source media="(min-width: 1024px)" srcSet={thirdcard_img} />
                        <source media="(max-width: 1023px)" srcSet={thirdcard2_img} />

                        <img src={thirdcard4_img}/>
                    </picture>
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