from flask import Flask, request, jsonify
from flask_cors import CORS
from models import db, User

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:@localhost/student_portal_database'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)



@app.route('/')
def home():
    return "Student Portal Backend Connected Successfully"

from flask import request, jsonify

@app.route('/register', methods=['POST'])
def register():
    data = request.json

    new_user = User(
        username=data['username'],
        email=data['email'],
        password=data['password'],
        age=data.get('age')
    )

    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User registered successfully"})


if __name__ == '__main__':
    app.run(debug=True)
