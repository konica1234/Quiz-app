# Quiz-app
This app is made using Django. It can be used to take quizes.

## Specifications of the app.

- SQLite used as the database for backend

- HTML CSS and Javascript Django template are used in frontend

- Python-Django is used for backend


**Part of the course project IT workshop**

*Group Members*

- [Sakshi Gupta](http://github.com/sakshi-codes)

- [Saumya Singh](https://github.com/Saumya-singh-02)

- [Konica Ranjan](https://github.com/konica1234)

## Some screenshots of the app.


![s1](https://raw.githubusercontent.com/konica1234/Quiz-app/master/Screenshot%20(214).png)
![s1](https://raw.githubusercontent.com/konica1234/Quiz-app/master/Screenshot%20(215).png)
![s1](https://raw.githubusercontent.com/konica1234/Quiz-app/master/Screenshot%20(216).png)
![s1](https://raw.githubusercontent.com/konica1234/Quiz-app/master/Screenshot%20(217).png)
![s1](https://raw.githubusercontent.com/konica1234/Quiz-app/master/Screenshot%20(218).png)


## Functions:

## Admin:
- Create Admin account using command
```
py manage.py createsuperuser
```
- Can Add, View, Delete Quiz.
- Can Add Questions To Respective quiz With options and correct answer.
- Can also see result


## Student:

<ul>
  <li>Can Give Exam Any Time, There Is No Limit On Number Of Attempt.</li>
  <li>Can View Marks Of Each Attempt Of Each Exam.</li>
  <li>Question Pattern Is MCQ With 4 Options And 1 Correct Answer.</li>
</ul>

## HOW TO RUN THIS PROJECT

- Install Python(3.7.6) (Dont Forget to Tick Add to Path while installing Python)
- Open Terminal and Execute Following Commands :
```
python -m pip install -r requirements. txt
```
- Download This Project Zip Folder and Extract it
- Move to project folder in Terminal. Then run following Commands :
```
py manage.py makemigrations
py manage.py migrate
py manage.py runserver
```
- Now enter following URL in Your Browser Installed On Your Pc
```
http://127.0.0.1:8000/
```
