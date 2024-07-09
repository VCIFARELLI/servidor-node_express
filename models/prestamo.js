class Prestamo {
    constructor(id_prestamo, id_libro, id_usuario, fecha_prestamo, fecha_devolucion) {
        this.id_prestamo = id_prestamo;
        this.id_libro = id_libro;
        this.id_usuario = id_usuario;
        this.fecha_prestamo = fecha_prestamo;
        this.fecha_devolucion = fecha_devolucion;
    }
}

export default Prestamo;
