import linha1 from '../../assets/linha.png';
import linha1_2 from '../../assets/linha1_2.png'
import linha1_3 from '../../assets/linha1_3.png'
import linha1_4 from '../../assets/linha1_4.png'
import linha2 from '../../assets/linha2.png';
import linha2_2 from '../../assets/linha2_2.png';
import linha2_3 from '../../assets/linha2_3.png';
import linha2_4 from '../../assets/linha2_4.png';

import './styles/alimentare.css'

const Alimentare = () => {
    return(
        <div className="alimentare-content">
            <picture>
                <source media="(max-width:480px)" srcSet={linha1_4} />
                <source media="(max-width:769px)" srcSet={linha1_3} />
                <source media="(max-width:1024px)" srcSet={linha1_2} />
                <img className="img-1" src={linha1} alt="linha azul"/>
            </picture>
            <h1 className="title">Projeto Alimentare</h1>
            <picture>
                <source media="(max-width:480px)" srcSet={linha2_4} />
                <source media="(max-width:769px)" srcSet={linha2_3} />
                <source media="(max-width:1024px)" srcSet={linha2_2} />
                <img className="img-2" src={linha2} alt="linha azul"/>
            </picture>
        </div>
    )
}
    
    export default Alimentare;