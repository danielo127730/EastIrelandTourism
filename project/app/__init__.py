from flask import Flask
from flask_babel import Babel

app = Flask(__name__)

def get_locale():
    return 'ko'

babel = Babel(app, locale_selector=get_locale)

from app import routes