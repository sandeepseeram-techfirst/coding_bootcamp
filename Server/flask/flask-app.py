#!/usr/bin/env python3

from flask import Flask
app = Flask(__name__)
@app.route("/")
def hello():
    return "Welcome to Flask Sample App"
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int("5500"))