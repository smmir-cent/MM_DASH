from flask import Flask
app = Flask(__name__)
@app.route('/movies')
def hello_world():
    return 'Hello world!'