FROM node:24-alpine

ENV NODE_VERSION 24.6.0

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 3001

CMD [ "node", "index.js"]