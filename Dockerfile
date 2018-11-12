FROM node:6.11.5

RUN npm install -g http-server

WORKDIR /app
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# 8080:8080
EXPOSE 8080

CMD [ "http-server", "dist" ]
