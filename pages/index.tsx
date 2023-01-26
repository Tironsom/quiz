

import Questionario from '../components/Questionario'
import QuestaoModel from '../model/questao'
import { useEffect, useState} from 'react'
import { useRouter } from 'next/router'

  const Url_base = 'http://localhost:3000/api'

export default function home()
{
    const router = useRouter() 

    const[idsDasQuestoes, setidDasQuestoes] = useState<number[]>([])
    const [questao, setQuestao] = useState<QuestaoModel>()
    const [respostasCertas, setRespostasCertas] = useState<number>(0)

    async function carregarIdsDasQuestoes() {
      const resp = await fetch(`${Url_base}/questionario`)
      const idsDasQuestoes = await resp.json()
      setidDasQuestoes(idsDasQuestoes)
    }
  
    async function carregarQuestao(idQuestao: number) {
      const resp = await fetch(`${Url_base}/questoes/${idQuestao}`)
      const json = await resp.json()
      const novaQuestao = QuestaoModel.criarUsandoObjeto(json)
      setQuestao(novaQuestao)
    }
  
    useEffect(() => {
      carregarIdsDasQuestoes()
    }, [])
  
    useEffect(() => {
      idsDasQuestoes.length > 0 && carregarQuestao(idsDasQuestoes[0])
    }, [idsDasQuestoes])
  
    function questaoRespondida(questaoRespondida: QuestaoModel){
        setQuestao(questaoRespondida)
        const acertou = questaoRespondida.acertou
        setRespostasCertas(respostasCertas+(acertou ? 1:0))
    }

    function idProximaPergunta(){
      if(questao){
        const proximoIndice =  idsDasQuestoes.indexOf(questao.id) + 1
        return idsDasQuestoes[proximoIndice]  
      }
    }
    function irPraProximoPasso(){
      const proximoId = idProximaPergunta()
      proximoId ? irPraProximaQuestao(proximoId) : finalizar()
    }
    function irPraProximaQuestao(proximoId : number){
      carregarQuestao(proximoId)
    }
    function finalizar(){
      router.push({
        pathname: "/resultado",
        query:{
          total: idsDasQuestoes.length,
          certas: respostasCertas
        }
      })
    }
  
    return questao ? (
      <Questionario
        questao={questao}
        ultima={idProximaPergunta() === undefined}
        questaoRespondida={questaoRespondida}
        irPraProximoPasso={irPraProximoPasso} />
    ) : false
   
}
