import datetime
import uuid
from functools import wraps

import jwt
from flask import Flask, json, jsonify, make_response, request
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import check_password_hash, generate_password_hash

app = Flask(__name__)

app.config['SECRET_KEY'] = "qwerty"
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///todo.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    public_id = db.Column(db.String(50), unique=True)
    name = db.Column(db.String(50), unique=False)
    email = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(80), unique=False)
    grade = db.Column(db.Integer)
    points = db.Column(db.Integer, nullable=True, default=100)
    deposits = db.Column(db.Integer, nullable=True)
    withdraw = db.Column(db.Integer, nullable=True)
    admin = db.Column(db.Boolean, unique=False)


""" class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(200))
    user_id = db.Column(db.Integer, unique=True)
    complete = db.Column(db.Boolean, unique=False)

 """


def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None

        if 'x-acess-token' in request.headers:
            token = request.headers['x-access-token']

        if not token:
            return jsonify({'message': 'Token missing'})

        try:
            data = jwt.decode(token, app.config['SECRET_KEY'])
            curUsr = User.query.filter_by(public_id=data['public_id']).first()
        except:
            return jsonify({'message': 'Token invalid'}), 401

        return f(curUsr, *args, **kwargs)
    return decorated


@app.route("/user", methods=["GET"])
# @token_required
def get_all_users():
    users = User.query.all()

    usrList = []

    for i in users:
        usrDetails = {}
        usrDetails['public_id'] = i.public_id
        usrDetails['name'] = i.name
        usrDetails['email'] = i.email
        usrDetails['password'] = i.password
        usrDetails['grade'] = i.grade
        usrDetails['admin'] = i.admin
        usrList.append(usrDetails)

    return jsonify({'users': usrList})


@app.route("/user/<public_id>", methods=["GET"])
@token_required
def get_one_user(curUsr, public_id):
    if not curUsr.admin:
        return jsonify({'message': 'No access'})

    usr = User.query.filter_by(public_id=public_id).first()

    if not usr:
        return jsonify({'message': "No user found"})

    usrDetails = {}
    usrDetails['public_id'] = usr.public_id
    usrDetails['name'] = usr.name
    usrDetails['email'] = usr.email
    usrDetails['password'] = usr.password
    usrDetails['admin'] = usr.admin

    return jsonify({'user': usrDetails})


@app.route("/user", methods=["POST"])
# @token_required
def create_user():
    """     if not curUsr.admin:
        return jsonify({'message' : 'No access'}) """
    details = request.get_json()
    print(details)
    hPass = generate_password_hash(details['password'], method='sha256')
    usr = User(public_id=str(uuid.uuid4()),
               name=details['name'], email=details['email'], password=hPass, grade=details['grade'],  admin=False)
    db.session.add(usr)
    db.session.commit()
    return jsonify({'message': 'user created'})


""" @app.route("/user/<public_id>", methods=["PUT"])
@token_required
def promote_user(curUsr, public_id):
    if not curUsr.admin:
        return jsonify({'message' : 'No access'})

    usr = User.query.filter_by(public_id=public_id).first()

    if not usr:
        return jsonify({'message': "No user found"})

    usr.admin = True
    db.session.commit()

    return jsonify({'message': 'user promoted'})
 """


@app.route("/user/<public_id>", methods=["DELETE"])
@token_required
def delete_user(curUsr, public_id):
    if not curUsr.admin:
        return jsonify({'message': 'No access'})

    usr = User.query.filter_by(public_id=public_id).first()

    if not usr:
        return jsonify({'message': "No user found"})

    db.session.delete(usr)
    db.session.commit()
    return jsonify({'message': 'user deleted'})


@app.route('/login')
def login():
    auth = request.authorization

    if not auth or not auth.username or not auth.password:
        return make_response('Not verified', 401, {'WWW-Authenticate': 'Basic realm="Login required"'})

    usr = User.query.filter_by(name=auth.username).first()

    if not usr:
        return make_response('Not verified', 401, {'WWW-Authenticate': 'Basic realm="Login required"'})

    if check_password_hash(usr.password, auth.password):
        token = jwt.encode({'public_id': usr.public_id, 'exp': datetime.datetime.utcnow(
        ) + datetime.timedelta(minutes=30)}, app.config['SECRET_KEY'])

        return jsonify({'token': token.decode('UTF-8')})

    return make_response('Not verified', 401, {'WWW-Authenticate': 'Basic realm="Login required"'})


@app.route("/deposit", methods=["POST"])
def process():
    details = request.get_json()
    deposits = details['depositvalue']
    points = details['points']
    if deposits < points:
        return jsonify({"message" : "Well done! You have successfully deposited your points into the bank"})
    return jsonify({"message" : "You do not have enough points to deposit"}), 404


@app.route("/withdraw", methods=["POST"])
def withdraw():
    details = request.get_json()
    withdraw = details['withdrawvalue']
    points = details['points']
    if withdraw < points:
        return jsonify({"message" : "Well done! You have successfully withdrawn your points from the bank"})
    return jsonify({"message" : "You do not have enough points to withdraw"}), 404


if __name__ == "__main__":
    app.run(debug=True)
