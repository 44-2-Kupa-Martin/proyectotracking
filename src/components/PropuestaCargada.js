import {styled} from "styled-components";


const Div = styled.div`
  margin: 10px 50px 0px 50px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Secciones = styled.div`

  background-color: #5068A9;
  display: flex;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 0px 20px 0px 20px;

  .id{
    margin-right: 60px;
  }

  p{
    color: white;
    margin-left: 10px;
    margin-right: 110px;
  }

  .nombre{
    margin-right: 200px;
  }

`;


export default function PropuestaCargada({propuesta}) {
    return(
        <Div>
        <Secciones>
            <p className="id">ID</p>
            <p className="nombre">NOMBRE</p>
            <p>FECHA LIMITE</p>
            <p>CLIENTE</p>
            <p>ESTADO</p>
            <p>DETALLES</p>
        </Secciones>
        </Div>
    )
}