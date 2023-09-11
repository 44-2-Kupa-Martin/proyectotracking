    import React, { useState } from "react";
    import {styled} from "styled-components";

    const Propuesta = styled.div`
        margin: 10px 50px 0px 50px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        display: flex;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        padding: 0px 20px 0px 20px;

        .id{
          margin-right:30px;
        }

        .nombre{
          margin-right: 160px;
        }

        p{
            margin-left: 10px;
            margin-right: 110px;
        }
    `;

    const Button = styled.button`
        background-color: #86A6DF;
        color: white;
        border: none;
        width: 100px;
        height: 35px;
        border-radius: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
    `;

    const Overlay = styled.div`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    `;

    const ContenidoOverlay = styled.div`
        background: white;
        padding: 10px;
        border-radius: 5px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column; /* Aplica flexbox en columna */
     
        .fecha {
            display: flex; 
            justify-content: space-between; 
            margin-bottom: 5px;
        }

        .fecha p {
            margin-right: 80px;
        }
    `;



    export default function PropuestaCargada({ propuesta }) {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [overlayDetails, setOverlayDetails] = useState({});

    const abrirOverlay = () => {
        setOverlayDetails({
        nombre: propuesta.nombre,
        referentes: propuesta.referentes,
        fechadeinicio: propuesta.fechadeinicio,
        fechaLimite: propuesta.fechaLimite,
        fechaReal: propuesta.fechaReal,
        horasDisponibles: propuesta.horasDisponibles,
        respComercial: propuesta.respComercial,
        respDeGestion: propuesta.respDeGestion,
        propuestaAsociada: propuesta.propuestaAsociada,
        presupuesto: propuesta.presupuesto 
        });
        setIsOverlayOpen(true);
    };

    const cerrarOverlay = () => {
        setIsOverlayOpen(false);
    };

    return (
        <Propuesta>
        <p className="id">{propuesta.id}</p>
        <p className="nombre">{propuesta.nombre}</p>
        <p>{propuesta.fechaLimite}</p>
        <p>{propuesta.cliente}</p>
        <p>{propuesta.estado}</p>
        <Button onClick={abrirOverlay}>Ver Mas</Button>

        {isOverlayOpen && (
            <Overlay>
            <ContenidoOverlay>
                <h1>{overlayDetails.nombre}</h1>
                <div className="fecha">
                    <p>Fecha de Inicio: {overlayDetails.fechadeinicio}</p>
                    <p>Fecha Limite: {overlayDetails.fechaLimite}</p>
                    <p>Fecha Real: {overlayDetails.fechaReal}</p>
                </div>
                <p>Horas Disponibles: {overlayDetails.horasDisponibles}</p>
                <p>Referentes: {overlayDetails.referentes}</p>
                <p>Responsable comercial: {overlayDetails.respComercial}</p>
                <p>Responsable de Gestion: {overlayDetails.respDeGestion}</p>
                <p>Propuesta Asociada: {overlayDetails.propuestaAsociada}</p>
                <h4>PRESUPUESTO: {overlayDetails.presupuesto}</h4>
                <Button onClick={cerrarOverlay}>Cerrar</Button>
            </ContenidoOverlay>
            </Overlay>
        )}
        </Propuesta>
    );
    }