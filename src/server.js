const socket = require('socket.io')();

const Client = require('./models/cliente');
const Profissional = require('./models/profissional');

socket.on('connection', (client) => {
    client.on('login-cliente', async (user) => {
        await Client.updateSocketId(user.idcliente, client.id)
    });
    client.on('login-profissional', async (user) => {
        await Profissional.updateSocketId(user.idprofissional, client.id);
    });
    client.on('client-send-private-message', async (message) => {
        const socket = await Profissional.getSocketId(message);
        client.broadcast.to(socket).emit('private-message', { idcliente: message.idcliente, iscliente: true, texto: message.texto });
    });
    client.on('profissional-send-private-message', async (message) => {
        const socket = await Client.getSocketId(message);
        client.broadcast.to(socket).emit('private-message', { idprofissional: message.idprofissional, iscliente: false, texto: message.texto });
    });
    client.on('send-request', async (request) => {
        const idsocket = await Profissional.getSocketId(request);
        if(idsocket) {
            client.broadcast.to(idsocket).emit('new-request', request);
        }
    });

    client.on('disconnect', () => {

    });
});

socket.listen(8081);