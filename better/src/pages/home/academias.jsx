import L_picpay from '../../assets/picpay.png';
import L_original from '../../assets/original.png';
import L_seara from '../../assets/seara.png';
import L_swift from '../../assets/swift.png';
import L_friboi from '../../assets/friboi.png';
import './styles/academias.css';
import './styles/academias.css'
import React from 'react';


const Academias = () => {
    var x = 0

    return (
        <div id='container-academias'>
            <h1>ACADEMIAS</h1>
            <div id="academia-traco"></div>
            <div id='quebrar-page'>
                <h3>Conheça nosso modelo de ensino:</h3>
                <p>Dividido em academias que separam os aprendizados em módulos de conhecimento, a Germinare propõe aos estudantes se aventurarem no mundo dos negócios.</p>
                <div className="scrollandinho">
                    <div id='cards-academias'>
                        <div className="card-ajuste"> <p>AJUSTE AJUSTE AJUSTE AJUSTE AJUSTE AJUSTE AJUSTE AJUSTE </p></div>
                        <div className='card-academia' id='picpay'>

                            <div className="container-text-card">
                                <img src={L_picpay} />
                                <h6>Nossa academia de tecnologia desafia os alunos a entrarem de cabeça no mundo os computadores e descobrir as maravilhas da programação 🚀.</h6>
                                <h6>Eai, Bora codar?</h6>
                            </div>

                        </div>
                        <div className='card-academia' id='original'>

                            <div className="container-text-card">
                                <img src={L_original} />
                                <h6>Nossa academia de finanças desperta o interesse no mercado financeiro e engaja nossos alunos a se tornarem experts em finanças.<br/><br/></h6>
                                <h6>Partiu trade!!!</h6>
                            </div>            

                        </div>
                        <div className='card-academia' id='seara'>

                            <div className="container-text-card">
                                <img src={L_seara} />
                                <h6>Nossa academia Seara torna os alunos estrategistas e planejadores, não há contratempo que segure esses gênios.</h6>
                                <h6>Surpreenda-se com Seara.</h6>
                            </div>

                        </div>
                        <div className='card-academia' id='friboi'>

                            <div className="container-text-card">
                                <img src={L_friboi} />
                                <h6>Nossa academia Friboi torna acessível aos estudantes o entedimento completo da cadeia de produção do nosso grupo.</h6>
                                <h6>Carne confiável tem nome</h6>
                            </div>


                        </div>
                        <div className='card-academia' id='swift'>

                            <div className="container-text-card">
                                <img src={L_swift} />
                                <h6>A academia Swift transforma os estudantes em vendedores natos, preparamos pessoas carismáticas e que fazem a diferença</h6>
                                <h6>Alimentando uma vida melhor</h6>
                            </div>

                        </div>
                        <div className="card-ajuste"> <p>AJUSTE AJUSTE AJUSTE AJUSTE AJUSTE AJUSTE AJUSTE AJUSTE AJUSTE </p></div>
                    </div>
                </div>
                <div className="btns-academias">
                    <button onClick={()=> {
                        x = x - 400
                        const container = document.querySelector("#cards-academias")
                        
                        if (x < 0) {
                            x = 0
                        }

                        console.log(x)
                        container.scrollTo(x,0)
                        
                        console.log(x)
                    }} >
                        <p id='btn-academias' >◀</p>
                    </button>
                    <button onClick={()=> {
                        x = x + 400
                        const container = document.querySelector("#cards-academias")
                        const card = document.querySelector('.card-academia')

                        console.log(x)
                        container.scrollTo(x,0)
                        if(card.scrollTo == x){
                            card.classList.add('.classex')
                        }
                        
                        if (x > 1400) {
                            x = 1400
                        }


                        console.log(x)
                    }} >
                        <p id='btn-academias'  >▶</p>
                    </button>
                </div>
                <div id="academia-traco2"></div>
            </div>
        </div>
    )
}

export default Academias;