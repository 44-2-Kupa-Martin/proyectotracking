import { styled } from "styled-components";

const Div = styled.div`
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
}

.container {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
}

input[type="text"],
input[type="number"],
input[type="date"] {
    width: 100%;
    padding: 7px;
    border: 1px solid #ccc;
    border-radius: 3px;
}

button {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}
`;

export default function CargaProyecto({propuesta}) {
    return (
        <Div>
            <h1>{propuesta.nombrePropuesta}</h1>
            <p>{propuesta.descripcionNecesidadCliente}</p>

            <form>
            <div class="form-group">
                <label for="nombreProyecto">Nombre del Proyecto:</label>
                <input type="text" id="nombreProyecto" name="nombreProyecto" required />
            </div>
            <div class="form-group">
                <label for="presupuesto">Presupuesto:</label>
                <input type="number" id="presupuesto" name="presupuesto" required />
            </div>
            <div class="form-group">
                <label for="horasDisponibles">Horas Disponibles:</label>
                <input type="number" id="horasDisponibles" name="horasDisponibles" required />
            </div>
            <div class="form-group">
                <label for="fechaInicio">Fecha de Inicio:</label>
                <input type="date" id="fechaInicio" name="fechaInicio" required />
            </div>
            <div class="form-group">
                <label for="fechaEntrega">Fecha de Entrega:</label>
                <input type="date" id="fechaEntrega" name="fechaEntrega" required />
            </div>
            <button type="submit">Subir</button>
        </form>

        </Div>
    );
}
/*
nombre proyecto
presupuesta
horasdisponibles
fecha inicion/entrega
subir
*/

