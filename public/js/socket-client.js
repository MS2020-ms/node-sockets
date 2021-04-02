//Referencias del HTML
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

//ejecuta cada conexion del cliente
const socket = io();

//Listener = EventListener = Observable
socket.on('connect', () => {
    console.log('Conectado');
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
});

socket.on('disconnect', () => {
    console.log('Desconectado del servidor');
    lblOnline.style.display = 'none';
    lblOffline.style.display = '';
});

//Escuchar en el cliente el evento enviar-mensaje:
socket.on('enviar-mensaje', (payload) => {
    console.log(payload);
})

//EventListaner para el boton
btnEnviar.addEventListener('click', () => {
    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: '123ABC',
        fecha: new Date().getTime()
    }
    // console.log(mensaje);
    // .on: para escuchar un evento y .emit: para emitir un evento al servidor
    // Emitir desde el cliente (Front):
    socket.emit('enviar-mensaje', payload, (id) => {
        console.log('Desde el server', id);
    });
})