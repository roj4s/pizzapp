FROM node
USER node

RUN mkdir /home/node/app
WORKDIR /home/node/app
COPY package.json /home/node/app
RUN npm install

COPY public /home/node/app/public
COPY data /home/node/app/data
COPY bin /home/node/app/bin
COPY src /home/node/app/src

EXPOSE 8001

CMD npm run knex migrate:latest && npm run knex seed:run && npm start
