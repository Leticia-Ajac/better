import mais2 from '../../assets/mais2.png';
import mais from '../../assets/mais.png';

const Covid = () => {
    return (
        <div className='ajuste'>
            <div className="protocolo-covid">
                <img className="linha-vertical1" src={mais2} alt="linha azul"/>
                <div className="protocolo">
                    <h1>Protocolo Covid 19</h1>
                    <p>
                        A escola segue todos os protocolos contra a covid 19 indicados pela organização mundial da saúde
                    </p>
                    <div to="Qulture" className="procolo-mais">
                        <p>#JuntosVenceremosEssa</p>
                    </div>
                </div>
                <img className="linha-vertical2" src={mais} alt="linha azul"/>
            </div>
        </div>
    )
}

export default Covid;