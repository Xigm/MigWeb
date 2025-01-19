from flask import Flask, send_from_directory
from routes.api import api_blueprint
from flask_cors import CORS

app = Flask(__name__, static_folder="static")
app.register_blueprint(api_blueprint, url_prefix='/api')


@app.route("/images/<filename>")
def get_image(filename):
    return send_from_directory("static/images", filename)

CORS(app)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
