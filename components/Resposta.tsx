import RespostaModel from "../model/resposta"
import styles from '../styles/Resposta.module.css'

interface RespostaProps{
    valor: RespostaModel
    indice: number
    letra: string
    corFLetra: string
    respostaFornecida:(indice:number) => void
}

export default function Resposta(props: RespostaProps)
{
    const resposta = props.valor
    const respostaRevelada = resposta.revelada ? styles.respostaRevelada : ''
    return(
        <div className={styles.resposta}
        onClick={ () => props.respostaFornecida(props.indice)}>
            <div className={`${respostaRevelada} ${styles.conteudoResposta}`} >
                {!resposta.revelada ?
                (   
                    <div className={styles.frente}>
                        <div className={styles.letra}
                        style={{backgroundColor: props.corFLetra}}>                 
                            {props.letra}
                        </div>
                        <div className={styles.valor}>
                            {resposta.valor}
                        </div>
                    </div>

                ): (
                    <div className={styles.verso}>
                        {resposta.certa ?(
                            <div className={styles.certa}>
                                <div>A resposta esta certa </div>
                               
                            </div>
                            
                        ) : (
                            <div className={styles.errada}>
                                <div>A resposta esta errrada </div>
                                
                            </div>                        
                        )}

                    </div>
                )}
            
            </div>
        </div>
         
    )
}