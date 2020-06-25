FROM node
USER node

RUN mkdir /home/node/app
WORKDIR /home/node/app
COPY package.json /home/node/app
COPY yarn.lock /home/node/app
RUN yarn install

COPY public /home/node/app/public
COPY data /home/node/app/data
COPY bin /home/node/app/bin
COPY src /home/node/app/src
COPY ./ecosystem.config.js /home/node/app/

EXPOSE 8001

CMD yarn start
