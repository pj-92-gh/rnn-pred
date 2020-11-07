from flask import Flask, jsonify
from main import use_model
from flask_cors import CORS


## Flask setup
app = Flask(__name__)
CORS(app)

@app.route("/")
def welcome():
    return "Secret page do not look"

@app.route("/api/v1/rnn/<userinput>")
def test_model(userinput):
    s = use_model(userinput)
    json = jsonify(s)
    return json

if __name__ == "__main__":  
    app.run(debug=True)