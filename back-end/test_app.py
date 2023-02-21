from app import *

def test_api_ping(client):
    res = client.get(url_for('lhttp://localhost:5000/'))
    assert res.json == { "greeting": "Hello World. The grass is green, the sun is shining and the server is alive!"}
    
if __name__ == '__main__':
    test_api_ping()