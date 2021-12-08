import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Welcome from './components/inicio/welcome.components'
import Cuerpo from './components/cuerpo/body.components'
import Footer from './components/footer/footer.component'

function App() {
  const [selectNombre, setSelectNombre] = useState('Nombre');
  const [selectPuesto, setSelectPuesto] = useState('Puesto');
  const [selectAntigüedad, setSelectAntigüedad] = useState('Antigüedad');
  const [selectEdad, setSelectEdad] = useState('Edad');

  const Empleados = [
    {
      nombre: 'Francisco Montero',
      puesto: "CEO",
      antigüedad: "10",
      edad: 35
    },
    {
      nombre: 'Juan Perez',
      puesto: "CTO",
      antigüedad: "12",
      edad: 32
    },
    {
      nombre: 'Jorge Martínez',
      puesto: "COO",
      antigüedad: "15",
      edad: 40
    },
    {
      nombre: 'Francisco Montero',
      puesto: "Gerente",
      antigüedad: "20",
      edad: 50
    }
  ];

  const cambiarInformacionEmpleado = (event, nombre, puesto, antigüedad, edad) => {
    setSelectNombre(nombre);
    setSelectPuesto(puesto);
    setSelectAntigüedad(antigüedad);
    setSelectEdad(edad);
  };

  return (
    <div className="App">
       <br />
      <h2 style={{fontWeight: 'bold'}}>Selecciona un Empleado</h2>
      <Welcome cambiarInformacionEmpleado={cambiarInformacionEmpleado} Empleados={Empleados}/>
      <br />
      <Cuerpo nombre={selectNombre} puesto={selectPuesto} antigüedad={selectAntigüedad} edad={selectEdad}/>
      <br />
      <Footer></Footer>
    </div>
  );
}

export default App;
