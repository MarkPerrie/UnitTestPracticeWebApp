from flask import Flask, request, jsonify
from flask_mail import Mail, Message 
import os
from dotenv import load_dotenv
from flask_cors import CORS


app = Flask("Unit Test Server")
cors = CORS(app)
load_dotenv()
app.config['MAIL_SERVER']='sandbox.smtp.mailtrap.io'
app.config['MAIL_PORT'] = 2525
app.config['MAIL_USERNAME'] = os.environ.get('EMAIL_USER')
app.config['MAIL_PASSWORD'] = os.environ.get('EMAIL_PASS')
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
mail = Mail(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/")
def heartbeat():
    return {"greeting": "Hello World. The grass is green, the sun is shining and the server is alive!"}


@app.route("/email", methods=['POST'])
def sendEmail():
    email = request.args.get('email')
    subject = request.args.get('subject')
    message = request.args.get('email')
    
    msg = Message(subject, sender = os.environ.get('EMAIL_USER'), recipients = [email])
    msg.body = message
    mail.send(msg)
    return jsonify("Sent")


@app.route("/shopping")
def getShoppingList():
    return {
        "shoppingList": ["Malteasers", "Butter", "Oat Milk", "Almond Milk", "Old El Paso Fajita Mix", "Store Brand Tortillas", "Bread", "Chicken Stock", "Beef Stock", "Vegetable Stock", "Fish Stock", "Unimaginative Stock"]
    }


if __name__ == '__main__':
    app.run()
