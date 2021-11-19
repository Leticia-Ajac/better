import qrcode from '../../../assets/qr-code.png'
import linha from '../../../assets/linha doacao.png'


import '../styles/doacao.css'



const Doacao = () => {
    return(
        <div className="container-doacao">
            <div className="container-1">
                <h1>Doação</h1>
                <img className="linha-doacao" src={linha}/>
                <p>A escola convida pessoas e empresas que acreditam no poder da educação para fazerem parte deste legado!</p>
            </div>
            <div className="container-2">
                <img className="qr-code" src={qrcode}/>
            </div>
            <div className="container-3">
                <p>
                Ajude você também!
                
                .Acesse sua conta PicPay e scaneie o QR Code
                
                .Entre em contato com o instituto@germinare.org.br
                </p>
            </div>
        </div>
    )
    }

export default Doacao;