import QuestaoModel from "../../model/questao";
import respostaModel from "../../model/resposta";

const questoes: QuestaoModel[] = [
  new QuestaoModel(666, 'Onde foi o Acidente de Chernobyl',[
    respostaModel.errada('Russia'),
    respostaModel.errada('Bielorrusia'),
    respostaModel.errada('Pica (Chile)'),
    respostaModel.certa('Ucrania'),
  ]),
  new QuestaoModel(999, 'Quem criou essa budega?',[
    respostaModel.errada('Elon Musk'),
    respostaModel.errada('Patrick Beatman ao som de Perfect Girl'),
    respostaModel.errada('Meu pai'),
    respostaModel.certa('Eduardo Freitas'),
  ]), 
  new QuestaoModel(787, 'País que fica abaixo de Bélgica',[
    respostaModel.errada('Inglaterra'),
    respostaModel.errada('Dinamarca'),
    respostaModel.errada('Brasil'),
    respostaModel.certa('Luxemburgo'),
  ]), 
  new QuestaoModel(567, 'Quem foi o presidente dos anos 2000:',[
    respostaModel.errada('Fernando Collor'),
    respostaModel.errada('Manoel Gomes bom demaise'),
    respostaModel.errada('Lula'),
    respostaModel.certa('Fernando Henrique Cardoso'),
  
  ])
]

export default questoes
