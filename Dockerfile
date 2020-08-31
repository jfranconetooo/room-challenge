FROM node:12.18.3-alpine
WORKDIR /app
COPY . /app

RUN npm i

EXPOSE 3000
CMD ["npm", "start"]
