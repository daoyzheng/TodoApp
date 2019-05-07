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
daozheng@ubuntu:~/Todo$ cd TodoApp
```
- Run the server
```console
daozheng@ubuntu:~/Todo/TodoApp$ python manage.py runserver
```
**Django RESTFUL API**
- Now that the server is running, open your web browser and type in `localhost:8000/api/todos/` in the URL field, you should be able to see a list of Todo objects in JSON format
- To view a specific Todo object, type in `localhost:8000/api/todos/2` for example, there should only be one object listed
**React.js interface**
- To view the user interface, open your web  browser and type in `localhost:8000` in the URL field.

## Optional Install

        





