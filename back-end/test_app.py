import pytest
from flask import jsonify
from app import *


def test_api_ping():
    response = app.test_client().get('/')
    assert response.status_code == 200
    assert  '{"greeting":"Hello World. The grass is green, the sun is shining and the server is alive!"}' in response.data.decode('utf-8')

if __name__ == '__main__':
    test_api_ping()
