import barra1 from '../../assets/div-titulo2.png';
import barra2 from '../../assets/div-titulo.png';
import './academias-page.css';
import estagiofoto from '../../assets/estagio-fotinho.png';



const academias = () => {
    return (
        <div id='academias-all'>
            <div id='titulo-academia'>
                <h1>UM NOVO MODELO DE</h1>
                <div id='toRow'>
                    <img id='barra-academia' src={barra1}/>
                    <h1>ENSINO</h1>
                    <img id='barra-academia2' src={barra2}/>
                </div>
                <p id='explicacao'>As academias são núcleos de conhecimento, cada uma com a sua especilidade: Tecnologia, Finanças, Varejo, Commodities e Bens de Consumo.</p> 
                <p id='explicacaoAzul'>Todas estas aulas são ministradas por professores especialistas e com vasta experiência em cada uma das áreas, agregando ainda mais profundidade as aulas.</p>          
            </div>
            <div id='estagio'>
                <img id='estagio-foto'src={estagiofoto} alt='imagem empresa'/>
                    <div id='toColumn'>
                    <h1>ESTÁGIO</h1>
                    <p>De acordo com a área de destaque do aluno, ele terá oportunidade de fazer estágio numa das empresas do grupo relacionada com o tema.</p>
                    <p>Esses estágios iniciam-se no terceiro trimestre no 9° e são obrigatórios, pois nossa instituição acredita que quanto antes nossos alunos tiverem contato com o ambiente empresarial e com o mercado de trabalho, melhor.</p>
                    <p id='empresas-participantes'>Empresas Participantes do Programa de Estágio: Friboi, Seara, Flora, Swift, PicPay e Banco Original.</p>
                    </div>
            </div>
        </div>
    );
};

export default academias;