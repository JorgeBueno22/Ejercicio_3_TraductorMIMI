import React from "react";
import { useState } from "react";

export const Translator = () => {
  
  const [miArray, setMiArray] = useState(['a', 'e', 'o', 'u']);
  const [miString, setMiString] = useState('');


  const traducir = (event) => {
    const nuevoString = event.target.value;

    const comparaciones = miArray.map((valor) => valor === nuevoString.charAt(nuevoString.length - 1));
    
    const cambiar  = comparaciones.map(() => comparaciones.charAt(comparaciones.length - 1)) === true;
    
    console.log('Comparaciones:', comparaciones);

    setMiString(nuevoString);

  };

  return (
    <>
      <textarea
        id="area"
        name="area"
        rows="4"
        cols="50"
        onChange={traducir}
      ></textarea>

      <p>{miString}</p>
    </>
  );
};
