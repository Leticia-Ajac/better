import direita from '../../../assets/linha-alimentare-direita.png';
import esquerda from '../../../assets/linha-alimentare-esquerda.png.png';
import imagem1 from '../../../assets/imagem-1-alimentare.png'



import '../styles/alimentare.css'

const Alimentare = () => {
    return(
        <div className="alimentare-content">
            <div className="titulo-alimentare">
                <img className="line-1" src={direita} alt="linha azul"/>
                <img className="line-2" src={esquerda} alt="linha azul"/>
                <h1 className="title">Projeto Alimentare</h1>
            </div>
            <div className="columns">
                    <img className="content-1" src={imagem1} alt="foto do projeto que existe desde 2016"/>
                    <p className="column-text"><span className="doacao-text-1">Fornece alimentação Natural para os alunos</span><br/><br/>
                        
                    <span className="doacao-text-2">Trazendo alimentos saudáveis, sem conservantes e sem aditivos químicos na suas refeições</span><br/><br/>
                        
                    <span className="doacao-text-3">Toda alimentação tem componentes 100% naturais</span></p>
            </div>
        </div>
    )
}
    
    export default Alimentare;