FROM nginx: latest
LABEL maintainer "muyou"
ADD ./build/ /www/test/
ADD nginx.conf /etc/nginx/
EXPOSE 80