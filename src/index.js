import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import reportWebVitals from './reportWebVitals';
import MyRouter from './MyRouter';
import PropuestaCargada from './components/PropuestaCargada';
import Propuesta from './components/Propuesta';

const propuestaDePrueba ={
    id: "10001",
    nombre: "Gestor de faltas",
    fechaLimite: "13/10/2023",
    cliente: "Juan Pablo",
    estado:"en curso",

    referentes: "x",
    fechadeinicio: "x",
    fechaReal: "x",
    horasDisponibles: "x",
    respComercial: "x",
    respDeGestion: "x",
    propuestaAsociada: "x",
    presupuesto: "100" 

    
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <PropuestaCargada propuesta = {propuestaDePrueba}/>
        <Propuesta propuesta = {propuestaDePrueba}/>
        <Propuesta propuesta = {propuestaDePrueba}/>
        <Propuesta propuesta = {propuestaDePrueba}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
