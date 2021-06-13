FROM python:3.8

ADD requirements.txt /
RUN pip install -r requirements.txt

WORKDIR /api
COPY ./api/ .

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]


