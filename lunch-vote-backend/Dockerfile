# Base image
FROM node:16-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all files
COPY . .

# Expose the port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start:dev"]
