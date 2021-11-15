import imagequlture from '../../assets/img-qulture.png'
import './styles/image.css'

const Image = () => {
    return(
        <div className="page-qulture">
            <img className="qulture-img" src={imagequlture} alt="Aqui na Germinare você pode sonhar ainda mais!"/>
        </div>
    )
}
    
    export default Image;