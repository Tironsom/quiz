import styles from '../styles/Resultado.module.css'
import Estatistica from '../components/Estatistica'
import Botao from '../components/Botao'
import { useRouter } from 'next/router'
import frame from '../styles/Frame.module.css'


export default function Resultado() {
    const router = useRouter()

    const total = +router.query.total
    const certas = +router.query.certas
    const percentual = Math.round((certas / total) * 100)

    return (
        <div className={styles.resultado} >
            <div className={frame.frame}>
                <iframe width="0" height="0" src="https://www.youtube.com/embed/2YWV5QtaZNs?autoplay=1" title="come over here and kiss me on my hot mouth i'm feeling romantical"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            </div>
            <h1>Resultado Final</h1>
            <div style={{ display: "flex" }}>
                <audio src="../sound/kkkk.mp3"  />
                <Estatistica texto="Perguntas" valor={total} />
                <Estatistica texto="Certas" valor={certas}
                    corFundo="#9CD2A4"/>
                <Estatistica texto="Percentual" valor={`${percentual}%`}
                    corFundo="#DE6A33" />
            </div>
            <Botao href="/" texto="Tentar Novamente" />
           
        </div>





    )
}
