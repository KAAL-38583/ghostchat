const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const crypto = require('crypto');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'intro.html'));
});

app.use(express.static(path.join(__dirname, '..', 'public')));

const rooms = {};

function generateSecureId() {
  return crypto.randomBytes(24).toString('hex');
}

io.on('connection', socket => {
  console.log('✅ Usuario conectado:', socket.id);

  socket.on('create-room', callback => {
    const roomId = generateSecureId();
    rooms[roomId] = { host: socket.id, guest: null };
    socket.join(roomId);
    socket.roomId = roomId;
    if (typeof callback === 'function') callback(roomId);
  });

  socket.on('join-room', (roomId, callback) => {
    const room = rooms[roomId];
    if (!room || room.guest) {
      if (typeof callback === 'function') callback({ success: false });
      return;
    }

    room.guest = socket.id;
    socket.join(roomId);
    socket.roomId = roomId;
    if (typeof callback === 'function') callback({ success: true });

    io.to(room.host).emit('guest-joined');
  });

  socket.on('send-message', ({ roomId, message }) => {
    const room = rooms[roomId];
    if (
      room &&
      (socket.id === room.host || socket.id === room.guest) &&
      typeof message === 'string' &&
      message.length <= 1000
    ) {
      socket.to(roomId).emit('receive-message', message.trim());
    }
  });

  socket.on('screenshot-detected', () => {
    const roomId = socket.roomId;
    if (!roomId || !rooms[roomId]) return;

    const room = rooms[roomId];
    const otherSocketId = socket.id === room.host ? room.guest : room.host;

    io.to(socket.id).emit('room-closed', 'SALA ELIMINADA POR INTENTO DE CAPTURA DE PANTALLA.');
    if (otherSocketId) {
      io.to(otherSocketId).emit('room-closed', 'INTENTO DE CAPTURA DE PANTALLA. SALA ELIMINADA.');
    }

    delete rooms[roomId];
    console.log(`⚠️ Sala cerrada por intento de captura: ${roomId}`);
  });

  socket.on('disconnect', () => {
    const roomId = socket.roomId;
    if (!roomId || !rooms[roomId]) return;

    const room = rooms[roomId];
    const otherSocketId = socket.id === room.host ? room.guest : room.host;

    if (otherSocketId) {
      io.to(otherSocketId).emit('room-closed');
    }

    delete rooms[roomId];
    console.log(`❌ Sala cerrada: ${roomId}`);
  });
});

server.listen(PORT, () => {
  console.log(`✅ Servidor activo en http://localhost:${PORT}`);
});
