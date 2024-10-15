from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/user-login', methods=['GET'])
def user_login():
    return jsonify({'success': True}), 200

if __name__ == '__main__':
    app.run(debug=True)
