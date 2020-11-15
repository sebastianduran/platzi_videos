FROM node:10-alpine
WORKDIR /svr/app
COPY . .
RUN npm install
EXPOSE 3000
ENV NODE_ENV=producction
CMD ["node", "index.js"]