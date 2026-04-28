const { WebSocketServer, WebSocket } = require('ws');

// rooms: 
const rooms = new Map();

function createRoomCode() {
    return Math.random().toString(36).substring(2, 7).toUpperCase();
}

function broadcast(room, data) {
    const msg = JSON.stringify(data)
}