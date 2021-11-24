import direita from '../../../assets/linha-alimentare-direita.png';
import esquerda from '../../../assets/linha-alimentare-esquerda.png.png';
import imagem1 from '../../../assets/tio-joao.png'



import '../styles/alimentare.css'

const Alimentare = () => {
    return(
        <div className="alimentare-content">
            <div className="titulo-alimentare">
                <h1 className="title">PROJETO ALIMENTARE</h1>
            </div>
            <div className="columns">
                    <img className="content-1" src={imagem1} alt="foto do projeto que existe desde 2016"/>
                    <p className="column-text">Fornecemos uma alimentação natural, preparada por nutricionistas, para todos os nossos alunos.<br></br>
                    <p id='to-have-margin'>Nossos alimentos são saudáveis, sem conservantes e sem aditivos químicos.</p>
                    "Toda nossa alimentação tem componentes 100% naturais".</p>
            </div>
        </div>
    )
}
    
    export default Alimentare;