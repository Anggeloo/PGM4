FROM node:16
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN mv PGM4.mjs index.mjs
RUN npm run build
EXPOSE 3000
CMD ["node", "index.mjs"]