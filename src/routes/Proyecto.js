import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import { useEffect } from "react";

export default function Proyecto({user}) {
    const navigate = useNavigate();
    useEffect(() => {
        if (user.get() === null)
            navigate("/");
    }, []);
    return (
        <>
        <Nav user={user} />
        <main>
            lista de proyectos
        </main>
        </>
    );
}