import time
from flask import Flask, jsonify, render_template
import sqlite3
import sys, os

def get_db_connection():
    conn = sqlite3.connect('movies.db')
    conn.row_factory = sqlite3.Row
    return conn


app = Flask(__name__)


@app.route('/api/health_check', methods=['GET'])
def check_health():
    return jsonify({
        'message': 'OK'
    }), 200


@app.route('/api/movies/', methods=['GET'])
def index():
    conn = get_db_connection()
    posts = conn.execute('SELECT * FROM movies').fetchall()
    conn.close()
    return render_template('index.html', posts=posts)


if __name__ == "__main__":
    for path, subdirs, files in os.walk("."):
        for name in files:
            print(os.path.abspath(os.path.join(path, name)))    



    if os.path.exists("/app/templates/assets/12_Angry_Men.jpg"):
        print("------------------------------------------------------")
    else:
        print("*******************************************************")

    app.run(host= '0.0.0.0', port=8000)