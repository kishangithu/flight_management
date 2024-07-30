from flask import Blueprint, jsonify, request
from .models import db, Flight

main = Blueprint('main', __name__)

@main.route('/api/flights', methods=['GET'])
def get_flights():
    flights = Flight.query.all()
    return jsonify([flight.as_dict() for flight in flights])

@main.route('/api/flights/<int:flight_id>', methods=['GET'])
def get_flight(flight_id):
    flight = Flight.query.get_or_404(flight_id)
    return jsonify(flight.as_dict())

@main.route('/api/flights/<int:flight_id>/status', methods=['PUT'])
def update_flight_status(flight_id):
    flight = Flight.query.get_or_404(flight_id)
    flight.status = request.json.get('status')
    db.session.commit()
    return jsonify(flight.as_dict())

@main.route('/api/notifications/settings', methods=['POST'])
def save_notification_settings():
    settings = request.json
    # Save notification settings logic
    return jsonify(settings)

@main.route('/api/notifications/settings', methods=['GET'])
def get_notification_settings():
    # Fetch notification settings logic
    return jsonify({})
