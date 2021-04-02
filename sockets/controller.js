
const socketController = (socket) => {

    //cuando un cliente ese conecta
    console.log('Cliente conectado...', socket.id);

    //cuando un cliente ese desconecta
    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id);
    });

    // .on: para escuchar un evento y .emit: para emitir un evento al servidor
    //Escuchar desde el servidor (Back):
    socket.on('enviar-mensaje', (payload, callback) => {
        //console.log(payload);

        //Retroalimentación de emisiones del cliente hacia el servidor
        const id = 12345;
        callback(id);
        //callback({ id, fecha: new Date().getTime() });

        //Emitir desde el servidor (Back):
        //.broadcast = mandarle un mensaje a todos los clientes
        socket.broadcast.emit('enviar-mensaje', payload);
    });
}

module.exports = {
    socketController
}