FROM ubuntu:latest
WORKDIR /app

COPY package*.json ./
RUN apt-get update && apt-get install -y \
nodejs \
npm &&  npm install

COPY . /app
EXPOSE 3000
CMD ["npm","start"]