FROM node:17-alpine

RUN yarn global add nodemon
RUN yarn global add express 
# when running commands on app, run from the working directory
WORKDIR /app

# By copying just the package.json and yarn.lock files, we can take advantage of this caching system
COPY package.json .
COPY yarn.lock . 

# specify commands to run the image at runtime
RUN yarn install 

# required for docker desktop port mapping
EXPOSE 4000

# commands to run at run time, not build time
CMD ["yarn", "run", "dev"]
