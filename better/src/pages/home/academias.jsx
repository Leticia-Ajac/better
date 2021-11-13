import L_picpay from '../../assets/picpay.png';
import L_original from '../../assets/original.png';
import L_seara from '../../assets/seara.png';
import L_flora from '../../assets/flora.png';
import L_swift from '../../assets/swift.png';
import L_friboi from '../../assets/friboi.png';

import linha from '../../assets/linha.png';
import linha2 from '../../assets/linha2.png';

import "./styles/academias.css"


const Academias = () => {
    return (
        <div className='academias'>
            <h1>ACADEMIAS</h1>
            <img src={linha} alt="linha azul" id="linha-1" className="linhas"/>
            <div id="parent">
                <div className="cards-academias">
                    
                    
                        <div className="card" id="picpay">
                            <div className="format-card">
                                <img src={L_picpay} alt="picpay"/>
                                <p>Nossa Academia de Tecnologia foi desenvolvida para atender a demanda dos alunos e do mercado de trabalho atual em relação ao desenvolvimento, pesquisa e aplicação de tecnologias.</p>
                            </div>  
                        </div>

                        <div className="card" id="original">
                            <div className="format-card">
                                <img src={L_original} alt="original"/>
                                <p>A Academia de Finanças foi criada para formar profissionais com alto nivel de conhecimento contábil e econômico, principalmente através de atividades práticas na bolsa de valores.</p>
                            </div>
                            
                        </div>

                        <div className="card" id="seara">
                            <div className="format-card">
                                <img src={L_seara} alt="seara" id="img-seara"/>
                                <p>A Academia tem como objetivo formar profissionais ligados ao varejo.</p>
                            </div>
                            
                            
                        </div>
                    

                
                        <div className="card" id="swift">
                            <div className="format-card">
                                <img src={L_swift} alt="swift"/>
                                <p>A Academia de Bens de Consumo busca formar tocadores de negócios, propondo como instrumento de aprendizagem o entendimento da estrutura organizacional e conhecimento de mercado.</p>
                            </div>
                        </div>
                        <div className="card" id="friboi">
                            <div className="format-card">
                                <img src={L_friboi} alt="friboi"/>
                                <p>A Academia Friboi tem como objetivo fomentar a curiosidade dos alunos em relação aos processos produtivos e a cadeia de garantia da qualidade.</p>
                            </div>
                        </div>
                </div>
                <img src={linha2} alt="linha azul" className="linhas" id="linha-2"/>
            </div>
        </div>
    )
}

export default Academias;