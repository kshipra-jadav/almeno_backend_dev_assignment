FROM node:18-alpine

WORKDIR /client

COPY package.json .
RUN npm install
RUN npm install -g serve

COPY . .

RUN npm run build

ENV NODE_ENV production

CMD ["npx", "serve", "dist"]