from flask import Flask, request, jsonify
from flask_cors import CORS
from sqlalchemy.exc import IntegrityError

# 🔹 delayed import
from models import db, User, Course, Enrollment, Mark, Notice

app = Flask(__name__)
CORS(app)

# 🔹 Configure MySQL
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:@localhost/student_portal_database'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# 🔹 initialize db with app
db.init_app(app)

# 🔹 User Model
# 🔹 Register Route
@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()

    # Check if email already exists
    existing_user = User.query.filter_by(email=data['email']).first()
    if existing_user:
        return jsonify({
            "success": False,
            "message": "Email already registered"
        }), 400

    new_user = User(
        username=data['username'],
        email=data['email'],
        password=data['password'],  # No hashing for now
        age=data.get('age'),
        profile_image=data.get('profile_image')
    )

    try:
        db.session.add(new_user)
        db.session.commit()

        return jsonify({
            "success": True,
            "message": "User registered successfully"
        }), 201

    except IntegrityError:
        db.session.rollback()
        return jsonify({
            "success": False,
            "message": "Database error"
        }), 500

@app.route('/login', methods=['POST'])
def login():
    data = request.json

    user = User.query.filter_by(email=data['email']).first()

    if user and user.password == data['password']:
        return jsonify({"message": "Login successful"})
    else:
        return jsonify({"message": "Invalid credentials"}), 401


@app.route('/courses/<int:user_id>', methods=['GET'])
def get_courses(user_id):
    user_courses = Enrollment.query.filter_by(user_id=user_id).all()
    courses_list = []
    for enrollment in user_courses:
        course = Course.query.get(enrollment.course_id)
        courses_list.append({
            "course_id": course.id,
            "course_name": course.course_name,
            "teacher_name": course.teacher_name,
            "description": course.description
        })
    return {"courses": courses_list}, 200


@app.route('/marks/<int:user_id>', methods=['GET'])
def get_marks(user_id):
    user_marks = Mark.query.filter_by(user_id=user_id).all()
    results = []
    for mark in user_marks:
        results.append({
            "course_name": mark.course.course_name,
            "marks_obtained": mark.marks_obtained,
            "grade": mark.grade
        })
    return {"marks": results}, 200



@app.route('/notices', methods=['GET'])
def get_notices():
    notices = Notice.query.order_by(Notice.date_posted.desc()).all()
    notices_list = []
    for notice in notices:
        notices_list.append({
            "title": notice.title,
            "content": notice.content,
            "date_posted": notice.date_posted.strftime("%Y-%m-%d")
        })
    return {"notices": notices_list}, 200


# 🔹 Run App
if __name__ == '__main__':
    app.run(debug=True)
