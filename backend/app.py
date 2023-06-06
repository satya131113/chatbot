from flask import Flask, jsonify, request
from flask_cors import CORS

# Rest of your code...

app = Flask(__name__)

CORS(app)

@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    message = data['message']
    # Process the message using OpenAI API or your chatbot logic
    # Return the response as JSON
    response = {'message': 'This is the response from the chatbotThis is the response from the chatbotThis is the response from the chatbotThis is the response from the chatbotThis is the response from the chatbotThis is the response from the chatbotThis is the response from the chatbotThis is the response from the chatbotThis is the response from the chatbotThis is the response from the chatbotThis is the response from the chatbotThis is the response from the chatbotThis is the response from the chatbotThis is the response from the chatbotThis is the response from the chatbotThis is the response from the chatbot'}
    return jsonify(response)

if __name__ == '__main__':
    app.run()
