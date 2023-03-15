import './App.css';
import React, { useState } from 'react';
function App() {
  const [values, setValues] = useState();

  const handleChangeValues = values => {
    setValues()
  }

  return (
    <div className='app--container'>
      <div className='register--container'>
        <h1 className='register--title'>Scrim Shop</h1>
        <input type='text' name='name' placeholder='Nome' className='register--input' onChange={handleChangeValues} />

        <input type='text' name='cost' placeholder='Preço' className='register--input' />

        <input type='text' name='category' placeholder='Categoria' className='register--input' />

        <button className='register--buttom'>Cadastrar</button>
      </div>
    </div>
  );
}

export default App;
