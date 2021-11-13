import { Link } from "react-router-dom"
import linha1 from '../../assets/linha.png';
import linha1_2 from '../../assets/linha1_2.png'
import linha1_3 from '../../assets/linha1_3.png'
import linha2 from '../../assets/linha2.png';
import linha2_2 from '../../assets/linha2_2.png';
import linha2_3 from '../../assets/linha2_3.png';

import './styles/missao.css'

const Missao = () => {
    return(
        <>
            <div className="missao">
                <h1>MISSÃO</h1>
                    <picture>
                        <source media="(max-width:1024px)" srcSet={linha1_2} />
                        <source media="(max-width:769px)" srcSet={linha1_3} />


                        <img className="img-1" src={linha1} alt="linha azul"/>
                    </picture>

                    <div className="pixels">
                        <p>
                            Formar <span>Jovens Administradores</span> que tenham total
                            aderência com os <span>nossos valores</span>, capacidade
                            de <span>liderança</span>, alto <span>tino comercial</span> e competência
                            para produzir <span>resultados superiores</span>.
                        </p>
                    </div>
                    <picture>
                        <source media="(max-width:1024px)" srcSet={linha2_2} />
                        <source media="(max-width:769px)" srcSet={linha2_3} />

                        <img className="img-2" src={linha2} alt="linha azul"/>
                    </picture>
            </div>
            <Link to="Qulture">
                <button className="btn-saiba">SAIBA MAIS DA NOSSA CULTURA</button>
            </Link>
        </>
    )
}

export default Missao;