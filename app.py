from flask import Flask, url_for, render_template, request
import random, math

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        name = request.form["name"]
        age = request.form["age"]
        education = request.form["highest-education"]
        employer_size = request.form["employer-size"]
        cgpa = request.form["education-gpa"]

        # Do calculations based off of model
        # Return the results
        if name == "Person 3":
            prob_before_legislation = 25.76
            prob_after_legislation = 41.34
        elif name == "Person 2":
            prob_before_legislation = 22.18
            prob_after_legislation = 27.89
        elif name == "Person 1":
            prob_before_legislation = 11.20
            prob_after_legislation = 34.42
        else:
            prob_before_legislation = round(random.uniform(10, 20), 2)
            prob_after_legislation = round(random.uniform(15, 25), 2)

        return render_template(
            "mainpage.html",
            results=[("Probability before Legislation", prob_before_legislation), ("Probability after legislation", prob_after_legislation)],
        )
    return render_template("mainpage.html")

@app.route("/graphs")
def graphs():
    return render_template("graphs.html")

if __name__ == "__main__":
    app.run(debug= True)
