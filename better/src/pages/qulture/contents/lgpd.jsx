import fotolgpd from '../../../assets/foto-lgpd-1.png'
import julia from '../../../assets/julia.png'
import vertical from '../../../assets/vertical-lgpd.png'


import '../styles/lgpd.css'

const Lgpd = () => {
    return (

        <div className='Lgpd-page'>
            <div className="titulo">
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
                <div id="coluna-2-lgpd">
                    <h1 id="tit-cookies">Cookies</h1>
                    <p id="text-cookies">Cookies estão inclusos em nossos sites para distinguir usuários únicos, atribuindo um número gerado  aleatoriamente como um identificador com o objetivo de calcular acessos dos visitantes para os relatórios analíticos de sites e para poder entender melhor duas necessidades e interesses. Oferecendo um melhor serviço ou fornecendo informação relacionada. Por padrão, ele é definido para expirar.</p>
                </div>
            </div>
            
            <div id="colunas-lgpd-2">

                <div id="column-1-lgpd">
                    <img id="img1-id" src={fotolgpd}/>
                </div>

                <div id="column-2-lgpd">
                    <h2 id="tit-como">
                        Como, quais e por que a Escola <br/>Germinare coleta seus dados
                    </h2>
                    <p id="text-como">
                    Para que possamos prestar nossos serviços com qualidade, podemos coletar diferentes tipos de dados sobre você (coletadas através dos nossos sites e/ou com conexão a outras atividades que fazem parte da operação de nossos negócios). Para que possamos ser transparentes, listamos abaixo algumas das finalidades as quais poderemos tratar os seus dados pessoais:
                    </p>
                </div>

            </div>
            <div id="container-lgpd-1">
                <h1 id="tit-coleta">Coleta de dados sensíveis e coleta de dados de menor</h1>

                <div id="coluna-container">
                    <p id="text-coleta1">Em alguns casos, podemos realizar a coleta de alguns dados pessoais considerados como sensíveis conforme definição da Lei Geral de Proteção de Dados  ou a coleta de algum dado pessoal que possa vir a revelar algum dado sensível. Nesses casos, apenas iremos realizar o tratamento desses dados de acordo com alguma das bases legais disponíveis no artigo 11 da LGPD.</p>
                    <img id="img2-id" src={julia}/>
                </div>

                <p id="text-coleta2">Além disso, durante a prestação de nossos serviços, podemos também coletar dados de menores de 12 anos. Nesses casos, sempre buscaremos a autorização de seu representante legal ou de um de seus pais, conforme regra presente no artigo 14 da LGPD.
                </p>
            </div>
            
            <div id="container-lgpd-2">
                <h1 id="tit-compartilhamento">Compartilhamento de dados</h1>
                <p id="text-compartilhamento1">A Escola Germinare não compartilha, vende ou transfere seus dados pessoais para nenhuma empresa ou individuo, exceto nas seguintes hipóteses:</p>

                <p id='text-compartilhamento1'>
                Podemos compartilhar seus dados pessoais a fim de cumprir com as legislações vigentes (Por exemplo, compartilhamento de dados ao Ministério da Educação – MEC e a Secretária da Educação do Estado de São Paulo);

                Podemos compartilhar seus dados pessoais para hospedagem em plataformas de tecnologia de nossos parceiros;

                Garantir a disponibilidade de nossos serviços por meio de nosso site
                </p>
            </div>
            <div className="container-lgpd-3">
                <h1 id="tit-direitos">Direitos conforme LGPD</h1>
                <p id="text-direitos">Importante ressaltar que você sempre possuirá direitos relativos a privacidade e a proteção dos seus dados, e a Escola Germinare, além de se preocupar com a segurança desses dados, também se preocupa que você tenha acesso e conhecimento de todos os seus direitos.</p>
            </div>
            <div className="container-lgpd-4">
                <div id="acesso">
                    <h2 class="tit-topico" id="tit-acesso">Acesso, existência de tratamento e informação</h2>
                    <p className="text-topico" id="text-acesso">
                    Este direito permite que você possa requisitar e receber uma cópia dos seus dados pessoais que nós possuímos, bem como requerer a confirmação do tratamento que estamos realizando em seus dados pessoais e/ou qualquer outra informação que seja importante.
                    </p>
                    <p className="saiba" id="saiba-acesso">Saiba Mais</p>
                </div>
                <div id="retificacao">
                    <h2 class="tit-topico" id="tit-retificacao">Retificação</h2>
                    <p className="text-topico" id="text-retificacao">
                    Este direito permite que você possa solicitar a correção e/ou retificação dos seus dados pessoais, caso identifique qualquer erro neles que alguns deles estão incorretos. Contudo, para ser efetivada essa correção, teremos que checar a validade dos dados que você nos fornece.
                    </p>
                    <p className="saiba" id="saiba-retificacao">Saiba Mais</p>
                </div>
                <div id="exclusao">
                    <h2 class="tit-topico" id="tit-exclusao">Exclusão</h2>
                    <p className="text-topico" id="text-exclusao">
                    Este direito permite que você possa nos solicitar a exclusão dos seus dados pessoais de nossos sistemas. Todos os dados coletados serão excluídos de nossos servidores quando você assim requisitar ou quando estes não forem mais necessários ou relevantes para lhe oferecermos os nossos Serviços, salvo se houver qualquer outra razão para a sua manutenção, como eventual obrigação legal de retenção de dados ou necessidade de preservação destes para resguardo de direitos da Escola Germinare.
                    </p>
                    <p className="saiba" id="saiba-exclusao">Saiba Mais</p>
                </div>
                <div id="oposicao">
                    <h2 class="tit-topico" id="tit-exclusao">Oposição ao processamento</h2>
                    <p className="text-topico" id="text-oposicao">
                    Você também tem o direito de contestar onde e em que contexto estamos tratando seus dados pessoais para diferentes finalidades. Em determinadas situações, podemos demonstrar que temos motivos legítimos para tratar seus dados, os quais se sobrepõem aos seus direitos, caso, por exemplo, sejam essenciais para o fornecimento do nosso Serviço.
                    </p>
                    <p className="saiba" id="saiba-oposicao">Saiba Mais</p>
                </div>
                <div id="solicitar">
                    <h2 class="tit-topico" id="tit-solicitar">Solicitar anonimização, bloqueio ou eliminação de dados</h2>
                    <p className="text-topico" id="text-solicitar">
                    Você também tem o direito de contestar onde e em que contexto estamos tratando seus dados pessoais para diferentes finalidades. Em determinadas situações, podemos demonstrar que temos motivos legítimos para tratar seus dados, os quais se sobrepõem aos seus direitos, caso, por exemplo, sejam essenciais para o fornecimento do nosso Serviço.
                    </p>
                    <p className="saiba" id="saiba-solicitar">Saiba Mais</p>
                </div>
                <div id="portabilidade">
                    <h2 class="tit-topico" id="tit-portabilidade">Portabilidade de dados</h2>
                    <p className="text-topico" id="text-portabilidade">
                    Forneceremos a você, ou a terceiros que você escolheu, seus dados pessoais em formato estruturado.
                    </p>
                    <p className="saiba" id="saiba-portabilidade">Saiba Mais</p>
                </div>
                <div id="retirar">
                    <h2 class="tit-topico" id="tit-retirar">Retirar o seu consentimento</h2>
                    <p className="text-topico" id="text-retirar">
                    Você tem o direito de retirar o seu consentimento, no entanto, isso não afetará a legalidade de qualquer processamento realizado anteriormente. Se você retirar o seu consentimento, talvez não possamos fornecer determinados serviços. E se for este o caso, iremos avisá-lo no momento em que isso ocorrer.
                    </p>
                    <p className="saiba" id="saiba-retirar">Saiba Mais</p>
                </div>
            </div>
            <div className="container-lgpd-5">
                <p id="tit-como">Como falar conosco?</p>
                <p id="text-como">O responsável pela base de dados no Brasil é o INSTITUTO J&F (“INSTITUTO J&F”), devidamente inscrita no CNPJ sob no 10.619.284/0001-52, localizada na Rua Irineu José Bordon, n°335, Vila Jaguará, CEP 05120-060, São Paulo, Brasil. Se você tiver dúvidas ou preocupações em relação a sua privacidade ao usar este site, encaminhe-as por meio do e-mail dpo@jfinvest.com.br.</p>
                <p id="tit-mudancas"> Mudanças na Política de Privacidade</p>
                <p id="text-mudancas">Podemos modificar ou alterar este Termo de Privacidade de tempos em tempos. Para informá-lo de quando fizermos alterações neste Termo de Privacidade, alteraremos a data de revisão. O novo Termo modificado ou alterado será aplicado a partir dessa data de revisão. Portanto, incentivamos você a periodicamente revisar este Termo para ser informado sobre como estamos protegendo suas informações.</p>
            </div>
        </div>
    )
}

export default Lgpd;