from flask import Flask

app = Flask(__name__)

@app.route('/projects')
def projects():
    return {
        "projects":[
            {
                "name":"Anilist",
                "url":"https://github.com/ChristianC93/anime_List",
                "description":"An application that allows users to keep track of the anime they have watched, rate them, and write reviews. Built using a Rails API backened and a React Frontend"
            },

            {
                "name":"Calorie Tracker",
                "url":"https://github.com/ChristianC93/calorie-tracker",
                "description":"A calorie tracker that allows users to keep track of their meals and exercises. Users can register, log in, and view their meal and exercise data in a table format. Built using a React frontend and a Rails API backend."
            },
        ]
    }


if __name__ =="__main__":
    app.run(debug=True)
