FROM node:17-alpine

WORKDIR /app

COPY package.json .

COPY yarn.lock . 

# specify commands to run the image at runtime
RUN yarn install 

COPY . .

# React runs on port 3000 by default
EXPOSE 3000

CMD ["yarn", "start"]