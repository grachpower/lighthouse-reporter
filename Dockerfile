FROM node:10
WORKDIR /app

COPY . .

RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && sh -c 'echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' && apt-get update -y && apt-get -y install google-chrome-stable

RUN npm install
RUN npm run build
ENTRYPOINT node ./dist/index.js