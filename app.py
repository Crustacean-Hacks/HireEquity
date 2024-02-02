from flask import Flask, url_for, render_template, request

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("mainpage.html")

if __name__ == "__main__":
    app.run(debug= True)
