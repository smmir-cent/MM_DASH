import time
from flask import Flask, jsonify, render_template
import sqlite3


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


@app.route('/api/movies/<id>', methods=['GET'])
def movie(id):
    conn = get_db_connection()
    posts = conn.execute('SELECT * FROM movies where id='+str(id)).fetchall()
    conn.close()
    return render_template('movie.html', posts=posts)




if __name__ == "__main__":
    app.run(host= '0.0.0.0', port=8000)