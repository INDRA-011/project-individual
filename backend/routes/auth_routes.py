from flask import Blueprint, request, jsonify

auth_bp = Blueprint("auth", __name__)

# Dummy database
users = [
    {"username": "john", "password": "1234"},
    {"username": "sara", "password": "abcd"}
]

@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()

    if not data:
        return jsonify({"error": "No JSON received"}), 400

    username = data.get("username")
    password = data.get("password")

    for user in users:
        if user["username"] == username and user["password"] == password:
            return jsonify({"status": "success", "message": f"Welcome {username}!"})

    return jsonify({"status": "error", "message": "Invalid credentials"}), 401

