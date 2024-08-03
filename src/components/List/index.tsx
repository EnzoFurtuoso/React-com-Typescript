import React, { useState } from "react";
import styles from './List.module.scss'
import Item from './Item/index'

function List() {

    const [tarefas, setTarefas] = useState(
        [{
            tarefa: 'React',
            tempo: '02:00:00'
        }, {
            tarefa: 'JavaScript',
            tempo: '01:30:00'
        },{
            tarefa: 'TypeScript',
            tempo: '03:00:00'
        }]
    );

    
    return (
        <aside className={styles.listaTarefas}>
            <h2 onClick={() => {
                setTarefas([...tarefas, {tarefa: "Estudar estado", tempo: "05:00:00"}])
            }}
            
            >Estudos do dia</h2>

        <ul>

            {tarefas.map((item, index) => (
               <Item 
                    key={index}
                    {...item}
               />
            ))}

        </ul>
    </aside>
    )

}

export default List;