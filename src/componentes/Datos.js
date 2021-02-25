import React, { useEffect, useState} from "react"
import './Datos.css';

import ReactDOM from 'react-dom';

function useDatos() {
  const [usuarios, setUsuarios] = useState([])
  
  useEffect(() => {
   
    fetch('https://randomuser.me/api/?results=50')
      .then(response => response.json())
      .then(datos => {
        setUsuarios(datos.results)
      })
  }, [])

  return usuarios
}

function mostrarInformacion(usuario) {
 
  const element = (
    <div>
      <p><img src={usuario.picture.large} ></img></p>
      <h1>{usuario.login.username}</h1>
      <p>{usuario.name.last} {usuario.name.first}</p>
      <p>{usuario.dob.age}</p>
      <p>{usuario.email}</p>
      
      <button onClick={volver}>Volver</button>
    </div>
  );
  
  ReactDOM.render(element, document.getElementById('root'));
 
}

function volver() {
  
  ReactDOM.render(<Datos/>, document.getElementById('root'));
 
}

function generarTabla(users){
  
  return users.map(function(data){
    return (
      <tr >
        <td data-title="first">{data.name.first}</td>
        <td data-title="last">{data.name.last}</td>
        <td data-title="city">{data.location.city}</td>
        <td data-title="nat">{data.nat}</td>
        <td data-title="pic"><img src={data.picture.thumbnail} onClick={()=>mostrarInformacion(data)} ></img></td>
    </tr>
    );
}.bind(this));
  
  }
 
export default function Datos() {
  
  const data = useDatos()

  return (
    <div className="container mt-5" align="center">
      <h1>Lista de Usuarios</h1>
      <div className="row">
        <div className="col-md-12">
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Ciudad</th>
                <th scope="col">Nacionalidad</th>
                <th scope="col">Imagen</th>
              </tr>
            </thead> 
            <tbody>
              {generarTabla(data)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
  )
}







