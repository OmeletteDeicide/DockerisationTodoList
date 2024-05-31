FROM node:14

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install

COPY . .

# Copy the 'public' directory to the root
COPY src/public ./public

EXPOSE 3000
CMD ["npm", "start"]