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
                <div className="column-1">
                    <img className="content-1" src={imagem1} alt="foto do projeto que existe desde 2016"/>
                </div>
                <div className="column-2">
                    <p className="column-text">Fornece alimentação Natural os alunos</p>
                    <p className="column-text">Trazendo alimentos saudáveis, sem conservantes e sem aditivos químicos na suas refeições</p>
                    <p className="column-text">Toda alimentação tem componentes 100% naturais</p>
                </div>
            </div>
        </div>
    )
}
    
    export default Alimentare;