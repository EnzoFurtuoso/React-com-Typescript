import React, { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario/index'
import List from '../components/List/index'
import { ITarefa } from '../types/tarefa';
import style from '../components/List/List.module.scss'

function App() {

  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);

  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);

    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa, 
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })));
  }

  function finalizarTarefa() {
    if(selecionado) {
      setSelecionado(undefined)
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if(tarefa.id === selecionado.id) {
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa;
      }))
    }
  }

  return (
    <div className={style.AppStyles}>
       <Formulario setTarefas={setTarefas}/>
       <List 
          tarefa={tarefas}
          selecionaTarefa={selecionaTarefa}
        />
       <Cronometro 
            selecionado={selecionado}
            finalizarTarefa={finalizarTarefa}
        />
    </div>
  );
}

export default App;
