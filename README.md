# TodoApp
A todo application that uses React.js and Redux to create the frontend and incorporates a backend django rest API

## Prerequisites
- Python 3.7.x
- pip3
- pipenv
- git
- nodejs (optional)
- npm (optional)

## Installation guide
**Django App**
- Create a folder called Todo anywhere in your home directory
```console
daozheng@ubuntu:~$ mkdir Todo
```
- Change into Todo directory
```console
daozheng@ubuntu:~/Todo$ cd Todo
```
- Git clone TodoApp from github
```console
daozheng@ubuntu:~/Todo$ git clone https://github.com/daoyzheng/TodoApp.git
```
- Run virtual environment in the Todo folder
```console
daozheng@ubuntu:~/Todo$ pipenv shell
```
- Now that you are in the virtual environment, run `pipenv install` to install necessay packages
```console
(Todo) daozheng@ubuntu:~/Todo$ pipenv install django django-filter djangorestframework
```

## Running the app
- To run the app, first run the virtual environment inside the Todo folder
```console
daozheng@ubuntu:~/Todo$ pipenv shell
```
- Change into the TodoApp folder
```console
(Todo) daozheng@ubuntu:~/Todo$ cd TodoApp
```
- Run the server
```console
(Todo) daozheng@ubuntu:~/Todo/TodoApp$ python manage.py runserver
```
**Django RESTFUL API**
- Now that the server is running, open your web browser and type in `localhost:8000/api/todos/` in the URL field, you should be able to see a list of Todo objects in JSON format
- To view a specific Todo object, type in `localhost:8000/api/todos/2` for example, there should only be one object listed

**React.js interface**
- To view the user interface, open your web  browser and type in `localhost:8000` in the URL field.

## Optional Installation
- To be able to make changes to the React.js part, the following additional installations are required
- Change back to the Todo folder
```console
daozheng@ubuntu:~/Todo/TodoApp$ cd ..
```
- Run the virtual environmnet
```console
daozheng@ubuntu:~/Todo$ pipenv shell
```
- Run the following command insie the Todo folder
```
(Todo) daozheng@ubuntu:~/Todo$ npm init -y
(Todo) daozheng@ubuntu:~/Todo$ npm i -D webpack webpack-cli
(Todo) daozheng@ubuntu:~/Todo$ npm i -D @babel/core babel-loader @babel/preset-env @babel/preset-react babel-plugin-transform-class-properties
(Todo) daozheng@ubuntu:~/Todo$ npm i react react-router-dom react-dom prop-types axios redux-devtools-extension redux react-redux redux-thunk
```

- Create a file called `.babelrc` inside the Todo folder, and add the following content inside the `.babelrc` file
```
(Todo) daozheng@ubuntu:~/Todo$ vim .babelrc
```
```
{
        "presets": ["@babel/preset-env", "@babel/preset-react"],
        "plugins": ["transform-class-properties"]
}
```
- Create a `webpack.config.js` file also inside the Todo folder, and add the following content inside it
```
(Todo) daozheng@ubuntu:~/Todo$ vim webpack.config.js
```
```
module.exports = {
        module: {
                rules: [{
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: {
                                loader: "babel-loader"
                        }
                }]
        }
}
```
- Now open the `package.json` file, under `"script":` delete the line with `"test"` and add the following
```
(Todo) daozheng@ubuntu:~/Todo$ vim package.json
```
```
"dev": "webpack --mode development --watch ./TodoApp/react_interface/src/index.js --output ./TodoApp/react_interface/static/frontend/main.js"
```
- Now when you run `npm dev run` command on the command line, any changes you made to the code inside the react_interface folder will automatically be reflected on the browser that's on the URL `localhost:8000`

        





