from flask import Flask, request, jsonify
from flask_cors import CORS
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np
from chatbot_model import get_response

app = Flask(__name__)
CORS(app)

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get("question")
    if not user_input:
        return jsonify({"error": "No question provided"}), 400

    response = get_response(user_input)
    return jsonify({"answer": response})

if __name__ == '__main__':
    app.run(debug=True)