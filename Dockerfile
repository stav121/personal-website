FROM nginx:alpine
COPY dist/personal-website /usr/share/nginx/html
RUN apk add python3 python3-dev py3-pip build-base libressl-dev musl-dev libffi-dev
RUN pip3 install pip --upgrade
RUN pip3 install certbot-nginx
RUN mkdir /etc/letsencrypt
COPY default.conf /etc/nginx/conf.d/default.conf
