import React, { useState } from "react";
import styles from './List.module.scss'
import Item from './Item/index'
import { ITarefa } from "../../types/tarefa";


interface Props {
    tarefa: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function List({ tarefa, selecionaTarefa } : Props ){

    return (
        <aside className={styles.listaTarefas}>
            <h2>Estudos do dia</h2>

        <ul>

            {tarefa.map(item => (
               <Item 
                    selecionaTarefa={selecionaTarefa}
                    key={item.id}
                    {...item}
               />
            ))}

        </ul>
    </aside>
    )

}

export default List;