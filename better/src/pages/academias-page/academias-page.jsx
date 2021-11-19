import barra1 from '../../assets/div-titulo2.png';
import barra2 from '../../assets/div-titulo.png';
import PPlover from '../../assets/PPlover.jpeg';
import './academias-page.css';
import estagiofoto from '../../assets/estagio-fotinho.png';
import vid from '../../assets/vid.jpeg';
import mesaPP from '../../assets/mesaPP.jpeg';
import conversaPP from '../../assets/conversaPP.jpeg';
import girotoPP from '../../assets/girotoaPP.jpeg';
import jornadaFinancas from '../../assets/jornadaFinancas.JPG';
import terteira from '../../assets/terteira.JPG';
import reuniaoBanco from '../../assets/reuniaoBanco.JPG';
import mesa from '../../assets/mesa.JPG';
import jackson from '../../assets/jackson.JPG';
import karine from '../../assets/Karine.JPG';
import fefe from '../../assets/fefe.jpg';
import seara from '../../assets/Seara.jpg';
import swift2 from '../../assets/swift2.jpg';
import junina from '../../assets/junina.jpg';
import nonoPP from '../../assets/nonoPP.jpeg';
import estagioswift from '../../assets/estagioswift.jpeg';
import marba from '../../assets/marba.jpg';


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
                <p id='explicacaoAzul'>Todas estas aulas são ministradas por professores especialistas e com vasta experiência em cada uma das áreas, agregando ainda mais profundidade as mesmas.</p>          
            </div>
            <div id='estagio'>
                <img id='estagio-foto'src={estagiofoto} alt='imagem empresa'/>
                    <div id='toColumn'>
                    <h1>ESTÁGIO</h1>
                    <p>De acordo com a área de destaque do aluno, ele terá oportunidade de fazer estágio numa das empresas do grupo relacionada ao tema.</p>
                    <p>Esses estágios iniciam-se no terceiro trimestre no 9° e são obrigatórios, pois nossa instituição acredita que quanto antes nossos alunos tiverem contato com o ambiente empresarial e com o mercado de trabalho, melhor.</p>
                    <p id='empresas-participantes'>Empresas Participantes do Programa de Estágio: Friboi, Seara, Flora, Swift, PicPay e Banco Original.</p>
                    </div>
            </div>
            <div id='estagio-galeria'>
                <div id='titulo-galeria'>
                    <h1>GALERIA</h1>
                </div>
                <div className='galeria'>
                    <div className='galeria-PP'>
                            <p>Jornada de Programação</p>
                    </div>
                    <div className='div-com-fotos'>
                            <img className='fotos'src={vid}/>
                            <img className='fotos'src={PPlover}/>
                            <img className='fotos'src={mesaPP}/>
                            <img className='fotos'src={conversaPP}/>
                            <img className='fotos'src={girotoPP}/>
                            <img className='fotos'src={nonoPP}/>
                    </div>


                    <div className='galeria-PP'>
                            <p>Jornada de Finanças</p>
                    </div>
                    <div className='div-com-fotos'>
                            <img className='fotos'src={terteira}/>
                            <img className='fotos'src={jornadaFinancas}/>
                            <img className='fotos'src={reuniaoBanco}/>
                            <img className='fotos'src={jackson}/>
                            <img className='fotos'src={mesa}/>
                            <img className='fotos'src={karine}/>
                    </div>
                    <div className='galeria-PP'>
                            <p>Jornada de Vendas</p>
                    </div>
                    <div className='div-com-fotos'>
                            <img className='fotos'src={junina}/>
                            <img className='fotos'src={swift2}/>
                            <img className='fotos'src={fefe}/>
                            <img className='fotos'src={estagioswift}/>
                            <img className='fotos'src={seara}/>
                            <img className='fotos'src={marba}/>
                    </div>
                </div>
        </div>
        </div>
    );
};

export default academias;