FROM node

RUN mkdir /home/node/app
WORKDIR /home/node/app
COPY package.json /home/node/app
COPY yarn.lock /home/node/app
RUN yarn install

COPY public /home/node/app/public
COPY ecosystem.config.js /home/node/app/
COPY src /home/node/app/src
COPY .env /home/node/app

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
