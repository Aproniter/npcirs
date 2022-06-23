FROM node:13.12.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install react-scripts -g

# RUN chmod a+x /usr/src/app/node_modules/.bin/react-scripts
# RUN npm run build
COPY . .
EXPOSE 3000
CMD [ "npm", "start"]