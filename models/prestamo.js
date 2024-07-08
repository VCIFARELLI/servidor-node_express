class Prestamo {
    constructor(id_prestamo, usuario_id, libro_id, fecha_prestamo, fecha_devolucion) {
        this.id_prestamo = id_prestamo;
        this.usuario_id = usuario_id;
        this.libro_id = libro_id;
        this.fecha_prestamo = fecha_prestamo;
        this.fecha_devolucion = fecha_devolucion;
    }
}

export default Prestamo;
