function Body(props){
    let nombre = props.nombre;
    let puesto = props.puesto;
    let antigüedad = props.antigüedad;
    let edad = props.edad; 
     
    return(
        <div>
            <h3 >Informacion de {nombre}</h3>
            <ul>
                <li>Es el {puesto}</li>
                <li>Tienen {antigüedad} años en la empresa </li>
                <li>Su edad es de {edad}</li>
            </ul> 
        </div>
        
    );
}

export default Body;