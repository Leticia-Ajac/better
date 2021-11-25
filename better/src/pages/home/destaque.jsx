import traço from '../../assets/traço.png';
import luis from '../../assets/Luísa_Cabral-removebg-preview 1.png';
import traço_canto from '../../assets/traço-canto.png';

import './styles/destaque.css'


const Destaque = () => {
    return(
        <div className='ajuste'>
            <div className="destaque">
                <div id="certificados">
                    <div className="titulodestaque">
                        <p className="span-titulodestaque">A escola Germinare é</p>
                        <p className="enem">Destaque no ENEM</p>
                    </div>
                    <img id="tracodestaque" src={traço} alt="linha azul"/>
                    <div className="inside-subtitulo">
                        <p className="subtitulodestaque">Certificados com a UNESCO, CMDCA, UPF e CEBAS</p>
                    </div>

                </div>
                
                <div className="img-destaque">
                    <img id="mariaOdete" src={luis} alt="Foto de uma aluna"/>
                    <p className="legenda">Luisa Cabral, Aluna do Instituto</p>
                </div>
            </div>
            <img className="traço" src={traço_canto}/>
        </div>

    )
}

export default Destaque;