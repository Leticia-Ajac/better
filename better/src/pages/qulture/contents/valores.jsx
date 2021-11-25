import "../styles/valores.css"
import "../../home/styles/noticias.css"
import lb from"../../../assets/src_valores/linha-branca.png"
import lae from "../../../assets/src_valores/linha-azuj.png"
import lad from "../../../assets/src_valores/linha-azuj-dir.png"
import crianca from "../../../assets/src_valores/crianca.png"

const Valores = () => {
    return(
		<>
			<div className="noticias-title">
				<h2>VALORES</h2>
			</div>
			<div id='quebrar'>

				<div className="cards-valores" id="disciplina">
					<div className="escuridao" id='escuro-disc'></div>
					<p className="titulo_valor" id="tit-disc">Disciplina</p>
					<img className="lb" src= {lb} alt="" id="lb-disc"/>
					<p className="texto_valor" id="text-disc">Cumpre o combinado, é pontual com horário e seus compromissos. Executa suas tarefas de forma disciplinada. É focado, pragmático, otimiza o tempo. </p>
				</div>

				<div className="cards-valores" id="umild">
					<div className="escuridao" id='escuro-umild'></div>
					<p className="titulo_valor" id="tit-umild">Humildade</p>
					<img className="lb" src= {lb} alt="" id="lb-umild" />
					<p className="texto_valor" id="text-umild">Comprometido com o resultado, conhece com profundidade aquilo que faz e tem a visão do todo. Age com obstinação, disciplina e foco no detalhe. É mão na massa, busca sempre ser o melhor naquilo. </p>
				</div>

				<div className="cards-valores" id="determinacao">
					<div className="escuridao" id='escuro-deter'></div>
						<p className="titulo_valor" id="tit-deter">Determinação</p>
						<img className="lb" src= {lb} alt="" id="lb-deter"/>
						<p className="texto_valor" id="text-deter">É obstinado, entrega resultados superiores e cumpre seus compromissos. Faz as coisas acontecerem, busca alternativas para os problemas e engaja as pessoas.</p>
				</div>

				<div className="cards-valores" id="disponivel">
					<div className="escuridao" id='escuro-dispo'></div>
					<p className="titulo_valor" id='tit-dispo'>Disponibilidade</p>
					<img className="lb" src= {lb} alt="" id='lb-dispo'/>
					<p className='texto_valor' id='text-dispo'>É receptivo, acessível, disponível, não tem dia e não tem hora, está sempre pronto e tem o trabalho como prioridade. Está aberto ao novo, às mudanças e motivado para novos desafios.</p>
				</div>

				<div className="cards-valores" id="adono">
					<div className="escuridao" id='escuro-adono'></div>
					<p className="titulo_valor" id='tit-adono'>Atitude de dono</p>
					<img className="lb" src= {lb} alt="" id='lb-adono' />
					<p className='texto_valor' id='text-adono'>Comprometido com o resultado, conhece com profundidade aquilo que faz e tem a visão do todo. Age com obstinação, disciplina e foco no detalhe. É mão na massa.</p>
				</div>

				<div className="cards-valores" id="minimalista">
					<div className="escuridao" id='escuro-min'></div>
					<p className="titulo_valor" id='tit-min'>Simplicidade</p>
					<img className="lb" src= {lb} alt="" id='lb-min' />
					<p className='texto_valor' id='text-min'>Faz as coisas acontecerem de forma simples e prática, é mão na massa, vai direto ao ponto, descomplica e desburocratiza respeitando as normas.</p>
				</div>

				<div className="cards-valores" id="franco">
					<div className="escuridao" id='escuro-fran'></div>
					<p className="titulo_valor" id='tit-fran'>Franqueza</p>
					<img className="lb" src= {lb} alt="" id='lb-fran' />
					<p className='texto_valor' id='text-fran'>É direto, sincero, verdadeiro e transparente em suas relações, sempre com respeito, de forma positiva, agregadora e acolhedora. Não se omite, expressa suas opiniões </p>
				</div>
				
				<div ><img src={crianca} alt="" id='img_observadora' /></div>
			</div>
		</>
	);
};

export default Valores;
