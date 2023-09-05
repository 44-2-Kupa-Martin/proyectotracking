import styled from "styled-components";
import logo from '../logo.svg';

import { HashLink as Link } from "react-router-hash-link";


const StyledNav = styled.nav`
    display: flex;
    height: 20vh;
    justify-content: space-between;
    background-color: lightblue;

    > :only-child {
        margin-left: auto;
        margin-right: auto;
    }

    img {
        height: 100%;
    }

    ul {
        display: flex;
        align-items: stretch;
        width: 30%;
        height: 100%;
    }

    li {
        display: block;
        height: 100%;
        flex-grow: 1;
    }
`;

export default function Nav({user}) {
    return (
        <StyledNav>
            {user.get() === null ? null : 
            <ul>
                {!["Tecnica", "Desarrollo"].includes(user.get().area) ? null :
                <li><Link to="/proyecto">Proyecto</Link></li>}

                {user.get().area !== "Comercial" ? null :
                <li><Link to="/propuestas">Propuestas</Link></li>}

                {user.get().area !== "RRHH" ? null :
                <li><Link to="/empleados">Empleados</Link></li>}

                <li>Vacaciones</li>
                <li>Cuenta</li>
            </ul>}
            <img src={logo} alt='Logo' />
        </StyledNav>
    );
}