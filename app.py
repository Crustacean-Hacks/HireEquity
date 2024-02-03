from flask import Flask, url_for, render_template, request
import random

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        model = request.form["model"]
        form = request.form
        age = request.form["age"]
        education = request.form["highest-education"]
        employer_size = request.form["employer-size"]
        cgpa = request.form["education-gpa"]

        # Do calculations based off of model
        # Return the results
        return render_template(
            "mainpage.html",
            model=model,
            results=[("percision", 2), ("recall", 3), ("f1", 4)],
        )
    return render_template("mainpage.html")

@app.route("/graphs")
def graphs():
    return render_template("graphs.html")

if __name__ == "__main__":
    app.run(debug= True)
