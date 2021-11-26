import { Link } from "react-router-dom"
import fotolgpd from '../../../assets/domingos.png'
import julia from '../../../assets/julia.png'
import vertical from '../../../assets/vertical-lgpd.png'
import horizontal from '../../../assets/horizontal.png'

import '../styles/lgpd2.css'
import '../styles/lgpd.css'

const Lgpd = () => {
    return (
        
        <div className='Lgpd-page'>
            <div className="titulo-da-lgpd">
                <h1>LGPD</h1>
            </div>

            <div id="id-compromisso">
                <p id="text-compromisso-1">O compromisso da Escola Germinare com a Privacidade e Proteção de Dados.</p>
                <p id="text-compromisso-2">Se você utiliza o nosso site, esta Política de Privacidade se aplica a “VOCÊ”.</p>
            </div>

            <div id="colunas-lgpd-1">
                <div id="coluna-1-lgpd">
                    <h1 id="tit-dados">Dados coletados no processo  seletivo de admissão</h1>
                    <ul id='lista-dados'>
                        <li className="item">Nome</li>
                        <li className="item">Nome Social</li>
                        <li className="item">E-mail</li>
                        <li className="item">Sexo</li>
                        <li className="item">Nº do CPF</li>
                        <li className="item">Nº do RG</li>
                        <li className="item">Órgão Expedidor do RG</li>
                        <li className="item">Endereço</li>
                        <li className="item">Escola que está macritulado </li>
                        <li className="item">Período</li>
                        <li className="item">Tipo de Instituição</li>
                    </ul>
                </div>
                <img src={vertical} alt="" id='vertical' />
                <img src={horizontal} alt="" id='horizontal' />
                <div id="coluna-2-lgpd">
                    <h1 id="tit-cookies">Cookies</h1>
                    <p id="text-cookies">Cookies estão inclusos em nossos sites para distinguir usuários únicos, atribuindo um número gerado  aleatoriamente como um identificador com o objetivo de calcular acessos dos visitantes para os relatórios analíticos de sites e para poder entender melhor duas necessidades e interesses. Oferecendo um melhor serviço ou fornecendo informação relacionada. Por padrão, ele é definido para expirar.</p>
                </div>
            </div>
            
            <div id="colunas-lgpd-2">
            <Link to="/lgpd" onClick={() => { if (document.readyState === 'complete') { window.scroll(0, 0) } }}>
                <button className="btn-saiba">CONHECER MAIS SOBRE LGPD</button>
            </Link>
                </div>
                </div>
        
    )
}

export default Lgpd;