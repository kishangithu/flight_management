from flask_socketio import emit
from . import socketio

@socketio.on('connect')
def handle_connect():
    emit('status', {'message': 'Connected to WebSocket'})

@socketio.on('disconnect')
def handle_disconnect():
    print('Client disconnected')

def send_flight_update(flight_number, status):
    socketio.emit('flight_update', {
        'flight_number': flight_number,
        'status': status
    })
