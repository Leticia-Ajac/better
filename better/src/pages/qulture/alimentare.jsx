import linha1 from '../../assets/linha.png';
import linha2 from '../../assets/linha2.png';


import './styles/alimentare.css'

const Alimentare = () => {
    return(
        <div className="alimentare-content">
            <div className="container-title">
                <img className="img-1" src={linha1} alt="linha azul"/>
                <h1 className="title">Projeto Alimentare</h1>
                <img className="img-2" src={linha2} alt="linha azul"/>
            </div>
        </div>
    )
}
    
    export default Alimentare;