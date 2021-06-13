FROM nginx:latest

COPY ./client/build /var/www
COPY nginx.conf /etc/nginx/nginx.conf
COPY mime.types /etc/nginx/mime.types
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]