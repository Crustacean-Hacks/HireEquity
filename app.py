from flask import Flask, url_for, render_template, request

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        model_method = request.form["model-name"]
        print(model_method)
    return render_template("mainpage.html")

if __name__ == "__main__":
    app.run(debug= True)
