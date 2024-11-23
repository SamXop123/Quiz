from flask import Flask, render_template, request, redirect, url_for, session

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        choice = request.form.get("choice")
        if choice == "yes":
            return redirect(url_for("start"))
        elif choice == "no":
            return redirect(url_for("nope"))
    return render_template("index.html")


@app.route("/nope")
def nope():
    return render_template("nope.html")


@app.route("/start")
def start():
    return render_template("start.html")


@app.route("/quiz")
def quiz():
    return render_template("quiz.html")


@app.route("/quiz2")
def quiz2():
    return render_template("quiz2.html")

@app.route("/quiz3")
def quiz3():
    return render_template("quiz3.html")

@app.route("/quiz4")
def quiz4():
    return render_template("quiz4.html")

@app.route("/quiz5")
def quiz5():
    return render_template("quiz5.html")

@app.route("/complete")
def complete():
    return render_template("complete.html")


if __name__ == "__main__":
    app.run(debug=True)
