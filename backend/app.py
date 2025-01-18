from flask import Flask
from routes.api import api_blueprint
from flask_cors import CORS

app = Flask(__name__)
app.register_blueprint(api_blueprint, url_prefix='/api')

CORS(app)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
