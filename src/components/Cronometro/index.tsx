import Button from "../Button";
import  Relogio  from "./Relogio";
import styles from './Cronometro.module.scss'
import { tempoParaSegundos } from "../../common/utils/date";
import { ITarefa } from "../../types/tarefa";
import { useEffect, useState } from "react";

interface Props {
    selecionado: ITarefa | undefined
}

export default function Cronometro({selecionado} : Props) {

    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if(selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado?.tempo))
        }
    },[selecionado])

    return (
        <div className={styles.cronometro}>

            <p className={styles.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={styles.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>

            <Button>
                Começar!
            </Button>
        </div>
    )
}