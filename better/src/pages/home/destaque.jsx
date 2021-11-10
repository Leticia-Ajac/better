import traço from '../../assets/traço.png';
import odete from '../../assets/odete.png';
import traço_canto from '../../assets/traço-canto.png';


const Destaque = () => {
    return(
        <div className='ajuste'>
            <div className="destaque">
                <div id="certificados">
                    <p className="titulodestaque">Destaque no ENEM</p>
                    <img id="tracodestaque" src={traço} alt="linha azul"/>
                    <p className="subtitulodestaque">Certificados com a UNESCO, CMDCA, UPF e CEBAS</p>
                </div>
                
                <div className="img-destaque">
                    <img id="mariaOdete" src={odete} alt="Maria Odete"/>
                    <p className="legenda">Maria Odete, Diretora Pedagógica</p>
                </div>
            </div>
            <img className="traço" src={traço_canto}/>
        </div>

    )
}

export default Destaque;