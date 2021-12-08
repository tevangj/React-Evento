function Welcome(props){
    const getEmpleados = props.Empleados;
    const cambiarInformacionEmpleado = props.cambiarInformacionEmpleado;

    let estructura = getEmpleados.map((element) => {
        return (
            <a onClick={event => {cambiarInformacionEmpleado(event, element.nombre, element.puesto, element.antigüedad, element.edad)}}><div style={{cursor: 'pointer'}}>{element.nombre}</div></a>
        );
    });

    return estructura;
}

export default Welcome;