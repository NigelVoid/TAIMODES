from flask import Flask
from flask import request, render_template

app = Flask(__name__)


@app.route('/')
def main():
    return render_template('main.html')


if __name__ == '__main__':
    app.run()