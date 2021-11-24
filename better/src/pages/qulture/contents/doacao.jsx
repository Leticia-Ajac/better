import qrcode from '../../../assets/qr-code.png'
import linha from '../../../assets/linha doacao.png'
import l_resp from '../../../assets/linha-responsiva.png'


import '../styles/doacao.css'



const Doacao = () => {
    return(
        <div id='fundinho'>
            <div className='doacao-text1'> 
                <h1 id='tit-doacao'>Doação</h1>
                <img src={linha} alt="" id='linha'/>
                <img src={l_resp} alt="" id='l-resp' />
                <p className='texts' id='text1'>A escola convida pessoas e empresas que acreditam no poder da educação para fazerem parte deste legado!</p>
            </div>

            <div className='doacao-text2'>
                <p id="tit-t2">Ajude você também!<br/></p>
                <p id='text2'>&#8226; Acesse sua conta PicPay e scaneie o QR Code<br/><br/>&#8226; Entre em contato com o instituto@germinare.org.br</p>
            </div>

            <div id='propaganda'>
                <p id='arroba'>@doegerminare</p>
                <img src={qrcode} alt="" id='qr' />
            </div>
        </div>
    )
    }

export default Doacao;