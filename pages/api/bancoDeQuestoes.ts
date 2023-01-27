import QuestaoModel from "../../model/questao";
import respostaModel from "../../model/resposta";

const questoes: QuestaoModel[] = [
  new QuestaoModel(666, 'qual é o nome correto do amongus',[
    respostaModel.errada('Asmodeus'),
    respostaModel.errada('amongus'),
    respostaModel.errada('sugoma'),
    respostaModel.certa('Amogus'),
  ]),
  new QuestaoModel(999, 'Quem criou essa budega?',[
    respostaModel.errada('Elon Musk'),
    respostaModel.errada('Patrick Beatman ao som de Perfect Girl'),
    respostaModel.errada('Meu pai'),
    respostaModel.certa('Eduardo Freitas'),
  ]), 
  new QuestaoModel(787, 'Quem é o rei do universo',[
    respostaModel.errada('Deus do cristianismo'),
    respostaModel.errada('Patrick Beatman ao som de Perfect Girl'),
    respostaModel.errada('Caneta azul'),
    respostaModel.certa('Messi dançando ando na prancha'),
  ]), 
  new QuestaoModel(567, 'Quem nasceu em Tilambuco é:',[
    respostaModel.errada('tilambucano'),
    respostaModel.errada('Manoel Gomes bom demaise'),
    respostaModel.errada('Cristiano Ronaldo zuuu'),
    respostaModel.certa('Tilambuquense'),
  ])
]

export default questoes
