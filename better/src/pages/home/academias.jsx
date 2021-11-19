import L_picpay from '../../assets/picpay.png';
import L_original from '../../assets/original.png';
import L_seara from '../../assets/seara.png';
import L_swift from '../../assets/swift.png';
import L_friboi from '../../assets/friboi.png';
import './styles/academias.css';

const Academias = () => {
    return (
        <div id='parte-academias'>
            <h1>ACADEMIAS</h1>
            <div id='quebrar-page'>
                <h3>Conheça nosso modelo de ensino:</h3>
                <p>Dividido em academias que separam os aprendizados em módulos de conhecimento, a Germinare propõe aos estudantes se aventurarem no mundo dos negócios.</p>
                    <div id='cards-academias'>
                        <div className='card-academia' id='picpay'>
                            <p>PicPay</p>
                            <h6>Nossa academia de tecnologia desafia os alunos a entrarem de cabeça no mundo os computadores e descobrir as maravilhas da programação 🚀.</h6>
                            <h6>Eai, Bora codar?</h6>
                        </div>
                        <div className='card-academia' id='original'>
                            <p>Original</p>
                            <h6>Nossa academia de finanças desperta o interesse no mercado financeiro e engaja nossos alunos a se tornarem experts em finanças.</h6>
                            <h6>Partiu trade!!!</h6>
                        </div>
                        <div className='card-academia' id='seara'>
                            <p>Seara</p>
                            <h6>Nossa academia Seara torna os alunos estrategistas e planejadores, não há contratempo que segure esses gênios.</h6>
                            <h6>É hora planejar o seu futuro.</h6>
                        </div>
                        <div className='card-academia' id='friboi'>
                            <p>Friboi</p>
                            <h6>Nossa academia Friboi torna acessível aos estudantes o entedimento completo da cadeia de produção do nosso grupo.</h6>
                            <h6>Engaje no negócio com a gente!</h6>
                        </div>
                        <div className='card-academia' id='swift'>
                            <p>Swift</p>
                            <h6>A academia Swift transforma os estudantes em vendedores natos, nossa tarefa é preparar pessoas carismáticas e que fazem a diferença no ambiente o qual estão </h6>
                            <h6>Vamos começar?</h6>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Academias;