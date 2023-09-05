import {useState} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './routes/Login';
import Empleados from './routes/Empleados';
import Proyecto from './routes/Proyecto';
import Propuestas from './routes/Propuestas';
import FormularioEmpleado from './routes/FormularioEmpleado';

export default function MyRouter(props) {
    const userState = useState(null);
    const user = {get: () => userState[0], set: userState[1]};
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route index element={<Login user={user} />} />
                    <Route path='proyecto' element={<Proyecto user={user} />} />
                    <Route path='propuestas' element={<Propuestas user={user} />}></Route>
                    <Route path='empleados' element={<Empleados user={user} />} />
                    <Route path='empleados/new' element={<FormularioEmpleado user={user} />} />
                </Route>
                <Route path='/*' element={<p>feeerdy404</p>} />
            </Routes>
        </BrowserRouter>
    );
}