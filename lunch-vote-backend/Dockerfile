# Base image
FROM node:16-alpine

# Set working directory for backend
WORKDIR /usr/src/app

# Copy package.json and yarn.lock (or package-lock.json)
COPY lunch-vote-backend/package.json lunch-vote-backend/yarn.lock ./

# Install dependencies
RUN yarn install

# Copy all backend files
COPY lunch-vote-backend .

# Expose port 3000
EXPOSE 3000

# Start the application in development mode
CMD ["yarn", "dev"]
