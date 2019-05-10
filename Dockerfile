FROM node as builder

WORKDIR /usr/src/app

# Install app
COPY . .
RUN npm run install
RUN npm run build

CMD [ "npm", "start"]
