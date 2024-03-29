from flask import Flask, session, redirect, url_for, render_template
from flask_babel import Babel

app = Flask(__name__)
app.secret_key = 'a_secret_key'  # Set a secret key for session management

def get_locale():
    # Retrieve the language from the session if it's set, otherwise default to 'en'
    return session.get('language', 'en')

babel = Babel(app)

babel.init_app(app, locale_selector=get_locale)

@app.route('/change-language/<language>')
def change_language(language):
    # Set the selected language in the session
    session['language'] = language
    return redirect(url_for('index'))  # Redirect to the homepage after changing the language

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
