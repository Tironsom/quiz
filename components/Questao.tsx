import styles from '../styles/Questao.module.css'
import QuestaoModel from "../model/questao";
import Enunciado from './Enunciado'
import Resposta from './Resposta'
import Temporizador from './Temporizador';
const letras =[
    {valor:'A', cor: '#D74C22'},
    {valor:'B', cor: '#A020F0'},
    {valor:'C', cor: '#f266ba'},
    {valor:'D', cor: '#7FFFD4'}
]
interface QuestaoProps {
    valor: QuestaoModel
    tempoPraResposta?: number
    respostaFornecida: (indice: number) =>  void
    tempoEsgotado: () => void
}


export default function questao(props : QuestaoProps){
    const questao = props.valor

    function renderResp(){
        return questao.respostas.map((resposta, i) => {
            return <Resposta 
                key={`${questao.id}-${i}`}
                valor ={resposta}
                indice={i}
                letra ={letras[i].valor}
                corFLetra={letras[i].cor}
                respostaFornecida={props.respostaFornecida}
            />
        })
    }
    return(
        <div className={styles.questao}>
            <Enunciado texto={questao.enunciado}/>
            <Temporizador key={questao.id}
                duracao={props.tempoPraResposta ?? 10}
                tempoEsgotado={props.tempoEsgotado} />
                    {renderResp()}
        </div>
    )
}