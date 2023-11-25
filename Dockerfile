FROM node:16.14.0-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

#build this docker file with:
#docker build -t marcos-bingo .

#run the image with:
#docker run -p 8081:3000 marcos-bingo
