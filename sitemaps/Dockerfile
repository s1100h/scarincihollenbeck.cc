FROM python:3.9.0a5

WORKDIR /src
ADD app /src

RUN pip install -r requirements.txt

RUN virtualenv env

CMD [ "python", "./app.py" ]
