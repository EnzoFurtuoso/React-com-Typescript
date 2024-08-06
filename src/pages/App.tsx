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

    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefas => ({
      ...tarefas, 
      selecionado: tarefas.id === tarefaSelecionada.id ? true : false
    })));
  }

  return (
    <div className={style.AppStyles}>
       <Formulario setTarefas={setTarefas}/>
       <List 
          tarefa={tarefas}
          selecionaTarefa={selecionaTarefa}
        />
       <Cronometro selecionado={selecionado}/>
    </div>
  );
}

export default App;
