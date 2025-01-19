from flask import Blueprint, jsonify
import random

api_blueprint = Blueprint('api', __name__)

@api_blueprint.route('/hello', methods=['GET'])
def hello():
    return jsonify({'message': 'Hello from Flask!'})


@api_blueprint.route('/random-number', methods=['GET'])
def get_random_number():
    return jsonify({'number': random.randint(1, 1000)})  # Random image size