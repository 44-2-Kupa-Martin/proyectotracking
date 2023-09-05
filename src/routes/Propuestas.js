import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import { useEffect } from "react";

export default function Propuestas({user}) {
    const navigate = useNavigate();
    useEffect(() => {
        if (user.get() === null)
            return navigate("/");

        async function fetchData() {
            const response = await fetch(`http://${user.username}:${user.password}@${window.location.hostname}:4000/api/propuestas`);
            
        }
    });

    return (
        <>
        <Nav user={user} />
        <main>propuestas</main>
        </>
    );
}