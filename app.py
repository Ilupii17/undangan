from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
@app.route("/<name>")
def show_invitation(name=None):  # Mengganti - dengan spasi dan kapitalisasi setiap kata
    if name:
        name = f"YTH. {name.replace('-', ' ').upper()}"
    else:
        name = "Kamu :)"

    return render_template('index.html', name=name)

if __name__ == '__main__':
    app.run(debug=True)