from flask import Flask
from flask_cors import CORS
from routes.auth_routes import auth_bp

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5174"}})

app.register_blueprint(auth_bp, url_prefix="/api")

if __name__ == "__main__":
    app.run(debug=True)


print(app.url_map)
