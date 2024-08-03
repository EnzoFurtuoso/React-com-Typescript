import React from 'react';
import Formulario from '../components/Formulario/index'
import List from '../components/List/index'
import style from '../components/List/List.module.scss'
import Cronometro from '../components/Cronometro';

function App() {
  return (
    <div className={style.AppStyles}>
       <Formulario />
       <Cronometro />
       <List />
    </div>
  );
}

export default App;
