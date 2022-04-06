from flask import Flask, request, jsonify, make_response
from flask_restx import Api, Resource, fields
import joblib
import numpy as np
import sys
import werkzeug

werkzeug.cached_property = werkzeug.utils.cached_property

import flask_restful

flask_app = Flask(__name__)
app = Api(app = flask_app, 
      version = "1.0", 
      title = "Heart disease predictor", 
      description = "Predict if someone is at risk of heart disease")

name_space = app.namespace('prediction', description='Prediction APIs')

model = app.model('Prediction params', 
	{'age': fields.Float(required = True, 
    description="age of patient", 
    help="age cannot be blank"),

    'sex': fields.Float(required = True, 
    description="Sex of patient", 
    help="sex cannot be blank"),

    'cp': fields.Float(required = True, 
    description="cp of patient", 
    help="cp cannot be blank"),

    'trestbps': fields.Float(required = True, 
    description="trestbps of patient", 
    help="trestbps cannot be blank"),

    'cholestrol': fields.Float(required = True, 
    description="cholestrol of patient", 
    help="cholestrol cannot be blank"),

    'fbs': fields.Float(required = True, 
    description="fbs", 
    help="fbs cannot be blank"),

    'restecg': fields.Float(required = True, 
    description="restecg", 
    help="restecg cannot be blank"),

    'thalach': fields.Float(required = True, 
    description="thalach", 
    help="thalach cannot be blank"),

    'exang': fields.Float(required = True, 
    description="exang", 
    help="exang cannot be blank"),

    'oldpeak': fields.Float(required = True, 
    description="oldpeak", 
    help="oldpeak cannot be blank")})

classifier = joblib.load('rfs.joblib')

@name_space.route("/")
class MainClass(Resource):
  def options(self):
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add('Access-Control-Allow-Headers', "*")
    response.headers.add('Access-Control-Allow-Methods', "*")
    return response

  @app.expect(model)		
  def post(self):
    try: 
      formData = request.json
      data = [val for val in formData.values()]
      prediction = classifier.predict(np.array(data).reshape(1, -1))
      risks = { 0: "Not at risk", 1: "At risk"}
      response = jsonify({
              "statusCode": 200,
              "status": "Prediction made",
              "result": "The person is" + risks[prediction[0]]
              })
      response.headers.add('Access-Control-Allow-Origin', '*')
      return response
    except Exception as error:
      return jsonify({
				"statusCode": 500,
				"status": "Could not make prediction",
				"error": str(error)
			})



