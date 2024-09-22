# Base image
FROM node:16-alpine

# Set working directory for backend
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies using npm
RUN npm install

# Copy all backend files to the working directory
COPY . .

# Expose port 3001
EXPOSE 3001

# Start the application in development mode
CMD ["npm", "run", "dev","-p", "3001"]


