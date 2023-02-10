from flask import Flask, request
from flask_mail import Mail
import os
from dotenv import load_dotenv
from flask_cors import CORS


app = Flask("Unit Test Server")
CORS(app)
load_dotenv()
app.config['MAIL_SERVER']='smtp.mailtrap.io'
app.config['MAIL_PORT'] = 2525
app.config['MAIL_USERNAME'] = os.getenv('EMAIL')
app.config['MAIL_PASSWORD'] = os.getenv('PASSWORD')
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
mail = Mail(app)

@app.route("/")
def heartbeat():
    return {
        "greeting": "Hello World. The grass is green, the sun is shining and the server is alive!"
    }

@app.route("/email")
def sendEmail():
  args = request.args
  msg = Message(args.message, sender=args.from)
  
  mail.send(msg)
  return "Message sent!"

@app.route("/shopping")
def getShoppingList():
    return {
        "shoppingList": ["Malteasers", "Butter", "Oat Milk", "Almond Milk", "Old El Paso Fajita Mix", "Store Brand Tortillas", "Bread", "Chicken Stock", "Beef Stock", "Vegetable Stock", "Fish Stock", "Unimaginative Stock"]
    }
    

if __name__ == '__main__':
   app.run(debug = True)
